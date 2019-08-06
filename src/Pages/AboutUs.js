import React, { Component } from 'react';
import Profiles from '../Components/Profiles.component';
import { Link } from 'react-router-dom';
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
                    <h1 className="Listingh1">GIT CLUB</h1>
                    <hr />
                    <Profiles />
                    <hr />
                    <h1 className="Listingh1">PLEASE DON'T HESISTATE TO <Link to="/ContactUs" style={{ color: "#28CDE9" }}>GET IN TOUCH</Link></h1>
                    <hr />
                    <h1 className="Listingh1">OUR JOURNEY USING <a href="https://www.scrum.org/" target="__blank" style={{ color: "#28CDE9" }}>SCRUM</a></h1>
                </Container>
            </div>
        )
    }
}
