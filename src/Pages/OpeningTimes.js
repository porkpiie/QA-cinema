import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
class OpeningTimes extends React.Component {
    render() {
        return <div>
            <Jumbotron fluid style={{backgroundColor: "black"}}>
                <Container style={{backgroundColor: "black", color: "white"}}>
                    <h1>QA Films Opening Times</h1>

                    <p>Monday  	12:00 - 00:00</p>
                    <p>Tuesday  	12:00 - 00:00 </p>
                    <p>Wednesday  	12:00 - 00:00</p>
                    <p>Thursday  	12:00 - 00:00</p>
                    <p>Friday  	12:00 - 00:00</p>
                    <p>Saturday  	10:00 - 00:00</p>
                    <p>Sunday  	10:00 - 00:00</p>

                    <h3>The Cinema is closed on Christmas Day</h3>
                </Container>
            </Jumbotron>
        </div>
    }
}
export default OpeningTimes