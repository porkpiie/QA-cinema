import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			complete: false,
			validBooking: false,
			booking: [],
			bookingID: ""
		};
		this.submit = this.submit.bind(this);
	}

	componentWillMount() {
		let booking = sessionStorage.getItem("bookingData");
		if (booking !== null) {
			booking = JSON.parse(booking);
			this.state.booking = booking;
			this.state.validBooking = true;
		}
	}

	async submit(ev) {

		let booking = this.state.booking;
		booking = JSON.stringify(booking);

		fetch("http://localhost:8080/qac/bookings/", {
			method: "POST",
			body: booking,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		}).then(response => {
			response.text().then(data => {
				data = JSON.parse(data);
				this.state.bookingID = data.id;
				sessionStorage.removeItem("bookingData");
				this.setState({ complete: true });

				let request = {};
				request.bookingID = this.state.bookingID;
				request = JSON.stringify(request);
			
				fetch("http://localhost:8080/qac/payment/", {
					method: "POST",
					body: request,
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json"
					}
				})
			});
		});
	
	}
	render() {
					if(this.state.validBooking) {
				if (this.state.complete) {
					console.log(this.state.booking);
					let filmName = "";
					for (let character in this.state.booking.filmName) {
						if (this.state.booking.filmName[character] === "_") {
							filmName += " ";
						}
						else {
							filmName += this.state.booking.filmName[character];
						}
					}
					return (
						<div>
							<h1 style={{ color: 'black', textAlign: "center" }}>Purchase Complete</h1>
							<h3> Thank You For Your Purchase {this.state.booking.firstName}</h3>
							<h3> Your Booking ID Is {this.state.bookingID}</h3>
							<h3> Please Retain This Number And Bring It To Your Film Showing</h3>
							<h4> You Have Booked To See {filmName + " "}
								On {this.state.booking.filmDate + " "}  At {this.state.booking.filmTime}</h4>
							<h5> A Confirmation Email Will Be Sent To {this.state.booking.email} Shortly</h5>
						</div>
					);
				}

				else {
					return (
						<div className="checkout">
							<p>Would you like to complete the purchase?</p>
							<div style={{ color: 'black', textAlign: "center", width: '30%' }}>
								<CardElement />
							</div>
							<button onClick={this.submit}>Send</button>
						</div>
					);
				}
			}
		else {
				return (
					<h1 style={{ color: 'black', textAlign: "center" }}>No In-Progess Booking Found</h1>
				);
			}
		}
}

	export default injectStripe(CheckoutForm);

























