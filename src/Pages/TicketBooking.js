import React, { Component } from 'react';
import FormContainer from '../Containers/FormContainer';
import Banner from '../Components/Banner.component';
import { Container } from "react-bootstrap";

export default class TicketBooking extends Component {
    render() {
        return (
            <div>
                <div className="banner-img-wrapper">
                    <Banner />
                </div>

                <Container className="homecontainer">
                    <h1 className="Listingh1">BOOKING</h1>
                    <hr />
                    <div className="col-md-6 company-booking">
                        <FormContainer />
                    </div>
                </Container>
            </div>
        )
    }
}