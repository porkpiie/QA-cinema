import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import screenDeluxe from "../Images/screenDeluxe.jpg";
import screenStandard from "../Images/screenStandard.jpg"

export default class CarouselScreen2 extends Component {

    render() {


        return (
            <div>

                <div>

                    <Carousel>
                        <Carousel.Item>
                            <div className="carousel-img-wrapper">
                                <div className="imgbold" />
                                <img
                                    className="d-block w-100"
                                    src={screenStandard}
                                    alt="First slide"
                                />
                            </div>

                            <Carousel.Caption>
                                <h1 id="Carouselh1" style={{textAlign:"left", fontSize:40}}>Our Standard Screen</h1><br/>
                                <p id="Carouselp1">No Fuss.. No Frills.. Just great movie fun for all</p>
                                <p id="Carouselp1">What are you waiting for?</p>
                                
                            </Carousel.Caption>
                            
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-img-wrapper">
                                <div className="imggradient" />
                                <img
                                    className="d-block w-100"
                                    src={screenDeluxe}
                                    alt="Third slide"
                                />
                            </div>

                            <Carousel.Caption>
                            <h1 id="Carouselh1"style={{textAlign:"left", fontSize:40}}>Deluxe Seating Plan</h1><br/>
                           
                            </Carousel.Caption>
                        </Carousel.Item>
                       
                    </Carousel>
                </div>
            </div>

        );
    }
}