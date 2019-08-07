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
                        <p className="my-5" style={{ fontSize: '15px'}}>SELECT DATE & CINEMA</p>
                        <img style={{ width: '3rem' }} src={icon1} alt="" />
                        <p className="my-5" style={{ fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                    <Col xs>
                    <p className="my-5" style={{ fontSize: '15px'}}>SELECT FILM</p>
                        <img style={{ width: '3rem' }} src={icon2} alt="" />
                        <p className="my-5" style={{ fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                    <Col xs>
                    <p className="my-5" style={{ fontSize: '15px'}}>SELECT SEATS</p>
                        <img style={{ width: '3rem' }} src={icon3} alt=""/>
                        <p className="my-5" style={{ fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                    <Col xs>
                    <p className="my-5" style={{ fontSize: '15px'}}>PAYMENTS</p>
                        <img style={{ width: '3rem' }} src={icon4} alt=""/>
                        <p className="my-5" style={{ fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                    <Col xs className="pr-0">
                    <p className="my-5" style={{ fontSize: '15px'}}>ENJOY YOUR FILM</p>
                        <img style={{ width: '3rem' }} src={icon5} alt="" />
                        <p className="my-5" style={{ fontSize: '12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </Col>
                </Row>
            </Container>




        );
    }
}
