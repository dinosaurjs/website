import React, { Component } from 'react';
import './sponsors.css'
import sgdo from './sponsors1.png'
import group from './sponsors2.png'
import cirro from './sponsors3.png'
import ms from './sponsors4.png'
import kickbox from './sponsors5.png'
import mozilla from './sponsors6.png'
import ca from './sponsors7.png'

class Schedule extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <div className="sponsor-panel1">
          <header>Sponsors</header>
          <img className="sponsor ms" src={ms}/>
          <img className="sponsor cirro" src={cirro}/>
          <img className="sponsor ca" src={ca}/>
        </div>
        <div className="sponsor-panel2">
          <div className="tier2">
            <img className="sponsor2 kickbox" src={kickbox}/>
            <img className="sponsor2 mozilla" src={mozilla}/>
            <img className="sponsor3 group" src={group}/>
            <img className="sponsor3 sgdo" src={sgdo}/>
          </div>
        </div>
      </>
    )
  }
}


export default Schedule;
