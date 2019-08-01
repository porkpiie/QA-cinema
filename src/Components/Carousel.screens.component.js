import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import screenDeluxe from "../Images/screenDeluxe.jpg";
import deluxeSeating from "../Images/deluxeSeating.png";

export default class CarouselScreen extends Component {

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
                                    src={screenDeluxe}
                                    alt="First slide"
                                />
                            </div>

                            <Carousel.Caption>
                                <h1 id="Carouselh1" style={{ textAlign: "left", fontSize: 40 }}>Deluxe</h1><br />
                                <p id="Carouselp1">Enjoy your film in style with our luxury screen</p>
                                <p id="Carouselp1">A comfortable night out for all</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <div className="carousel-img-wrapper">
                                <div className="imgbold" />
                                <img
                                    className="d-block w-100"
                                    src={deluxeSeating}
                                    alt="Third slide"
                                />
                            </div>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>

        );
    }
}