import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import icon1 from "../Images/icon 1.png";
import icon2 from "../Images/icon 2.png";
import icon3 from "../Images/icon 3.png";
import icon4 from "../Images/icon 4.png";
import icon5 from "../Images/icon 5.png";


export default class HomeIcons extends React.Component {

    render() {


        return (
            
        

            <Container fluid>
                <Row style={{ color: "white", textAlign: "left" }}>
                    <Col xs className="pl-0">
                        <p className="my-5" style={{ fontSize: '15px'}}>SELECT DATE & TIME</p>
                        <img style={{ width: '3rem', height : '3rem' }} src={icon1} alt="" />
                        <p className="my-5" style={{ fontSize: '12px'}}>Browse our site and find a time that suits you</p>
                    </Col>
                    <Col xs>
                    <p className="my-5" style={{ fontSize: '15px'}}>SELECT FILM</p>
                        <img style={{ width: '3rem', height : '3rem'  }} src={icon2} alt="" />
                        <p className="my-5" style={{ fontSize: '12px'}}>Decide which of our blockbusters you want to watch</p>
                    </Col>
                    <Col xs>
                    <p className="my-5" style={{ fontSize: '15px'}}>SELECT SEATS</p>
                        <img style={{ width: '3rem', height : '3rem'  }} src={icon3} alt=""/>
                        <p className="my-5" style={{ fontSize: '12px'}}>Choose between our Standard or superb Deluxe seating</p>
                    </Col>
                    <Col xs>
                    <p className="my-5" style={{ fontSize: '15px'}}>PAYMENTS</p>
                        <img style={{ width: '3rem', height : '3rem'  }} src={icon4} alt=""/>
                        <p className="my-5" style={{ fontSize: '12px'}}>We accept all major forms of payment, 10% off when using a Nationwide Debit or Credit Card</p>
                    </Col>
                    <Col xs className="pr-0">
                    <p className="my-5" style={{ fontSize: '15px'}}>ENJOY YOUR FILM</p>
                        <img style={{ width: '3rem', height : '3rem'  }} src={icon5} alt="" />
                        <p className="my-5" style={{ fontSize: '12px'}}>We hope you have a Whale of a time</p>
                    </Col>
                </Row>
            </Container>




        );
    }
}
