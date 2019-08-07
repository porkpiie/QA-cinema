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
                                <p style={{ color: "white", textAlign: "left"}}>ADDRESS</p>
                                <p style={{ color: "white", textAlign: "left" }}>Alexandra House<br />Whittingham Drive,<br />Swindon,<br />SN4 0QJ</p><br />
                                <p style={{ color: "white", textAlign: "left" }}>Phone: 01793 819 000</p>
                                <p style={{ color: "white", textAlign: "left" }}>Parking: 250 Free Parking Spaces Available </p><br />
                                <div style={{ textAlign: "left" }}><a href="https://www.google.com/maps/dir/Swindon+Station,+Station+Road,+Swindon/alexandra+house+swindon/@51.5383024,-1.7909277,13z/data=!4m13!4m12!1m5!1m1!1s0x4871443865b805e7:0xf7a027fe37ae9428!2m2!1d-1.7852726!2d51.5654628!1m5!1m1!1s0x487144d80350b131:0x430f7948ce834367!2m2!1d-1.772587!2d51.5124799" 
                                target="__blank">
                                <button style={{margin: '0px'}} className="btn btn-primary">Directions</button> </a>
                                </div>
                            </div>
                           
                            <div className="ml-auto position-relative" style={{textAlign : "left", color : "white"}}>
                                <p> <i class="fas fa-train fa-2x" /> Only 15 minutes from Swindon Train Station</p>
                                <p> <i class="fas fa-bus fa-2x" /> Buses are limited, but will bring you to and from town centre with stops along the way. Find out more
                                <a href="https://www.stagecoachbus.com" alt="stagecoach link" target="__blank" style={{ color: "#28CDE9" }}> here</a></p>
                                <p> <i class="fas fa-parking fa-2x" /> With 250 Free Parking spaces and CCTV park with confidence right at the venue</p>
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