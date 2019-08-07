import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Components/Banner.component';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
            <div className="banner-img-wrapper">
                <Banner />
            </div>
            <Container fluid className="homecontainer">
            <h1 className="Listingh1">ABOUT US</h1>
            <hr/>
            
            </Container>
            </div>

                    )
                }
            }
