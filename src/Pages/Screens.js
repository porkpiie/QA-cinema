import React, { Component } from 'react';
import standard from '../Images/screenStandard.jpg'

export default class Screens extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="Listingh1">OUR SCREENS</h1>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img className="standard" src={standard} alt="standardscreen" />
                        <div className="col-2">SOMETHING HERE?
                </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}