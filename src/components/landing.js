import React, { Component } from 'react';
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';

import "./landing.css";

const query = graphql`
query {
  siteLogo: file(relativePath: {eq: "site-logo.png"}) {
    childImageSharp {
      fixed(width: 600) {
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
      <section className="hero-panel panel">
        <Img
          fixed={data.siteLogo.childImageSharp.fixed}
          alt="DinosaurJS"
        />
        <header className="title">
          <h1 className="conference-name">
            DinosaurJS
          </h1>
          <h2 className="date">
            June 20, 2019
          </h2>
        </header>
        <article className="information">
          <p className="info">
            DinosaurJS is a non-profit, community-driven JavaScript and Open Web conference in Denver, Colorado. This year, it will be located at the Studio Loft inside of the Denver Performing Arts Center on 14th in Curtis in lower downtown.
          </p>
          <p className="info">
            DinosaurJS is part of the <a className="js-link" href="https://jsconf.com/">JSConf Family of Events</a> and adheres to the <a className="js-link" href="https://jsconf.com/codeofconduct.html">JSConf Code of Conduct.</a>
          </p>
        </article>
      </section>
    )}
  />
)
