import React, { Component } from 'react';
import './tickets.css'

class Tickets extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="tickets-panel panel" id="tickets">
        <header className="panel-header">
          <h2>Tickets</h2>
        </header>
        <a href="https://ti.to/dinosaurjs/2019" className="button">Get Your Tickets Today</a>
      </div>
    )
  }
}


export default Tickets;
