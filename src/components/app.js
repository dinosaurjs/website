import React, { Component } from 'react';
import Landing from "./landing"
import Speakers from "./speakers"
import Tickets from "./tickets"
import Schedule from "./schedule"
import Sponsors from "./sponsors"
import './app.css'



class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <Landing/>
        <Speakers speakers={this.props.speakers}/>
        <Tickets/>
        <Schedule/>
        <Sponsors/>
      </>
    )
  }
}


export default App;
