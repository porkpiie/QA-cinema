import React, { Component } from 'react';
import Button from '../Components/Button.component';
import CheckBox from '../Components/CheckBox.component';
import Input from '../Components/Input.component';
import Select from '../Components/Select.component';
import axios from 'axios';

let APIkey = "14ab2cbcc55cd83768a0abc0594eb1ab";

class FormContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			booking: {
				firstName: "",
				secondName: "",
				filmName: "",
				filmDate: "",
				filmTime: "",
				adultTickets: "",
				childTickets: "",
				concessionTickets: "",
				email: "",

			},

			filmOptions: [],
			filmTimeOptions: ["12:15", "15:00", "17:45", "19:30", "21:00"],
			adultTicketsOptions: ["0", "1", "2", "3", "4 ", "5", "6"],
			childTicketsOptions: ["0", "1", "2", "3", "4 ", "5", "6"],
			concessionTicketsOptions: ["0", "1", "2", "3", "4 ", "5", "6"]
		};

		this.handleadultTickets = this.handleadultTickets.bind(this);
		this.handlechildTickets = this.handlechildTickets.bind(this);
		this.handleconcessionTickets = this.handleconcessionTickets.bind(this);
		this.handleFirstName = this.handleFirstName.bind(this);
		this.handleSecondName = this.handleSecondName.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		// this.handleCheckBox = this.handleCheckBox.bind(this);
		this.handleInput = this.handleInput.bind(this);

	}

	componentWillMount() {
		axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=" + APIkey)
			.then(response => {
				let filmList = response.data.results.slice(0, 4);
				let filmNames = [];
				for (let film in filmList) {
					film = filmList[film];
					filmNames.push(film.title);
				}

				this.setState({
					filmOptions: filmNames
				})
				console.log(this.state.filmOptions);
			})
			.catch();
	}

	handleFirstName(e) {
		let value = e.target.value;
		this.setState(
			prevState => ({
				booking: {
					...prevState.booking,
					firstName: value
				}
			}),
			() => console.log(this.state.booking)
		);
	}

	handleSecondName(e) {
		let value = e.target.value;
		this.setState(
			prevState => ({
				booking: {
					...prevState.booking,
					secondName: value
				}
			}),
			() => console.log(this.state.booking)
		);
	}

	handleadultTickets(e) {
		let value = e.target.value;
		this.setState(
			prevState => ({
				booking: {
					...prevState.booking,
					adultTickets: value
				}
			}),
			() => console.log(this.state.booking)
		);
	}

	handlechildTickets(e) {
		let value = e.target.value;
		this.setState(
			prevState => ({
				booking: {
					...prevState.booking,
					childTickets: value
				}
			}),
			() => console.log(this.state.booking)
		);
	}

	handleconcessionTickets(e) {
		let value = e.target.value;
		this.setState(
			prevState => ({
				booking: {
					...prevState.booking,
					concessionTickets: value
				}
			}),
			() => console.log(this.state.booking)
		);
	}

	handleInput(e) {
		let value = e.target.value;
		let name = e.target.name;
		this.setState(
			prevState => ({
				booking: {
					...prevState.booking,
					[name]: value
				}
			}),
			() => console.log(this.state.booking)
		);
	}

	// handleCheckBox(e) {
	//   const newSelection = e.target.value;
	//   let newSelectionArray;

	//   if (this.state.booking.filmTime.indexOf(newSelection) > -1) {
	//     newSelectionArray = this.state.booking.filmTime.filter(
	//       s => s !== newSelection
	//     );
	//   } else {
	//     newSelectionArray = [...this.state.booking.filmTime, newSelection];
	//   }

	//   this.setState(prevState => ({
	//     booking: { ...prevState.booking, filmTime: newSelectionArray }
	//   }));
	// }

	handleFormSubmit(e) {
		e.preventDefault();
		let userData = this.state.booking;
		console.log("Submitting Results...");

		fetch("http://localhost:8080/qac/bookings", {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		}).then(response => {
			response.json().then(data => {
				console.log("Successful" + data);
				window.location='./Seating';
			});
		});
	}

	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			booking: {
				firstName: "",
				secondName: "",
				filmName: "",
				filmDate: "",
				filmTime: "",
				adultTickets: "",
				childTickets: "",
				concessionTickets: "",
				email: "",
			}
		});
	}

	render() {
		return (
			<div>
				<form className="container-fluid" onSubmit={this.handleFormSubmit}>
					<Input
						inputType={"text"}
						title={"First Name"}
						name={"firstName"}
						value={this.state.booking.firstName}
						placeholder={"Please enter your First Name"}
						handleChange={this.handleInput}
					/>{" "}

					<Input
						inputType={"text"}
						title={"Second Name"}
						name={"secondName"}
						value={this.state.booking.secondName}
						placeholder={"Please enter your Second Name"}
						handleChange={this.handleInput}
					/>{" "}

					<Input
						inputType={"text"}
						title={"Email"}
						name={"email"}
						value={this.state.booking.email}
						placeholder={"you@email.com"}
						handleChange={this.handleInput}
					/>{" "}


					<Select
						title={"Film"}
						name={"filmName"}
						options={this.state.filmOptions}
						value={this.state.booking.filmName}
						placeholder={"Select Film"}
						handleChange={this.handleInput}
					/>{" "}
					<CheckBox
						title={"Showing"}
						name={"filmTime"}
						options={this.state.filmTimeOptions}
						selectedOptions={this.state.booking.filmTime}
						handleChange={this.handleInput}
					/>{" "}
					<Select
						title={"Adult"}
						name={"adultTickets"}
						options={this.state.adultTicketsOptions}
						value={this.state.booking.adultTickets}
						placeholder={"Number of Adult Tickets"}
						handleChange={this.handleInput}
					/>{" "}
					<Select
						name={"childTickets"}
						title={"Child"}
						options={this.state.childTicketsOptions}
						value={this.state.booking.childTickets}
						placeholder={"Number of Child tickets"}
						handleChange={this.handleInput}
					/>{" "}
					<Select
						title={"Concession"}
						name={"concessionTickets"}
						options={this.state.concessionTicketsOptions}
						value={this.state.booking.concessionTickets}
						placeholder={"Number of Concession tickets"}
						handleChange={this.handleInput}
					/>{" "}
					<Button
						action={this.handleFormSubmit}
						type={"primary"}
						title={"Submit"}
						style={buttonStyle}
					/>{" "}
					<Button
						action={this.handleClearForm}
						type={"secondary"}
						title={"Clear"}
						style={buttonStyle}
					/>{" "}
				</form>
			</div>
		);
	}
}

const buttonStyle = {
	margin: "10px 10px 10px 10px",
};

export default FormContainer;

