import React, { Component } from 'react';
import Speaker from "./speaker"
import './speakers.css'
import speaker from './speaker.png'


class Speakers extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="speaker-panel">
        <header>Speakers</header>
        <div className="speakers">
          {this.props.speakers.map(speaker =>
            <Speaker image={speaker.picture}
                     name={speaker.name}
                     title={speaker.title}
                     text={speaker.abstract}
                     twitter={speaker.twitter} /> )}
        </div>
      </div>
    )
  }
}


export default Speakers;
