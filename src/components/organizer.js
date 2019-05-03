import React, { Component } from 'react';
// import './speakers.css'



class Organizer extends Component {
  constructor() {
    super()

    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  handleOpenModal = () => {
    this.props.openModal(this.props.organizer);
  }

  render() {
    return (
      <article className="organizer">
        <img src={this.props.organizer.picture} />
        <h2 className="organizer-text name">
          {this.props.organizer.name}
        </h2>
        <h3 className="organizer-text title">
          {this.props.organizer.title}
        </h3>
      </article>
    )
  }
}


export default Organizer;