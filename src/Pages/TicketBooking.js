import React, { Component } from 'react';
import FormContainer from '../Containers/FormContainer';
import Banner from '../Components/Banner.component';

export default class TicketBooking extends Component{
    render(){
        return(
            <div>
                <div>
                    <Banner/>
                    </div>
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