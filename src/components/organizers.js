import React from "react"
import Organizer from "./organizer"

import "./organizer.css"

import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query OrganizerQuery {
        allOrganizersJson {
          edges {
            node {
              name
              title
              picture
              twitter
            }
          }
        }
      }
    `}
    render={data => (
      <div className="organizer-panel panel" id="organizers">
        <header className="panel-header">
          <h2>Organizers</h2>
        </header>
        <div className="organizers">
          {data.allOrganizersJson.edges.map(({ node: organizer }) => (
            <Organizer organizer={organizer} key={organizer.twitter} />
          ))}
        </div>
      </div>
    )}
  />
)