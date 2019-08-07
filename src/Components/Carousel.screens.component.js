import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import screenDeluxe from "../Images/Everyman-cinema-3.jpg";
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
                                <h1 className="Listingh5" >Our Deluxe Screen</h1><br />
                                <h1 className="Listingh6">Enjoy your film in style with our luxury screen</h1>
                                <h1 className="Listingh6">A comfortable night out for all</h1>
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