import React from "react";
import Carousel from "react-bootstrap/Carousel"
// import Carousel from 'react-bootstrap/Carousel'
// import Carousel from 'react-bootstrap/Carousel'
import imagea from "./CarouselIMG.jpeg"
import imageb from "./toy-story-4.jpg"
import imagec from "./SpiderMan.jpg"
import pg from "./PG.png"
import u from "./U.png"
import twelvea from "./12A.png"

export default class CarouselHome extends React.Component {

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
                                    src={imagea}
                                    alt="First slide"
                                />
                            </div>

                            <Carousel.Caption>
                                <h1  style={{textAlign:"left", fontSize:40}}>THE LION KING</h1>
                                <img style={{ width: '1.5rem'}} align="left" src={pg} />
                            </Carousel.Caption>
                            
                        </Carousel.Item>



                        <Carousel.Item>
                            <div className="carousel-img-wrapper">
                                <div className="imggradient" />
                                <img
                                    className="d-block w-100"
                                    src={imageb}
                                    alt="Third slide"
                                />
                            </div>

                            <Carousel.Caption>
                            <h1 style={{textAlign:"left", fontSize:40}}>TOY STORY 4</h1>
                            <img style={{ width: '1.5rem'}} align="left" src={u} />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-img-wrapper">
                                <div className="imggradient" />
                                <img
                                    className="d-block w-100"
                                    src={imagec}
                                    alt="Third slide"
                                />
                            </div>

                            <Carousel.Caption>
                                <h1 style={{textAlign:"left", fontSize:40}}>SPIDER-MAN: FAR FROM HOME</h1>
                                <img style={{ width: '1.5rem'}} align="left" src={twelvea} />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        );
    }
}
