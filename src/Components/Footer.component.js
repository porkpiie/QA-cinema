import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Nav } from 'react-bootstrap';

export default class AppFooter extends Component{
    render() {
        return(
            <div id="footer" className="navbar-dark bg-company-footer">  
                <Navbar>
                    <Nav>
                        <NavbarBrand> &copy; QA Cinemas 2019</NavbarBrand>
                        <NavItem>
                            <NavLink  href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  href="/AboutUs">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ContactUs">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}