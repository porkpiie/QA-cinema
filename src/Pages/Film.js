import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicFilmDetails from '../Components/DynamicFilm.component';


export default class Film extends Component{
    render(){
        return(
            <div>
                <DynamicFilmDetails />
            </div>
        )
    }
}