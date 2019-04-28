import React, { Component } from 'react';
// import './speakers.css'


class Speaker extends Component {
  constructor() {
    super()

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal = () => {
    this.props.openModal(this.props.speaker);
  }

  render() {
    return (
      <div className="speaker">
        <img src={this.props.speaker.picture} />
        <div className="speaker-text name">
          {this.props.speaker.name}
        </div>
        <hr/>
        <div className="speaker-text title">
          {this.props.speaker.title}
        </div>
        <div className="speaker-text text"
             onClick={this.handleOpenModal}
             style={{cursor:'pointer'}}>
          {this.props.speaker.abstract}
        </div>
      </div>
    )
  }
}


export default Speaker;
