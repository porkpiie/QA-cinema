import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './Components/Navbar.component';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import NewReleases from './Pages/NewReleases';
import TicketBooking from './Pages/TicketBooking';
import Screens from './Pages/Screens';
import AboutUs from './Pages/AboutUs';
import AppFooter from './Components/Footer.component';
import Classifications from './Pages/Classifications';
import Getting from './Pages/GettingThere';
import PlacesToGo from './Pages/PlacesToGo';
import OpeningTimes from './Pages/OpeningTimes';
import ContactUs from './Pages/ContactPage';



function App() {
  return (
    <div className="App">
      <head className="App-header">
      <script src="https://kit.fontawesome.com/c2b25765db.js"></script>
      <Navigation/>
      </head>
      <div>
      <Router>
        <div>
          <Route path="/home" component={Home}/>
          <Route path="/WhatsOn" component={Listings}/>
          <Route path="/ComingUp" component={NewReleases}/>
          <Route path="/Booking" component={TicketBooking}/>
          <Route path="/Screens" component={Screens}/>
          <Route path="/AboutUs" component={AboutUs}/>
          <Route path="/Classifications" component={Classifications}/>
          <Route path="/GettingHere" component={Getting}/>
          <Route path="/ThingsToDo" component={PlacesToGo}/>
          <Route path="/OpeningTImes" component={OpeningTimes}/>
          <Route path="/Contact Us" component={ContactUs}/>
        </div>
      </Router>
      </div>
      <AppFooter/>
      </div>
  );
}

export default App;
