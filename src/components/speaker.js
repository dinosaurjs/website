import React, { Component } from 'react';
// import './speakers.css'


class Speaker extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="speaker">
        <td>
          <img src={this.props.image} />
        </td>
        <div className="speaker-text name">
          {this.props.name}
        </div>
        <hr/>
        <div className="speaker-text title">
          {this.props.title}
        </div>
        <div className="speaker-text text">
          {this.props.text}
        </div>
      </div>
    )
  }
}


export default Speaker;
