import React from "react";
import Card from 'react-bootstrap/Card';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { withRouter } from 'react-router-dom';

import TBDimage from '../Images/TBC.png';
import Uimage from '../Images/U.png';
import PGimage from '../Images/PG.png';
import TWELVEimage from '../Images/12.png';
import TWELVEAimage from '../Images/12A.png';
import FIFTEENimage from '../Images/15.png';
import EIGHTEENimage from '../Images/18.png';

import axios from 'axios';
let APIkey = "14ab2cbcc55cd83768a0abc0594eb1ab";

class Film extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			movie: [],
			update: []
		}
	}

	componentDidMount() {
		let movie = [];
		axios.get("https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "?api_key=" + APIkey + "&language=en-US")
			.then(response => {
				movie = response.data;
			})
			.catch();
		axios.get("https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "/credits?api_key=" + APIkey)
			.then(response => {
				let castRaw = response.data.cast.slice(0, 10);
				let cast = [];
				for (let castMem in castRaw) {
					castMem = castRaw[castMem];
					cast.push(" " + castMem.name + " as " + castMem.character);
					movie.cast = ": " + cast;
				}

				let directors = []
				for (let crewMem in response.data.crew) {
					crewMem = response.data.crew[crewMem];
					if (crewMem.job === "Director") {
						directors.push(crewMem.name + " ");
					}
				}
				movie.director = directors;
			})
			.catch();
		axios.get("https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "/release_dates?api_key=" + APIkey)
			.then(response => {
				let certFound = false;
				for (let result in response.data.results) {
					result = response.data.results[result];
					if (result.iso_3166_1 === "GB" && result.release_dates[0].certification !== "") {
						certFound = true;
						movie.certification = result.release_dates[0].certification;
					}
				}
				if (certFound === false) {
					movie.certification = "TBD";
				}
				switch (movie.certification) {
					case ("TBD"): movie.certimg = TBDimage; break;
					case ("U"): movie.certimg = Uimage; break;
					case ("PG"): movie.certimg = PGimage; break;
					case ("12"): movie.certimg = TWELVEimage; break;
					case ("12A"): movie.certimg = TWELVEAimage; break;
					case ("15"): movie.certimg = FIFTEENimage; break;
					case ("18"): movie.certimg = EIGHTEENimage; break;
					default: movie.certimg = TBDimage;
				}
			})
			.catch();
			axios.get("https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "?api_key=" + APIkey + "&language=en-US")
			.then(response => {
				let runtime = response.data.runtime;
				if (runtime === null) {
					movie.runtime = "-";
				}
				else {
					let runtimeComp = "";
					let runHours = Math.floor(runtime / 60);
					if (runHours === 1) {
						runtimeComp += "1 Hour "
					}
					else if (runHours !== 0) {
						runtimeComp += runHours + " Hours "
					}
					let runMinutes = Math.floor(runtime % 60);
					if (runMinutes === 1) {
						runtimeComp += "1 Minute"
					}
					else if (runMinutes !== 0) {
						runtimeComp += runMinutes + " Minutes "
					}
					movie.runtime = runtimeComp;
				}
				this.state.movie = movie;
				console.log(movie);
				this.setState({ update: "true" });
				this.setState({ update: "false" });
			})
			.catch(() => {
				this.state.movie = movie;
				console.log(movie);
				this.setState({ update: "true" });
				this.setState({ update: "false" });
			});
	}

	render() {
		return (
			<div className="tiles pt-10">
				<MDBContainer >
					<MDBRow>
						<img width="100%" height="350px" src={"https://image.tmdb.org/t/p/w1280" + this.state.movie.backdrop_path} />
					</MDBRow>
					<MDBRow>
						<MDBCol>
							<h1 className="Listingh1">{this.state.movie.title}</h1>
						</MDBCol>
						<MDBCol>
							<img width="60px" height="60px" src={this.state.movie.certimg} />
						</MDBCol>
					</MDBRow>
					<MDBRow>
						<MDBCol>
							<h5 style={{textAlign: "left"}}>{this.state.movie.overview}</h5>
							<h5><b>Release Date </b>: {this.state.movie.release_date}</h5>
							<h5><b>Runtime </b>: {this.state.movie.runtime}</h5>
							<h5><b>Cast</b> {this.state.movie.cast}</h5>
							<h5><b>Director </b>: {this.state.movie.director}</h5>
							<br></br>
							<br></br>
							<button style={{color:"#FFFFFF"}} className="btn" onClick={() => {window.location.replace('./../WhatsOn')}}>Back To Film Listing</button>
						</MDBCol>
						<MDBCol>
							<img src={"https://image.tmdb.org/t/p/w342" + this.state.movie.poster_path} />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		);
	}
}

export default withRouter(Film);

