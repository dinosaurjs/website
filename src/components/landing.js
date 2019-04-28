import React, { Component } from 'react';
import "./landing.css"
import logo from './main-logo.png'
import icon from './2019_icon.png'

class Landing extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="landing">
        <div className="navbar">
          <img className="icon" src={icon}/>
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">Speakers</a>
            </li>
            <li>
              <a href="#" className="nav-link">Tickets</a>
            </li>
            <li>
              <a href="#" className="nav-link">Schedule</a>
            </li>
            <li>
              <a href="#" className="nav-link">Sponsors</a>
            </li>
            <li>
              <a href="#" className="nav-link">Contact</a>
            </li>
        </ul>
        </div>
        <img className="logo" src={logo}/>
        <div className="title-bar">

        </div>
        <div className="infobar">
          <div className="info1">
            DinosaurJS is a non-profit, community-driven JavaScript and Open Web conference in Denver, Colorado.
          </div>
          <div className="info2">
            DinosaurJS is part of the <a href="https://jsconf.com/">JSConf Family of Events</a> and adheres to the <a href="https://jsconf.com/codeofconduct.html">JSConf Code of Conduct.</a>
          </div>
        </div>
      </div>
    )
  }
}


export default Landing;
