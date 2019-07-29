import React, { Component } from 'react';
import Tiles from '../Components/Tiles.components';

export default class Listings extends Component{
    render(){
        return(
            <div>
            <h1>Now Showing</h1>
            <Tiles/>
            </div>
        )
    }
}