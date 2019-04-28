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
        <div className="titlebar">
          <div className="conf-title">
            DinosaurJS 2019
          </div>
          <hr className="bar">
          </hr>
          <div className="date">
            June 20 2019
          </div>
        </div>
        <div className="infobar">
          <div className="info">
            DinosaurJS is a non-profit, community-driven JavaScript and Open Web conference in Denver, Colorado.
          </div>
          <div className="info">
            DinosaurJS is part of the <a className="js-link" href="https://jsconf.com/">JSConf Family of Events</a> and adheres to the <a className="js-link" href="https://jsconf.com/codeofconduct.html">JSConf Code of Conduct.</a>
          </div>
        </div>
      </div>
    )
  }
}


export default Landing;
