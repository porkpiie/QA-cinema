import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import { Container } from "react-bootstrap";

import TBDimage from '../Images/TBC.png';
import Uimage from '../Images/U.png';
import PGimage from '../Images/PG.png';
import TWELVEimage from '../Images/12.png';
import TWELVEAimage from '../Images/twelvea.png';
import FIFTEENimage from '../Images/15.png';
import EIGHTEENimage from '../Images/18.png';

import axios from 'axios';
let APIkey = "14ab2cbcc55cd83768a0abc0594eb1ab";

class Tiles extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            update: []
        }
    }

    componentDidMount() {
        let requestMovies = "";
        if(this.props.match.url === "/WhatsOn"){
            requestMovies = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIkey + "&language=en-US&page=1";
        }
        else if(this.props.match.url === "/ComingUp"){
            requestMovies = "https://api.themoviedb.org/3/discover/movie?api_key="+ APIkey + "&language=en-US&region=GB&sort_by=primary_release_date.asc&page=1&primary_release_date.gte=2019-08-07&primary_release_date.lte=2019-12-30";
        }
        else { 
            requestMovies = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIkey + "&language=en-US&page=1";
        }

        axios.get(requestMovies)
            .then(response => {
                this.setState({
                    movies: response.data.results.slice(0, 4),
                })

                for (let movie in this.state.movies) {
                    let certFound = false;
                    movie = this.state.movies[movie];
                    axios.get("https://api.themoviedb.org/3/movie/" + movie.id + "/release_dates?api_key=" + APIkey)
                        .then(response => {
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
                    axios.get("https://api.themoviedb.org/3/movie/" + movie.id + "/credits?api_key=" + APIkey)
                        .then(response => {
                            let castRaw = response.data.cast.slice(0, 3);
                            let cast = [];
                            for (let castMem in castRaw) {
                                castMem = castRaw[castMem];
                                cast.push(" " + castMem.name + " as " + castMem.character);
                                movie.cast = ": " + cast;
                                this.setState({ update: "true" });
                                this.setState({ update: "false" });
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
                    axios.get("https://api.themoviedb.org/3/movie/" + movie.id + "?api_key=" + APIkey + "&language=en-US")
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
                            this.setState({ update: "true" });
                            this.setState({ update: "false" });
                        })
                        .catch(() => {
                            this.setState({ update: "true" });
                            this.setState({ update: "false" });
                        });
                }
            });
    }

    render() {
        return (
            
                <div style={{paddingTop:"40px"}}>
                    <MDBRow style={{paddingTop:"10px"}}>
                        {this.state.movies.map(movie => (
                            <MDBCol key={movie.id}>
                                <MDBView hover>
                                    <a href={"./Film" + this.props.match.url + "/" + movie.id}>
                                        <Card bg="dark" text="white" style={{ maxHeight: '100rem' }}>
                                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                                            <Card.Body className="p-2 pt-4">
                                                <Card.Title style={{ textAlign: "left", fontSize: 15 }}>
                                                    {movie.title.toLocaleUpperCase()}
                                                </Card.Title>
                                                <Card.Img style={{ width: '2rem', maxHeight: '30px' }} variant="top" src={movie.certimg} />
                                            </Card.Body>
                                        </Card>
                                        <MDBMask style={{ width: '100%', fontSize: 15, textAlign : 'left' }} overlay="black-strong">
                                            <p className="white-text p-5 pt-10">DIRECTOR: {movie.director}<br /><br />CAST{movie.cast}<br /><br />RUNTIME: {movie.runtime}</p>
                                        </MDBMask>
                                    </a>
                                </MDBView>
                            </MDBCol>
                        ))}
                    </MDBRow>
                </div>
            
        )
    }
}

export default withRouter(Tiles);