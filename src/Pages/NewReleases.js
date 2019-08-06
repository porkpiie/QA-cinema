import React, { Component } from 'react';
import Tiles from '../Components/Tiles.components';
import Banner from '../Components/Banner.component';
import { Container } from "react-bootstrap";

export default class Listings extends Component{
    render(){
        return(
            <div>
            <div className="banner-img-wrapper">
                <Banner />
            </div>
            <Container fluid className="homecontainer">
            <h1 className="Listingh1">COMING SOON</h1>
            <hr/>
            <Tiles/>
            </Container>
            </div>
        )
    }
}