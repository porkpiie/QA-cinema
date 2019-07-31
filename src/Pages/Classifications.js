import React, { Component } from 'react';
import bbfc from '../Images/bbfcimg.jpg';
import U from '../Images/U.png';
import PG from '../Images/PG.png';
import TwelveA from '../Images/12A.png';
import Twelve from '../Images/12.png';
import Fifteen from '../Images/15.png';
import Eighteen from '../Images/18.png';

export default class Classifications extends Component{
    render(){
        return(
            <div>
            <div>
                <div>
            <img src={bbfc} className="bbfcban" alt="bbfcpic" />
            </div>
            <h1 className="Listingh1">Classifications</h1>
            <hr/>
            <p className="classificationP1">Classification is the process of giving age ratings and content advice to films
             and other audiovisual content to help children and families choose what's right for them and avoid what's not.</p><br/>
            <p className="classificationP1">Recommendations are made by our Compliance Officers based on the BBFC's pulished 
            Guidelines. These are the result of extensive consultation with people right across the UK, research, 
            and the BBFC's more than 100 years of experience. They reflect people's views on film, DVD, Blu-Ray, 
            video on demand (VoD) regulation and regularly updated</p><br/>
            </div>


            <div className="container">
            <div className="row">
              <div className="col-4">
                  <a className="btn" href="https://bbfc.co.uk/what-classification/u" target="__blank">
                <img src={U} alt="U" style={{ paddingBottom : "20px"}} /></a>
                <p>SUITABLE FOR ALL</p>
              </div>
              <div className="col-4">
              <a className="btn" href="https://bbfc.co.uk/what-classification/pg" target="__blank">
              <img src={PG} alt="PG" style={{ paddingBottom : "20px"}} /></a>
                <p>PARENTAL GUIDANCE</p>
              </div>
              <div className="col-4">
              <a className="btn" href="https://bbfc.co.uk/what-classification/12a-and-12" target="__blank">
              <img src={TwelveA} alt="12A" style={{ paddingBottom : "20px"}} /></a>
                <p>CINEMA RELEASE FOR ALL 12 YEARS AND OVER</p>
                
              </div>           
            </div><br />
            <br />
            <br />
            <br />
            <br />

            <div className="container">
            <div className="row">
              <div className="col-4">
              <a className="btn" href="https://bbfc.co.uk/what-classification/12a-and-12" target="__blank">
                <img src={Twelve} alt="U" style={{ paddingBottom : "20px"}} /></a>
                <p>CINEMA RELEASE FOR ALL 12 YEARS AND OVER</p>
              </div>
              <div className="col-4">
              <a className="btn" href="https://bbfc.co.uk/what-classification/15" target="__blank">
              <img src={Fifteen} alt="PG" style={{ paddingBottom : "20px"}} /></a>
              <p>SUITABLE ONLY FOR 15 YEARS AND OVER</p>
              </div>
              <div className="col-4">
              <a className="btn" href="https://bbfc.co.uk/what-classification/18</a>" target="__blank">
              <img src={Eighteen} alt="12A" style={{ paddingBottom : "20px"}} /></a>
                <p>SUITABLE ONLY FOR ADULTS</p>
              </div>           
            </div>
          </div>
          </div>
          </div>

            
        )
    }
}