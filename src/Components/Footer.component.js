import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class AppFooter extends Component {
  render() {
    return (
      <MDBFooter color="blue-gradient pt-4 mt-4" className="company-footer">
        <MDBContainer className="text-center text-md-left">
          <MDBRow className="my-4">
            <MDBCol md="4" lg="4">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Ocean View
              </h5>
              <p className="text-uppercase font-weight-light">moonlit migration<br />
                giants swimming to shelter<br />
                warmer waters soon
              </p>
              <p>
                __________________________________
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="ml-auto">
              <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
              <ul className="list-unstyled">
                <p>
                  <a href="/home">HOME</a>
                </p>
                <p>
                  <a href="/AboutUs">ABOUT US</a>
                </p>
                <p>
                  <a href="/ContactUs">CONTACT US</a>
                </p>
              </ul>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="5" lg="3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
              <p>
                <i className="fa fa-home mr-3" />Alexandra House, Wroughton, Swindon SN4 0QJ
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> +44 1234 567890
              </p>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
            <MDBCol md="2" lg="2" className="text-center">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                Follow us
              </h5>
              <div className="mt-2 ">
                <a className="btn btn-link" href="#!">
                  <i className="fab fa-facebook-f text-white" />
                </a>
                <a className="btn btn-link" href="https://twitter.com/filmsqa" target="__blank">
                  <i className="fab fa-twitter text-white" />
                </a>
              </div>
            </MDBCol>
            <hr className="clearfix w-100 d-md-none" />
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} QA Films
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

