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
          <Speaker image={speaker}
                   name="name1"
                   title="title1"
                   text="text1"/>
          <Speaker image={speaker}
                   name="name2"
                   title="title2"
                   text="text2"/>
          <Speaker image={speaker}
                   name="name3"
                   title="title3"
                   text="text3"/>
          <Speaker image={speaker}
                   name="name4"
                   title="title4"
                   text="text4"/>
        </div>
      </div>
    )
  }
}


export default Speakers;
