import React, { Component } from 'react';
import Speaker from "./speaker"
import SpeakerModal from "./speakerModal"
import './speakers.css'


class Speakers extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      modalSpeaker: null
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(modalSpeaker) {
    this.setState({ showModal: true });
    this.setState({ modalSpeaker: modalSpeaker });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="speaker-panel">
        <header>Speakers</header>
        <div className="speakers">
          {this.props.speakers.map(speaker =>
            <Speaker speaker={speaker}
                     openModal={this.handleOpenModal}/> )}
        </div>
        <SpeakerModal isOpen={this.state.showModal}
                      speaker={this.state.modalSpeaker}
                      closeModal={this.handleCloseModal}/>
      </div>
    )
  }
}


export default Speakers;
