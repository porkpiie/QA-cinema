import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../Components/Payment.component';

class Payments extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_mKAxfggcPvp6uwVmJ3GY35jp00iGbl6zcc">
        <div className="paymentForm" style={{backgroundColor: 'white'}}>
          <h1 style={{color: 'black'}}>Payment Form</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default Payments;