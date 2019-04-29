import React from "react"
import Speaker from "./speaker"

import "./speakers.css"

import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query SpeakerQuery {
        allSpeakersJson {
          edges {
            node {
              name
              title
              picture
              abstract
              twitter
            }
          }
        }
      }
    `}
    render={data => (
      <div className="speaker-panel" id="speakers">
        <header>Speakers</header>
        <div className="speakers">
          {data.allSpeakersJson.edges.map(({ node: speaker }) => (
            <Speaker speaker={speaker} key={speaker.twitter} />
          ))}
        </div>
      </div>
    )}
  />
)
