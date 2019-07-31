import React, { Component } from 'react';
import Tiles from '../Components/Tiles.components';
import Banner from '../Components/Banner.component';

export default class Listings extends Component{
    render(){
        return(
            <div>
                <Banner />
            <h1 className="Listingh1">NOW SHOWING</h1>
            <hr/>
            
            <Tiles/>
            </div>
        )
    }
}