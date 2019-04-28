import React, { Component } from 'react';
import Landing from "./landing"
import Speakers from "./speakers"
import './app.css'


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <Landing/>
        <Speakers/>
      </>
    )
  }
}


export default App;
