import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        dinosaur: file(relativePath: { eq: "dinosaur.jpg" }) {
          childImageSharp {
            fixed(width: 640) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      <main>
        <Img
          fixed={data.dinosaur.childImageSharp.fixed}
          alt="DinosaurJS is on hold until 2021."
        />
        <section>
          <h1><strong>DinosaurJS</strong> is staying home this year.</h1>
          <p>In light of everything that is going on in the world right now. We're going to do the safe thing and take this year off. We'll miss you all very, very much and we can't wait to see you next year!</p>
        </section>
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
