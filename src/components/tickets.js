import React, { Component } from 'react';
import './tickets.css'

class Tickets extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="tickets-panel">
        <header>Tickets</header>
        <div className="ticket-text">
          Lorem ipsum dolor sit amet, vel fabellas sapientem in. Erant quodsi delicata ius ea. Salutatus consetetur at cum, no omnesque cotidieque pro, eum ad volutpat temporibus. Tota voluptaria eum an, sed eu porro argumentum. Id qui modo autem, vel wisi petentium ne. Quodsi aliquip sensibus eum ne.
        </div>
        <button>Get a ticket!</button>
      </div>
    )
  }
}


export default Tickets;
