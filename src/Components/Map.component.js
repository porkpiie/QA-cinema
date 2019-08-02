import React, { Component } from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';

const APIKey = 'pk.eyJ1IjoiZHNodXJtZXJuYnMiLCJhIjoiY2p5aW1nNnVhMDEwcTNobnhjaTMzbGk3NSJ9.lHVoAbX8GZlgYD9PuqvK8A';

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

export default class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 51.512069,
                longitude: -1.772639,
                zoom: 15,
                bearing: 0,
                pitch: 0,
                width: 400,
                height: 400,
            }
        }
    }

    render() {
        const { viewport } = this.state;
        return (
            <div>              
                <h1>GETTING HERE</h1>
            <MapGL
                {...viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapStyle="mapbox://styles/dshurmernbs/cjyrfjhlf0dbl1clb3c3kdrfx"
                mapboxApiAccessToken={APIKey}>
                <div className="nav" style={navStyle}>
                    <NavigationControl />
                </div>
            </MapGL>
            </div>
        );
    }
}
