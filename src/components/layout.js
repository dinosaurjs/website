import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Navigation from './navigation';
import Landing from './landing';
import Speakers from './speakers';
import Tickets from './tickets';
import Schedule from './schedule';
import Sponsors from './sponsors';
import Organizers from './organizers';

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
      }
    `}
    render={data => (
      <main>
        <Navigation />
        <Landing/>
        <Speakers />
        <Tickets/>
        <Sponsors/>
        <Organizers/>
        <Schedule />
      </main>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
