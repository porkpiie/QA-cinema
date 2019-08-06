import React, { Component } from 'react';
import Map from '../Components/Map.component'
import Banner from '../Components/Banner.component';
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import exterior from '../Images/exterior.jpg';

export default class Getting extends Component {
    render() {
        return (

            <div>
                <div>
                    <Banner />
                    <Container fluid className="homecontainer">
                        <h1 className="Listingh1">GETTING HERE</h1>
                        <hr />
                        <Map />

                        <br />
                        <br />
                        <div className="d-flex">
                            <div style={{ paddingLeft: "15" }}>
                                <p style={{ color: "white", textAlign: "left" }}>ADDRESS</p>
                                <p style={{ color: "white", textAlign: "left" }}>Alexandra House<br />Whittingham Drive,<br />Swindon,<br />SN4 0QJ</p><br />

                                <h6 style={{ color: "white", textAlign: "left" }}>Phone & Email</h6>
                                <p style={{ color: "white", textAlign: "left" }}>Phone: 01793 819 000</p>
                                <p style={{ color: "white", textAlign: "left" }}>Email: </p><br />
                            </div>
                            <div className="ml-auto">
                                <p style={{ color: "white", textAlign: "left" }}>ADDRESS</p>
                                <p style={{ color: "white", textAlign: "left" }}>Alexandra House<br />Whittingham Drive,<br />Swindon,<br />SN4 0QJ</p><br />

                                <h6 style={{ color: "white", textAlign: "left" }}>Phone & Email</h6>
                                <p style={{ color: "white", textAlign: "left" }}>Phone: 01793 819 000</p>
                                <p style={{ color: "white", textAlign: "left" }}>Email: </p><br />
                            </div>
                            <div className="ml-auto position-relative" style={{height: '300px'}}>

                                <img src={exterior} alt="exterior.jpg" className="h-100" />
                            </div>
                        </div>


                    </Container>
                </div>
            </div>
        )
    }
}