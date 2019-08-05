import React, { Component } from 'react';

export default class SeatMap extends React.Component {

    constructor() {
        super();
        this.state = {
            seat: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6',
            ],
            seatAvailable: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6',
            ],
            seatReserved: []
        }
    }

    onClickData(seat) {
        if (this.state.seatReserved.indexOf(seat) > -1) {
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seat),
                seatReserved: this.state.seatReserved.filter(res => res != seat)
            })
        } else {
            this.setState({
                seatReserved: this.state.seatReserved.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res != seat)
            })
        }
    }

    render() {
        console.log(this.state.seatReserved);
        return (
            <div>
                <h3>Select Seats</h3>
                <DrawGrid
                    seat={this.state.seat}
                    available={this.state.seatAvailable}
                    reserved={this.state.seatReserved}
                    onClickData={this.onClickData.bind(this)}
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
                                    className={this.props.reserved.indexOf(row) > -1 ? 'reserved' : 'available'}
                                    key={row} onClick={e => this.onClickSeat(row)}>{row} </td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
}

