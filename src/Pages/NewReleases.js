import React, { Component } from 'react';
import UpcomingTiles from '../Components/UpcomingTiles.component';
import Whale from '../Images/whalebanner.png';

export default class Listings extends Component{
    render(){
        return(
            <div>
                <img src={Whale} width="100%" height="5%" alt="whaleban" />
            <h1 className="Listingh1">COMING SOON</h1>
            <hr/>
            
            <UpcomingTiles/>
            </div>
        )
    }
}