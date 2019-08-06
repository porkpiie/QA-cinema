import React, { Component } from 'react';
import MapGL, { NavigationControl } from 'react-map-gl';

const APIKey = 'pk.eyJ1IjoiZ29uc3ZhMjYiLCJhIjoiY2p5eWpka2x4MDRoNTNucGJsMTJmZDU5NiJ9.p-7p5jc1RrHWfwcxsEM-Ag';

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
                width: '100%',
                height: 400,
            }
        }
    }

    render() {
        const { viewport } = this.state;
        return (
            <div>              
       
            <MapGL
                {...viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapStyle="mapbox://styles/gonsva26/cjyyk5o9d3vj31crnmm37osjz"
                mapboxApiAccessToken={APIKey}>
                <div className="nav" style={navStyle}>
                    <NavigationControl />
                </div>
            </MapGL>
            </div>
        );
    }
}
