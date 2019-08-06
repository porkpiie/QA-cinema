import React, { Component } from 'react';
import bbfc from '../Images/bbfcimg.jpg';
import U from '../Images/U.png';
import PG from '../Images/PG.png';
import TwelveA from '../Images/twelvea.png';
import Twelve from '../Images/12.png';
import Fifteen from '../Images/15.png';
import Eighteen from '../Images/18.png';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Classifications extends Component {
  render() {
    return (

      <div>
        <div className="banner-img-wrapper">
          <img src={bbfc} alt="bbfcpic" />
        </div>

        <Container fluid className="homecontainer">


          <h1 className="Listingh1">CLASSIFICATIONS</h1>
          <hr />

          <div>
            <p style={{ color: "white", textAlign: "left", fontFamily: "Roboto" }}>Classification is the process of giving age ratings and content advice to films
             and other audiovisual content to help children and families choose what's right for them and avoid what's not.</p><br />
            <p style={{ color: "white", textAlign: "left", fontFamily: "Roboto" }}>Recommendations are made by our Compliance Officers based on the BBFC's pulished
            Guidelines. These are the result of extensive consultation with people right across the UK, research,
            and the BBFC's more than 100 years of experience. They reflect people's views on film, DVD, Blu-Ray,
            video on demand (VoD) regulation and regularly updated</p><br />
          </div>


          <Row style={{ color: "white", textAlign: "left", marginLeft: "1px", marginRight: "1px" }}>
            <Col xs md={4} className="pl-0" >
              <a href="https://bbfc.co.uk/what-classification/u">
                <img style={{ width: '5rem' }} src={U} className="btn" alt="Universal"/>
              </a>
              <p className="my-4" style={{ fontSize: '12px' }}>SUITABLE FOR ALL</p>
            </Col>
            <Col xs md={4}>
              <a href="https://bbfc.co.uk/what-classification/pg">
                <img style={{ width: '5rem' }} src={PG} className="btn" alt="Parental Guidance" />
              </a>
              <p className="my-4" style={{ fontSize: '12px' }}>PARENTAL GUIDANCE</p>
            </Col>
            <Col xs className="pr-0" md={4}>
              <a href="https://bbfc.co.uk/what-classification/12a-and-12">
                <img style={{ width: '5rem' }} src={TwelveA} className="btn" alt="Twelve" />
              </a>
              <p className="my-4" style={{ fontSize: '12px' }}>CINEMA RELEASE FOR ALL 12 YEARS AND OVER</p>
            </Col>
          </Row>

          <Row style={{ color: "white", textAlign: "left", marginLeft: "1px", marginRight: "1px" }}>
            <Col className="pl-0" xs md={4}>
              <a href="https://bbfc.co.uk/what-classification/12a-and-12">
                <img style={{ width: '5rem' }} src={Twelve} className="btn" alt="Twelve A" />
              </a>
              <p className="my-4" style={{ fontSize: '12px' }}>CINEMA RELEASE FOR ALL 12 YEARS AND OVER</p>
            </Col>
            <Col xs className="pr-0" md={4}>
              <a href="https://bbfc.co.uk/what-classification/15">
                <img style={{ width: '5rem' }} src={Fifteen} className="btn" alt="Fifteen" />
              </a>
              <p className="my-4" style={{ fontSize: '12px' }}>SUITABLE ONLY FOR 15 YEARS AND OVER</p>
            </Col>

            <Col xs className="pr-0" md={4}>
              <a href="https://bbfc.co.uk/what-classification/18">
                <img style={{ width: '5rem' }} src={Eighteen} className="btn" alt="Eighteen" />
              </a>
              <p className="my-4" style={{ fontSize: '12px' }}>SUITABLE ONLY FOR ADULTS</p>
            </Col>
          </Row>

        </Container>
        <br/>
        <br/>
        
      </div>


    );
  }
}


