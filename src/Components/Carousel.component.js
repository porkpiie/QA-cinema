import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Carousel from 'react-bootstrap/Carousel'
// import Carousel from 'react-bootstrap/Carousel'
import imagea from "../Images/CarouselIMG.jpeg";
import imageb from "../Images/toy-story-4.jpg";
import imagec from "../Images/SpiderMan.jpg";
import pg from "../Images/PG.png";
import u from "../Images/U.png";
import twelvea from "../Images/12A.png";

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
                                <h1 id="Carouselh1" style={{textAlign:"left", fontSize:40}}>THE LION KING</h1><br/>
                                <img style={{ width: '2rem'}} align="left" src={pg} alt="p1" />
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
                            <h1 id="Carouselh1"style={{textAlign:"left", fontSize:40}}>TOY STORY 4</h1><br/>
                            <img style={{ width: '2rem'}} align="left" src={u} alt="p2" />
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
                                <h1 id="Carouselh1"style={{textAlign:"left", fontSize:40}}>SPIDER-MAN: FAR FROM HOME</h1><br/>
                                <img style={{ width: '2rem'}} align="left" src={twelvea} alt="p3" />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>





        );
    }
}
