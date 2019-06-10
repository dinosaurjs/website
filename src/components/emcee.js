import React, { Component } from "react"
import "./emcee.css"

class Emcee extends Component {
  render() {
    return (
      <div className="emcee-panel panel" id="emcee">
        <header className="panel-header">
          <h2>Mademoiselle of Ceremonies</h2>
        </header>
        <article className="emcee">
          <img src="https://s3-us-west-2.amazonaws.com/dinosaurjs-assets/speakers/paladique.jpg" />
          <h2 className="emcee-text name">Jasmine Greenaway</h2>
          <p className="emcee-text abstract">
            Jasmine is an NYC based developer and Cloud Advocate at Microsoft and adjunct professor teaching basic web development at a local college. Outside of work, she volunteers as a co-organizer of <a href="http://brooklynjs.com">BrooklynJS</a>. Jasmine advocates for remote work environments, easier access to technology and the resources on how to use them, and elevating the work and voices of people of color in tech.
          </p>
        </article>
      </div>
    )
  }
}

export default Emcee
