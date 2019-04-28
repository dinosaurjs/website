import React, { Component } from 'react';
import Modal from 'react-modal';
import Landing from "./landing"
import Speakers from "./speakers"
import Tickets from "./tickets"
import Schedule from "./schedule"
import Sponsors from "./sponsors"
import './app.css'

Modal.setAppElement(document.getElementById('app'));

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div id="app">
        <Landing/>
        <Speakers speakers={this.props.speakers}/>
        <Tickets/>
        <Schedule/>
        <Sponsors/>
      </div>
    )
  }
}


export default App;
