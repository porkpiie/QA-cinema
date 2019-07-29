import React from 'react';
import Card from 'react-bootstrap/Card';
import image1 from './fid19112.jpg';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

export default class Tiles extends React.Component {

    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <MDBView hover>

                                <Card bg="dark" text="white" style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={image1} />
                                    <Card.Body className="p-2 pt-4">
                                        <Card.Title style={{ textAlign: "left", fontSize: 10 }}>THE LION KING</Card.Title>
                                    </Card.Body>
                                </Card>
                                <MDBMask style={{ width: '10rem', height: '15rem', fontSize: 15 }} overlay="black-strong">
                                    <p className="white-text p-2 pt-10">DIRECTOR:<br />CAST:<br />RUNTIME:</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>

                        <MDBCol>
                            <MDBView hover>
                                <Card bg="dark" text="white" style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={image1} />
                                    <Card.Body className="p-2 pt-4">
                                        <Card.Title style={{ textAlign: "left", fontSize: 10 }}>THE LION KING</Card.Title>
                                    </Card.Body>
                                </Card>
                                <MDBMask style={{ width: '10rem', height: '15rem', fontSize: 15 }} overlay="black-strong">
                                    <p className="white-text p-2 pt-10">DIRECTOR:<br />CAST:<br />RUNTIME:</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>

                        <MDBCol>
                            <MDBView hover>
                                <Card bg="dark" text="white" style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={image1} />
                                    <Card.Body className="p-2 pt-4">
                                        <Card.Title style={{ textAlign: "left", fontSize: 10 }}>THE LION KING</Card.Title>
                                    </Card.Body>
                                </Card>
                                <MDBMask style={{ width: '10rem', height: '15rem', fontSize: 15 }} overlay="black-strong">
                                    <p className="white-text p-2 pt-10">DIRECTOR:<br />CAST:<br />RUNTIME:</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>

                        <MDBCol>
                            <MDBView hover>
                                <Card bg="dark" text="white" style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src={image1} />
                                    <Card.Body className="p-2 pt-4">
                                        <Card.Title style={{ textAlign: "left", fontSize: 10 }}>THE LION KING</Card.Title>
                                    </Card.Body>
                                </Card>
                                <MDBMask style={{ width: '10rem', height: '15rem', fontSize: 15 }} overlay="black-strong">
                                    <p className="white-text p-2 pt-10">DIRECTOR:<br />CAST:<br />RUNTIME:</p>
                                </MDBMask>
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

