import React, { Component } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div  >
        <Nav className="fixed-top navbar-dark bg-company-black">
        <a className="navbar-brand" href="https://www.qa.com" target="">
              <img src="http://www.apprenticeshipguide.co.uk/wp-content/uploads/2018/01/QA-logo-2019-3-300x300.jpg" width="50" height="50" alt="qa.com" />
            </a>
          <NavItem>
            <NavLink href="/home" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/WhatsOn" style={{color: 'white', textDecoration: 'none'}}>What's On?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ComingUp" style={{color: 'white', textDecoration: 'none'}}>What's Coming Up?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Booking" style={{color: 'white', textDecoration: 'none'}}>Book Now!</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret style={{color: 'white', textDecoration: 'none'}}>
              More
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>About The Cinema</DropdownItem>
              <DropdownItem href="/Screens">Our Screens </DropdownItem>
              <DropdownItem href="/AboutUs">About Us</DropdownItem>
              <DropdownItem href="/Classifications">Classifications</DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>What's Nearby?</DropdownItem>
              <DropdownItem href="/GettingHere">Getting Here</DropdownItem>
              <DropdownItem href="/ThingsToDo">Things To Do</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink disabled href="#">Watch this space</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}