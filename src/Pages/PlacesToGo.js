import React from "react";
import { Parallax } from "react-parallax";
// import Goddard from '../Images/Goddard.jpg';
import Goddard from '../Images/Goddard2.jpg';
import Karting from '../Images/Karting.jpg';
import HandW from '../Images/H&W.jpg';
import Avebury from '../Images/Avebury.jpg';



const styles = {
  fontFamily: "Helvetica Neue",
  fontWeight: 300,
  textAlign: "left",
};
const insideStyles = {
  color: "white",
  padding: 40,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontWeight: 300
};

const PlacesToGo = () => (
  <div style={styles}>
     <Parallax bgImage={HandW} strength={500}>
    <div style={{ height: 700 }}>
        <div className="places1" style={insideStyles}>
            <a className="linkAbout" style={{fontSize : "50px"}} href="https://www.hall-woodhousewichelstowe.co.uk/" alt="hallandwoodhouse" rel="noopener noreferrer" target="_blank">Hall & Woodhouse</a>
            <br/>
            <br/>
            <p style={{fontSize : "18px"}}>Hall & Woodhosue in Wichelstowe is a brand new pub from Dorset Brewers of the same name</p>
            <p style={{fontSize : "18px"}}>As a busy venue, enjoy priority table reservations with an Ocean View Booking Reference!</p>
            <h5>Venue Info</h5>
            <p style={{fontSize : "18px"}}>01793 209207<br/>Peglars Way<br/>Swindon<br/>SN1 7DA</p>
            </div>
      </div>
    </Parallax>

    <Parallax bgImage={Goddard} strength={300}>
      <div style={{ height: 700 }}>
        <div className="places1" style={insideStyles}>
            <a className="linkAbout" style={{fontSize : "50px"}} href="https://www.classicinns.co.uk/goddardarms" alt="goddardarms" rel="noopener noreferrer" target="_blank">The Goddard Arms</a>             
            <br/>
            <br/>
            <p style={{fontSize : "18px"}}>The Goddard Arms is a friendly hotel located in the Heart of Old Town</p>
            <p style={{fontSize : "18px"}}>As a customer of our cinema, enjoy 10% off of your meal and drinks by producing an Ocean View Cinema ticket</p>
            <h5  >Venue Info</h5>
            <p style={{fontSize : "18px"}}>01793 619090<br/>1 High Street<br/>Swindon<br/>SN1 3EG</p>
            </div>
      </div>
    </Parallax>

    <Parallax bgImage={Karting} strength={500}>
    <div style={{ height: 650 }}>
        <div className="places1" style={insideStyles}>
            <a className="linkAbout" style={{fontSize : "50px"}} href="https://swindonkarting.co.uk/" alt="karting" rel="noopener noreferrer" target="_blank">Swindon Karting Arena</a>
            <br/>
            <br/>
            <p style={{fontSize : "18px"}}>With 15 years of experience in the karting trade, Swindon Karting Arena is committed to bringing you an absolutely unforgettable experience.</p>
            <p style={{fontSize : "18px"}}>Enjoy 20% off all food and drink from the in house Cafe1877 with an Ocean View Booking Reference! </p>
            <h5>Venue Info</h5>
            <p style={{fontSize : "18px"}}>01793 814340<br/>Hangar C2<br/>Wroughton Airfield<br/>Swindon<br/>SN4 0QJ</p>
            </div>
      </div>
      </Parallax>

      <Parallax bgImage={Avebury} strength={500}>
    <div style={{ height: 650 }}>
        <div className="places1" style={insideStyles}>
            <a className="linkAbout" style={{fontSize : "50px"}} href="https://www.english-heritage.org.uk/visit/places/avebury/" alt="A Link to the English heritage site for Avebury" rel="noopener noreferrer" target="_blank">Avebury Stone Circles</a>
            <br/>
            <br/>
            <p style={{fontSize : "18px"}}>Avebury henge and stone circles are one of the greatest marvels of prehistoric Britain.</p>
            <p style={{fontSize : "18px"}}>Avebury is part of an extraordinary set of Neolithic and Bronze Age ceremonial sites that seemingly formed a vast sacred landscape.</p>
            <h5>Venue Info</h5>
            <p style={{fontSize : "18px"}}>0370 333 1181<br/>Avebury<br/>15 min drive south of Wroughton<br/>Swindon<br/>SN8 1RF</p>
            </div>
      </div>
    </Parallax>
  </div>
);

export default PlacesToGo;