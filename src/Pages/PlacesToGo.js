import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import Goddard from '../Images/Goddard.jpg';
import Karting from '../Images/Karting.jpg';
import HandW from '../Images/HandW.jpg';



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
const insideStyles = {
  color: "white",
  padding: 10,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  textShadow: "3px 3px 	#000000",
};

const PlacesToGo = () => (
  <div style={styles}>
    <Parallax bgImage={Goddard} strength={500}>
      <div style={{ height: 675 }}>
        <div className="places1" style={insideStyles}>
            <a className="linkAbout" style={{fontSize : "50px"}} href="https://www.classicinns.co.uk/goddardarms" alt="goddardarms" rel="noopener noreferrer" target="_blank">The Goddard Arms</a>
            <p style={{fontSize : "18px"}}>The Goddard Arms is a friendly hotel located in the Heart of Old Town</p>
            <p style={{fontSize : "18px"}}>As a customer of our cinema, enjoy 10% off of your meal and drinks by producing a QA Films ticket</p>
            <p style={{fontSize : "35px"}}>Venue Info</p>
            <p>01793 619090</p>
            <p>1 High Street</p>
            <p>Swindon</p>
            <p>SN1 3EG</p>
            </div>
      </div>
    </Parallax>
  
    <Parallax bgImage={HandW} strength={500}>
    <div style={{ height: 500 }}>
        <div className="places1" style={insideStyles}>
            <a className="linkAbout" style={{fontSize : "50px"}} href="https://www.hall-woodhousewichelstowe.co.uk/" alt="hallandwoodhouse" rel="noopener noreferrer" target="_blank">Hall & Woodhouse</a>
            <p style={{fontSize : "18px"}}>Hall & Woodhosue in Wichelstowe is a brand new pub from Dorset Brewers of the same name</p>
            <p style={{fontSize : "18px"}}>As a busy venue, enjoy priority table reservations with a QA Films Booking Reference!</p>
            <p style={{fontSize : "35px"}}>Venue Info</p>
            <p>01793 209207</p>
            <p>Peglars Way</p>
            <p>Swindon</p>
            <p>SN1 7DA</p>
            </div>
      </div>
    </Parallax>

    <Parallax bgImage={Karting} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>Reverse direction</div>
      </div>
    </Parallax>
  </div>
);

render(<PlacesToGo />, document.getElementById("root"));

export default PlacesToGo;