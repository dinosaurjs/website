import React from "react"

import { StaticQuery, graphql } from "gatsby"

import './sponsors.css'

const Sponsor = ({ name, logo, url }) => (
  <article className="sponsor">
    <a href={url}>
      <img src={logo} alt={name} />
    </a>
  </article>
)

export default () => (
  <StaticQuery
    query={graphql`
      query SponsorsQuery {
        allSponsorsJson {
          edges {
            node {
              name
              logo
              url
              premier
            }
          }
        }
      }
    `}
    render={data => {
      const sponsors = data.allSponsorsJson.edges.map(({ node }) => node);
      const premier = sponsors.filter(({ premier }) => premier);
      const regular = sponsors.filter(({ premier }) => !premier);

      return (
        <section className="sponsors" id="sponsors">
          <section className="premier-sponsors-panel">
            {premier.map(sponsor => <Sponsor {...sponsor} key={sponsor.url} />)}
          </section>
          <section className="sponsors-panel">
            {regular.map(sponsor => <Sponsor {...sponsor} key={sponsor.url} />)}
          </section>
        </section>
      )
    }}
  />
)
