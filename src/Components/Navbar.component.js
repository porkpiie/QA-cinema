import React, { Component } from 'react';
import { Button, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Form, NavLink } from 'reactstrap';
import { FormControl} from 'react-bootstrap';
import logo from '../logo.png';


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
      <div>
        <Nav className="fixed-top navbar-dark expand-xl bg-company-black">
        <a className="navbar-brand" href="/home" target="">
              <img src={logo} width="200" height="150" alt="whalepic" />
            </a>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/WhatsOn">What's On?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ComingUp">What's Coming Up?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Booking">Book Now!</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              More
            </DropdownToggle>
            <DropdownMenu style={{backgroundColor : 'black'}}>
              <DropdownItem header>About The Cinema</DropdownItem>
              <DropdownItem href="/Screens" style={{color: 'red', textDecoration: 'none'}}>Our Screens </DropdownItem>
              <DropdownItem href="/OpeningTimes" style={{color: 'red', textDecoration: 'none'}}>Opening Times </DropdownItem>
              <DropdownItem href="/AboutUs" style={{color: 'red', textDecoration: 'none'}}>About Us</DropdownItem>
              <DropdownItem href="/Classifications" style={{color: 'red', textDecoration: 'none'}}>Classifications</DropdownItem>
              <DropdownItem href ="/ContactUs" style={{color: 'red', textDecoration: 'none'}}>Contact Us</DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>What's Nearby?</DropdownItem>
              <DropdownItem href="/GettingHere" style={{color: 'red', textDecoration: 'none'}}>Getting Here</DropdownItem>
              <DropdownItem href="/ThingsToDo" style={{color: 'red', textDecoration: 'none'}}>Things To Do</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink disabled href="#">Watch this space</NavLink>
          </NavItem>
          <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
        </Nav>
      </div>
    );
  }
}