import React, { Component } from 'react';
import Whale from '../Images/whalebanner.png';

export default class Banner extends Component{
    render(){
        return(
            <div>
                <img src={Whale} width="100%" alt="whaleban" />
            </div>
        );
    }
}