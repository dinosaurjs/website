import React from "react"
import Workshop from "./workshop"

import "./workshops.css"

import { StaticQuery, graphql } from "gatsby"

const Workshops = () => (
  <StaticQuery
    query={graphql`
      query WorkshopQuery {
        allWorkshopsJson {
          edges {
            node {
              title
              instructor
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="workshop-panel panel" id="workshops">
        <header className="panel-header">
          <h2>Workshops</h2>
        </header>
        <p className="workshops-description">On the second day, we'll have a series of free workshops for all attendees. Each workshop will be three hours long and held twice: once in the morning and again in the afternoon.</p>
        <div className="workshops">
          {data.allWorkshopsJson.edges.map(({ node: workshop }) => (
            <Workshop workshop={workshop} key={workshop.title} />
          ))}
        </div>
      </div>
    )}
  />
)

export default Workshops;
