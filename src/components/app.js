import React, { Component } from 'react';
import Landing from "./landing"
import Speakers from "./speakers"
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
      </>
    )
  }
}


export default App;
