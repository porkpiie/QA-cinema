import React, { Component } from 'react';

export default class AboutUs extends Component{
    render(){
        return(
            <div style={{"background-color" : "black", "color" : "white"}}>
            <h1>Testing About Us</h1>
            <p>------------------------------------------------------------------------------------------</p>
                <h2>Rich Clack</h2>
                <h3>@Clacky</h3>
                <p>"Once you've had Clack you never go back"</p>
                <img alt="yo" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/22-vw-golf-r-2019-rt-cornering-rear.jpg?itok=O5BVNd2K"></img>
            </div>
        )
    }
}