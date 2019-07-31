import React from "react";
import Card from 'react-bootstrap/Card';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { withRouter } from 'react-router-dom';

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

		axios.get("https://api.themoviedb.org/3/movie/" + this.props.match.params.id + "?api_key=" + APIkey + "&language=en-US")
			.then(response => {
				this.state.movie = response.data;
				console.log(this.state.movie);
				this.setState({ update: "true" });
				this.setState({ update: "false" });
			})
			.catch();
	}


	render() {
		return (
			<div className="tiles pt-10">
				<MDBContainer >
					<MDBRow>
						<img width="100%" height="250px" src={"https://image.tmdb.org/t/p/w500" + this.state.movie.backdrop_path} />
						<h1 className="Listingh1">{this.state.movie.title}</h1>
						<h2>{this.state.movie.id}</h2>
					</MDBRow>
				</MDBContainer>
			</div>
		);
	}
}

export default withRouter(Film);

