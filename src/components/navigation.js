import React from 'react';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';

import "./navigation.css";

const query = graphql`
query {
  squareLogo: file(relativePath: {eq: "square-logo.png"}) {
    childImageSharp {
      fixed(width: 50) {
        base64
        tracedSVG
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        originalName
        width
        height
      }
    }
  }
}
`

export default () => (
  <StaticQuery
    query={query}
    render={data => (
        <nav className="navigation">
        <Img
          className="navigation-logo"
          fixed={data.squareLogo.childImageSharp.fixed}
          alt="DinosaurJS 2019"
        />
          <ul className="navigation-links">
            <li>
              <a href="#speakers" className="navigation-link">Speakers</a>
            </li>
            <li>
              <a href="https://ti.to/dinosaurjs/2019" className="navigation-link">Tickets</a>
            </li>
            <li>
              <a href="#schedule" className="navigation-link">Schedule</a>
            </li>
            <li>
              <a href="#workshops" className="navigation-link">Workshops</a>
            </li>
            <li>
              <a href="#sponsors" className="navigation-link">Sponsors</a>
            </li>
        </ul>
        </nav>
    )}
  />
)
