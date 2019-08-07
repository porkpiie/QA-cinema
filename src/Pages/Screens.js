import React, { Component } from 'react';
import Banner from '../Components/Banner.component';
import CarouselScreen from '../Components/Carousel.screens.component';
import CarouselScreen2 from '../Components/Carousel.screens2.component';
import { Container } from "react-bootstrap";

export default class Screens extends Component {
    render() {
        return (
            <div>
            <div className="banner-img-wrapper">
            <Banner />
            </div>

            <Container fluid className="homecontainer">
            <h1 className="Listingh1">OUR SCREENS</h1>
            <hr />
            <CarouselScreen/>
            <br/>
            <CarouselScreen2/>
            </Container>
            <br/>
            <br/>
            </div>
            
        )
    }
}