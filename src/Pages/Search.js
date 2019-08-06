import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import axios from 'axios';
let APIkey = "14ab2cbcc55cd83768a0abc0594eb1ab";
let searchTerm = "";


export default class Film extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentmovies: [],
            upcomingmovies: [],
            matchingmovies: []
        };
    }

    componentWillMount() {
        searchTerm = (this.props.match.params.searchTerm || "").toLocaleUpperCase();
        // searchTerm = sessionStorage.getItem("searchTerm").toUpperCase();
        console.log("Searching For: " + searchTerm);

        if (searchTerm !== "") {
            axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=" + APIkey)
                .then(response => {
                    this.setState({
                        currentmovies: response.data.results.slice(0, 4),
                    })
                    axios.get("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=" + APIkey)
                        .then(response => {
                            this.setState({
                                upcomingmovies: response.data.results.slice(0, 4),
                            })

                            let matching = [];
                            let idChecked = [];
                            let counter = 0;
                            for (let movie in this.state.currentmovies) {
                                if (this.state.currentmovies[movie].title.toUpperCase().search(searchTerm) !== -1) {
                                    matching.push(this.state.currentmovies[counter]);
                                }
                                idChecked.push(this.state.currentmovies[counter].id);
                                counter++;
                            }
                            counter = 0;
                            for (let movie in this.state.upcomingmovies) {
                                let filmSeen = false;
                                for (let seenID in idChecked) {
                                    if (this.state.upcomingmovies[movie].id === idChecked[seenID]) {
                                        filmSeen = true;
                                    }
                                }

                                if (this.state.upcomingmovies[movie].title.toUpperCase().search(searchTerm) !== -1 && filmSeen === false) {
                                    matching.push(this.state.upcomingmovies[counter]);
                                }
                                idChecked.push(this.state.currentmovies[counter].id);
                                counter++;
                            }
                            this.setState({
                                matchingmovies: matching,
                            })
                        })
                        .catch();
                })
                .catch();
        }
    }

    render() {

        if (this.state.matchingmovies.length === 0) {
            return (
                <div>
                <h1 style={{ padding:'100px', textAlign:'center'}}>Your Search Returned No Results</h1>
                </div>
            )
        }
        else {
            return (
                <div className="tiles pt-10">
                    <MDBContainer style={{ marginLeft: "10vh", marginRight: "10vh" }} >
                        <MDBRow>
                            {console.log(this.state.currentmovies)}
                            {this.state.matchingmovies.map(movie => (
                                <MDBCol key={movie.id}>
                                    <MDBView hover>
                                        <a href={"./Film" + this.props.match.url + "/" + movie.id}>
                                            <Card bg="dark" text="white" style={{ width: '30vh', maxHeight: '100rem' }}>
                                                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                                                <Card.Body className="p-2 pt-4">
                                                    <Card.Title style={{ textAlign: "left", fontSize: 10 }}>
                                                        {movie.title.toLocaleUpperCase()}
                                                    </Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </MDBView>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBContainer>
                </div>
            )
        }
    }
}