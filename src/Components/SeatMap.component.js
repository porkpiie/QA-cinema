import React, { Component } from 'react';
import Button from '../Components/Button.component';

export default class SeatMap extends React.Component {

    constructor() {
        super();
        this.state = {
            seat: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6',
                'D1', 'D2', 'D3', 'D4', 'D5', 'D6',
                'E1', 'E2', 'E3', 'E4', 'E5', 'E6',
                'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
            ],
            seatAvailable: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6',
                'D1', 'D2', 'D3', 'D4', 'D5', 'D6',
                'E1', 'E2', 'E3', 'E4', 'E5', 'E6',
                'F1', 'F2', 'F3', 'F4', 'F5', 'F6',
            ],
            seatUnavailable: [],
            seatReserved: [],
            seatsToSelect: 0,
            seatsRemaining: 0,
            booking: [],
        }
    }

    componentWillMount() {
        this.state.booking = JSON.parse(sessionStorage.getItem("bookingData"));
        if (this.state.booking !== null) {
            console.log(this.state.booking.filmDate);

            let filmName = "";
            for (let character in this.state.booking.filmName) {
                character = this.state.booking.filmName[character];
                if (character === " ") {
                    filmName += "_";
                }
                else {
                    filmName += character;
                }
            }
            this.state.booking.filmName = filmName;

            fetch("http://localhost:8080/qac/seats/" + this.state.booking.filmName + "/"
                + this.state.booking.filmTime + "/"
                + this.state.booking.filmDate, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }).then(response => {
                    response.text().then(data => {
                        this.setState({
                            seatUnavailable: data
                        })
                    });
                });

            this.state.seatsToSelect = parseInt(this.state.booking.adultTickets) +
                parseInt(this.state.booking.childTickets) +
                parseInt(this.state.booking.concessionTickets);
        }
        else {
            window.location = './Booking';
        }
    }

    onClickData(seat) {
        let seatTaken = false;

        let unavailableSeats = this.state.seatUnavailable.split(", ");

        for (let takenSeat in unavailableSeats) {
            let thisTakenSeat = unavailableSeats[takenSeat];
            thisTakenSeat = thisTakenSeat.replace("[", "");
            thisTakenSeat = thisTakenSeat.replace("]", "");
            if (seat === thisTakenSeat) {
                seatTaken = true;
            }
        }

        if (seatTaken === false) {
            if (this.state.seatReserved.indexOf(seat) > -1) {
                this.setState({
                    seatAvailable: this.state.seatAvailable.concat(seat),
                    seatReserved: this.state.seatReserved.filter(res => res != seat)
                })
            } else {
                if (this.state.seatsRemaining !== 0) {
                    this.setState({
                        seatReserved: this.state.seatReserved.concat(seat),
                        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
                    })
                }
            }
        }
    }

    submit() {
        console.log("Reserved Seats:" + this.state.seatReserved);
        if (this.state.seatsRemaining !== 0) {
            console.log("Not Enough Seats Chosen")
        }
        else {
            let booking = this.state.booking;
            booking.seatID = this.state.seatReserved;
            booking.paid = 1;
            booking = JSON.stringify(booking);
            console.log(booking);

            sessionStorage.removeItem("bookingData");
            sessionStorage.setItem("bookingData", booking);
            window.location = './Payment';

        }
    }

    clear() {
        this.setState({
            seatReserved: []
        });
    }

    render() {
        let seatsRemaining = this.state.seatsToSelect;
        for (let seatPicked in this.state.seatReserved) { seatsRemaining--; }
        this.state.seatsRemaining = seatsRemaining;

        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h3>Please Select Your {this.state.seatsToSelect} Seat(s)</h3>
                <h4>Seats Currently Selected: {this.state.seatsToSelect - seatsRemaining}</h4>
                <DrawGrid
                    seat={this.state.seat}
                    available={this.state.seatAvailable}
                    seatUnavailable={this.state.seatUnavailable}
                    reserved={this.state.seatReserved}
                    onClickData={this.onClickData.bind(this)}
                    clear={this.clear.bind(this)}
                    submit={this.submit.bind(this)}
                />
            </div>
        )
    }
}

class DrawGrid extends React.Component {

    render() {
        return (
            <div className="container">
                <h2></h2>
                <table className="grid">
                    <tbody>
                        <tr>
                            {this.props.seat.map(row =>
                                <td
                                    className={
                                        this.props.seatUnavailable.indexOf(row) > -1 ? 'unavailable' :
                                            this.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available'}
                                    key={row} onClick={e => this.onClickSeat(row)}>{row} </td>)}
                        </tr>
                    </tbody>
                </table>
                <Button
                    action={e => this.handleFormSubmit(e)}
                    type={"primary"}
                    title={"Submit"}
                />{" "}
                <Button
                    action={e => this.handleClearForm(e)}
                    type={"secondary"}
                    title={"Clear"}
                />{" "}
            </div>
        )
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.submit();
    }

    handleClearForm(e) {
        e.preventDefault();
        this.props.clear();
    }
}

