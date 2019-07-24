import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './Components/Navbar.component';
import Home from './Pages/Home';
import Listings from './Pages/Listings';
import NewReleases from './Pages/NewReleases';


function App() {
  return (
    <div className="App">      
      <header className="App-header">
      <Navigation/>
      </header>
      <div>
      <Router>
        <div>
          <Route path="/home" component={Home}/>
          <Route path="/WhatsOn" component={Listings}/>
          <Route path="/ComingUp" component={NewReleases}/>
        </div>
      </Router>
      </div>
      </div>
      
      
    
      
    
  );
}

export default App;
