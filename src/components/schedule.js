import React, { Component } from 'react';
import './schedule.css'
import day1 from './day1.png'
import day2 from './day2.png'

class Schedule extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="schedule-panel">
        <header>Schedule</header>
        <div className="schedules">
          <img className="day1-image schedule" src={day1}/>
          <img className="day2-image schedule" src={day2}/>
        </div>
      </div>
    )
  }
}


export default Schedule;
