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
      <article className="speaker">
        <img src={this.props.speaker.picture} />
        <h2 className="speaker-text name">
          {this.props.speaker.name}
        </h2>
        <h3 className="speaker-text title">
          {this.props.speaker.title}
        </h3>
        <p className="speaker-text abstract">
          {this.props.speaker.abstract}
        </p>
      </article>
    )
  }
}


export default Speaker;
