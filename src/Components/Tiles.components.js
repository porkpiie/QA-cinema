import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import image1 from '../fid19112.jpg';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class Tiles extends Component {

    constructor() {
        super();
        this.state = {
            movies: [
                { title: 'The Lion King', image: image1 },
                { title: 'The Lion King', image: image1 },
                { title: 'The Lion King', image: image1 },
                { title: 'The Lion King', image: image1 }
                
            ]
        }
    }

    render() {
        return (
            <div className="tiles pt-10">
                <MDBContainer >
                    <MDBRow>
                        {this.state.movies.map(movie => (
                            <MDBCol>
                                <MDBView hover>
                                    {/* <Card className="card1" bg="inverse" text="white" style={{ width: '10rem' }}> */}
                                        <Card.Img variant="top" src={movie.image} />
                                        <Card.Body className="p-2 pt-4">
                                            <Card.Title style={{ textAlign: "left", fontSize: 10 }}>
                                                {movie.title.toLocaleUpperCase()}
                                            </Card.Title>
                                        </Card.Body>
                                    {/* </Card> */}
                                    <MDBMask style={{ width: '10rem', height: '15rem', fontSize: 15 }} overlay="black-strong">
                                        <p className="white-text p-2 pt-10">DIRECTOR:<br />CAST:<br />RUNTIME:</p>
                                    </MDBMask>
                                </MDBView>
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

