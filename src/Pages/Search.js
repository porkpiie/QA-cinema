import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Container from 'react-bootstrap/Container'

import axios from 'axios';
let APIkey = "14ab2cbcc55cd83768a0abc0594eb1ab";
let searchTerm = "";


export default class Film extends Component {
    constructor(props) {
        super(props);

        this.state = {
            matchingmovies: [],
            searchTerm: ''
        };

        this.performSearch = this.performSearch.bind(this);
    }

    // shouldComponentUpdate(nextProps) {
    //     console.log('TESTING SHIT', nextProps);

    //     if(nextProps.match.params.searchTerm !== this.props.match.params.searchTerm) {
    //         console.log('PROPS CHANGE!');
    //     }

    // }

    componentDidUpdate() {
        // Check for searchTerm change on update, search if different
        if(this.props.match.params.searchTerm.toLocaleUpperCase() !== this.state.searchTerm.toLocaleUpperCase()) {
            this.performSearch();
        }
    }


    performSearch(searchTerm) {
        searchTerm = (this.props.match.params.searchTerm || "").toLocaleUpperCase();

        console.log("Searching For: " + searchTerm);

        if (searchTerm !== "") {
            axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=" + APIkey)
                .then(currResponse => {
                    const currentmovies = currResponse.data.results.slice(0, 4);
                    axios.get("https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US&api_key=" + APIkey)
                        .then(upcomResponse => {
                            const upcomingmovies = upcomResponse.data.results.slice(0, 4);

                            let matching = [];
                            let idChecked = [];
                            let counter = 0;
                            for (let movie in currentmovies) {
                                if (currentmovies[movie].title.toUpperCase().search(searchTerm) !== -1) {
                                    matching.push(currentmovies[counter]);
                                }
                                idChecked.push(currentmovies[counter].id);
                                counter++;
                            }
                            counter = 0;
                            for (let movie in upcomingmovies) {
                                let filmSeen = false;
                                for (let seenID in idChecked) {
                                    if (upcomingmovies[movie].id === idChecked[seenID]) {
                                        filmSeen = true;
                                    }
                                }

                                if (upcomingmovies[movie].title.toUpperCase().search(searchTerm) !== -1 && filmSeen === false) {
                                    matching.push(upcomingmovies[counter]);
                                }
                                idChecked.push(currentmovies[counter].id);
                                counter++;
                            }
                            this.setState({
                                matchingmovies: matching,
                                searchTerm: searchTerm
                            });
                        })
                        .catch();
                })
                .catch();
        }
    }

    componentWillMount() {
        this.performSearch(); // Auto search on page load
    }

    render() {
        if (this.state.matchingmovies.length === 0) {
            return (
                <div>
                    <Container fluid className="homecontainer">
            <h1 className="Listingh1">YOUR SEARCH RESULTS</h1>
            <hr/>
            </Container>
            <br/><br/><br/><br/>
                    <h1 className="Listingh6" >Your Search Returned No Results</h1>
                    <br/><br/><br/><br/>
                </div>
                
            )
        }
        else {
            return (
                <div>
                    <Container fluid className="homecontainer">
            <h1 className="Listingh1">YOUR SEARCH RESULTS</h1>
            <hr/>
            
            <br/><br/>
                    <div >
                        
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
                    </div>
                    </Container>
                    <br/><br/>
                </div>
            )
        }
    }
}