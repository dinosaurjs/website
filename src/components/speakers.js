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
      <div className="speaker-panel panel" id="speakers">
        <header className="panel-header">
          <h2>Speakers</h2>
        </header>
        <div className="speakers">
          {data.allSpeakersJson.edges.map(({ node: speaker }) => (
            <Speaker speaker={speaker} key={speaker.twitter} />
          ))}
        </div>
      </div>
    )}
  />
)