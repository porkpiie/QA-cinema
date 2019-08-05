import React from 'react';
import { Container } from "react-bootstrap";
import Banner from '../Components/Banner.component';

class OpeningTimes extends React.Component {
    render() {
        return(
            <div>
            <div className="banner-img-wrapper">
                <Banner />
            </div>

            <Container className="homecontainer">
            <h1 className="Listingh1">OPENING TIMES</h1>
            <hr/>
            <p className = "openingpage" >Monday  	12:00 - 00:00</p>
            <p className = "openingpage" >Tuesday  	12:00 - 00:00 </p>
            <p className = "openingpage" >Wednesday  	12:00 - 00:00</p>
            <p className = "openingpage" >Thursday  	12:00 - 00:00</p>
            <p className = "openingpage" >Friday  	12:00 - 00:00</p>
            <p className = "openingpage" >Saturday  	10:00 - 00:00</p>
            <p className = "openingpage" >Sunday  	10:00 - 00:00</p>

            <p className = "openingpage" >The Cinema is closed on Christmas Day</p>
            </Container>
            </div>
        
        )
    }
}
export default OpeningTimes