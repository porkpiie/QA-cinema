import React, { Component } from 'react';
import FormContainer from '../Containers/FormContainer';

export default class TicketBooking extends Component{
    render(){
        return(
            <div>
            <div>
            <h1 className="Listingh1">READY... SET... GO!</h1>
            <hr/>
            </div>
            <div className="col-md-6 company-booking">
            <FormContainer/>
            </div>
            </div>
        )
    }
}