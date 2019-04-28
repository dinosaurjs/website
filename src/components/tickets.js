import React, { Component } from 'react';
import './tickets.css'
import ticketicon from './buy-tickets-now.png'



class Tickets extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="tickets-panel">
        <header>lorem ispum dolor sit amet</header>
        <div className="ticket-text">
          Lorem ipsum dolor sit amet, vel fabellas sapientem in. Erant quodsi delicata ius ea. Salutatus consetetur at cum, no omnesque cotidieque pro, eum ad volutpat temporibus. Tota voluptaria eum an, sed eu porro argumentum. Id qui modo autem, vel wisi petentium ne. Quodsi aliquip sensibus eum ne.
        </div>
        <img className="ticket-icon" src={ticketicon}/>
      </div>
    )
  }
}


export default Tickets;
