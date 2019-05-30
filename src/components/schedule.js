import React, { Component } from 'react';
import './schedule.css'

class Schedule extends Component {
  constructor() {
    super()
}

  render() {
    return (
      <div className="schedule-panel panel" id="schedule">
        <header className="panel-header">
          <h2>Schedule</h2>
        </header>
        <p className="schedule-text time">{this.props.schedule.time}</p>
        <p className="schedule-text title">{this.props.schedule.speaker}</p>
        <p className="schedule-text description">{this.props.schedule.description}</p>
        <p className="schedule-text twitter">{this.props.schedule.twitter}</p>
      </div>
    )
  }
}


export default Schedule;