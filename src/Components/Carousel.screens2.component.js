import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import screenStandard from "../Images/Standard.jpg"; 
import screen from "../Images/Seatmap Grid.png";
export default class CarouselScreen2 extends Component {

    render() {


        return (
            <div>

                <div>
                    <Carousel>
                        <Carousel.Item>
                            <div className="carousel-img-wrapper">
                                <div className="imggradient" />
                                <img
                                    className="d-block w-100"
                                    src={screenStandard}
                                    alt="First slide"
                                />
                            </div>

                            <Carousel.Caption>
                                <h1 className="Listingh5" >Our Standard Screen</h1><br />
                                <h1 className="Listingh6">No Fuss.. No Frills.. Just great movie fun for all</h1>
                                <h1 className="Listingh6">What are you waiting for?</h1>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-img-wrapper">
                                <div className="imggradient" />
                                <img
                                    className="d-block w-100"
                                    style={{objectFit: 'scale-down'}}
                                    src={screen}
                                    alt="Second slide"
                                />
                            </div>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

        );
    }
}