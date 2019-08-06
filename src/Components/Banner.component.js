import React, { Component } from 'react';
import Whale from '../Images/whalebanner.png';

export default class Banner extends Component {
    static defaultProps = {
        src: Whale
    };

    render(){
        return(
            <div className="banner-img-wrapper">
                <img src={this.props.src} width="100%" alt="whaleban" />
            </div>
        );
    }
}