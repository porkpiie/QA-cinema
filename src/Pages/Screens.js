import React, { Component } from 'react';
import Banner from '../Components/Banner.component';
import CarouselScreen from '../Components/Carousel.screens.component';
import CarouselScreen2 from '../Components/Carousel.screens2.component';

export default class Screens extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <div>
                    <h1 className="Listingh1">OUR SCREENS</h1>
                    <hr />
                </div>
                <div>
                    <CarouselScreen/>
                </div>
                <br/>
                <div>
                    <CarouselScreen2/>
                </div>
            </div>

        )
    }
}