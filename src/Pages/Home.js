import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHome from '../Components/Carousel.component';
import HomeIcons from '../Components/homepage.component';
import Container from 'react-bootstrap/Container'

export default class Home extends Component{
    render(){
        return(
            <div>

            <div>
            <CarouselHome />
            </div>

            <Container  className="homecontainer">
            <h1 className="Listingh1">OCEAN VIEW CINEMA</h1>
            <hr/>
                <HomeIcons/>
            </Container>


            </div>
        )
    }
}