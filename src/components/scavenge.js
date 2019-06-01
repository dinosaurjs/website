import React, { Component } from 'react';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';

import './scavenge.css'

const query = graphql`
query {
  cdt: file(relativePath: {eq: "cdt.png"}) {
    childImageSharp {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  npower: file(relativePath: {eq: "npower.png"}) {
    childImageSharp {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  kobo: file(relativePath: {eq: "kobo.png"}) {
    childImageSharp {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

export default () => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="scavenge-panel panel" id="dig">
        <header className="panel-header">
          <h2>Dino Dig</h2>
        </header>
        <p class="about">Grab a sturdy shovel and your finest archeology hat. It's time to harness your inner <a href="http://www.dinosaurjungle.com/dinosaur_scientist_maryanning.php" target="_blank">Mary Anning</a> and <a href="http://www.dinosaurjungle.com/dinosaur_scientist_barnumbrown.php" target="_blank">Barnum Brown</a>.
        DinosaurJS would like to donate, on your behalf, to a handful of awesome non-profits working to make the world a better place. Let's find some dinosaurs!</p>

        <p>Here's how it works:</p>

        <ol class="instructions">
          <li>Take a photo of yourself and something dinosaur related.</li>
          <li>Post it on Twitter and tag #dinojs.</li>
          <li>We DM you a link where you get to donate $10 to one of the following non-profits.</li>
        </ol>

        <ul class="non-profits">
          <li class="non-profit">
            <Img
              fixed={data.cdt.childImageSharp.fixed}
              alt="Center for Democracy & Technology"
            />
            <a href="https://cdt.org/" target="_blank">
              <h4 class="name">CDT</h4>
            </a>
            <p class="description">CDT is a champion of global online civil liberties and human rights, driving
            policy outcomes that keep the internet open, innovative, and free.</p>
          </li>
          <li class="non-profit">
            <Img
              fixed={data.npower.childImageSharp.fixed}
              alt="Center for Democracy & Technology"
            />
            <a href="https://www.npower.org/" target="_blank">
              <h4 class="name">NPower</h4>
            </a>
            <p class="description">NPower creates pathways to economic prosperity by launching digital careers
            for military veterans and young adults from underserved communities.</p>
          </li>
          <li class="non-profit">
            <Img
              fixed={data.kobo.childImageSharp.fixed}
              alt="Center for Democracy & Technology"
            />
            <a href="https://www.kobotoolbox.org/" target="_blank">
              <h4 class="name">KoBoToolbox</h4>
            </a>
            <p class="description">KoBoToolbox is a suite of tools for field data collection for use in challenging
            environments, like humanitarian crises in developing countries. Our software is free
            and open source.</p>
          </li>
        </ul>

        <p>Don't see a non-profit you like? You can specify your own.</p>
      </div>
    )}
  />
)
