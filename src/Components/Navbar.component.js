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
      <div>
        <Nav pills className="bg-dark">
          <NavItem>
            <NavLink href="/" >Home</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="/WhatsOn" active>What's On?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ComingUp">What's Coming Up?</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Things n Stuff
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>In and around</DropdownItem>
              <DropdownItem>Getting here</DropdownItem>
              <DropdownItem>Things To Do</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Our Screens</DropdownItem>
              <DropdownItem>Our Concessions</DropdownItem>
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