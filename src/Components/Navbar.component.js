
import React, { Component } from 'react';
import { Button, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Form, NavLink } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import { Link, NavLink as RouterNavLink, withRouter } from 'react-router-dom';
import logo from '../logo.png';
import Container from 'react-bootstrap/Container';
import './navbar.css';
import SearchBar from './SearchBar.component';


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,

      links: [
        {
          label: 'Home',
          path: '/home'
        },
        {
          label: 'What\'s On',
          path: '/WhatsOn'
        },
        {
          label: 'NEW RELEASES',
          path: '/ComingUp'
        },
        {
          label: 'BOOK NOW',
          path: '/Booking'
        }
      ]
    };

    this.searchClicked = this.searchClicked.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  searchClicked(searchInput) {
    this.props.history.push(`/search/${searchInput}`);
  }

  render() {
    return (
      <Container >
        <Nav className="fixed-top navbar-expand-xl navbar-dark bg-company-black">
          <a className="navbar-brand" href="/home" target="">
            <img style={{ paddingLeft: "30%" }} src={logo} height="100" alt="whalepic" />
          </a>

          {this.state.links.map(l => (
            <NavItem>
              <Link to={l.path}>
                <NavLink>{l.label.toLocaleUpperCase()}</NavLink>
              </Link>
            </NavItem>
          ))}

          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              MORE
            </DropdownToggle>
            <DropdownMenu style={{ backgroundColor: 'black' }}>
              <DropdownItem header>ABOUT THE CINEMA</DropdownItem>
              <DropdownItem href="/Screens" style={{ color: '#28CDE9', textDecoration: 'none' }}>OUR SCREENS</DropdownItem>
              <DropdownItem href="/OpeningTimes" style={{ color: '#28CDE9', textDecoration: 'none' }}>OPENING TIMES</DropdownItem>
              <DropdownItem href="/AboutUs" style={{ color: '#28CDE9', textDecoration: 'none' }}>ABOUT US</DropdownItem>
              <DropdownItem href="/Classifications" style={{ color: '#28CDE9', textDecoration: 'none' }}>CLASSIFICATIONS</DropdownItem>
              <DropdownItem href="/ContactUs" style={{ color: '#28CDE9', textDecoration: 'none' }}>CONTACT US</DropdownItem>
              <DropdownItem href="/DiscussionBoard" style={{ color: '#28CDE9', textDecoration: 'none' }}>DISCUSSION BOARD</DropdownItem>
              <DropdownItem divider />
              <DropdownItem header>WHAT'S NEARBY?</DropdownItem>
              <DropdownItem href="/GettingHere" style={{ color: '#28CDE9', textDecoration: 'none' }}>GETTING HERE</DropdownItem>
              <DropdownItem href="/ThingsToDo" style={{ color: '#28CDE9', textDecoration: 'none' }}>THINGS TO DO</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* <Form inline className="ml-auto mr-3">
            <FormControl type="text" placeholder="Search Term" className="mr-sm-2" id="searchBox" />
            <Button onClick={this.searchClicked} type="button" color="info">SEARCH</Button>

          </Form> */}
          <div style={{ paddingRight: "4%" }} className="my-auto ml-auto mr-3">
            <SearchBar onSubmit={this.searchClicked} />
          </div>
        </Nav>
      </Container>
    );
  }
}

export default withRouter(Navigation);