import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicSearch from '../Components/DynamicSearch.component';


export default class Film extends Component{
    render(){
        return(
            <div>
                <DynamicSearch/>
            </div>
        )
    }
}