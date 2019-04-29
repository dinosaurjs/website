import React, { Component } from 'react';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';

import "./landing.css";

const query = graphql`
query {
  siteLogo: file(relativePath: {eq: "site-logo.png"}) {
    childImageSharp {
      fixed(width: 610) {
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
      <div className="landing">
        <Img
          fixed={data.siteLogo.childImageSharp.fixed}
          width="610"
          alt="DinosaurJS 2019"
        />
        <div className="titlebar">
          <div className="conf-title">
            DinosaurJS 2019
          </div>
          <hr className="bar">
          </hr>
          <div className="date">
            June 20 2019
          </div>
        </div>
        <div className="infobar">
          <div className="info">
            DinosaurJS is a non-profit, community-driven JavaScript and Open Web conference in Denver, Colorado.
          </div>
          <div className="info">
            DinosaurJS is part of the <a className="js-link" href="https://jsconf.com/">JSConf Family of Events</a> and adheres to the <a className="js-link" href="https://jsconf.com/codeofconduct.html">JSConf Code of Conduct.</a>
          </div>
        </div>
      </div>
    )}
  />
)
