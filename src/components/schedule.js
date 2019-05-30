import React from 'react';

import { StaticQuery, graphql } from "gatsby"

import './schedule.css'

const Event = ({ time, title, speaker, description, twitter }) => (
  <article className="event">
    <p className="schedule-text time">{time}</p>
    <p className="schedule-text title">{title}</p>
    <p className="schedule-text speaker">{speaker}</p>
    <p className="schedule-text description">{description}</p>
    <p className="schedule-text twitter">{twitter}</p>
  </article>
)

export default () => (
  <StaticQuery
    query={graphql`
      query ScheduleQuery {
        allScheduleJson {
          edges {
            node {
              time
              title
              speaker
              description
              twitter
            }
          }
        }
      }
    `}
    render={data => {
      const events = data.allScheduleJson.edges.map(({ node }) => node);

      return (
        <section className="schedule-panel panel" id="schedule">
          <header className="panel-header">
            <h2>Schedule</h2>
          </header>
          {events.map(event => <Event {...event} key={event.time} />)}
        </section>
      )
    }}
  />
)
