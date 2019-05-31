import React from 'react';

import { StaticQuery, graphql } from "gatsby"

import './schedule.css'

const Event = ({ time, title, speaker, description, twitter }) => (
  <React.Fragment>
  <article className="schedules">
    <div className="time">{time}</div>
    <div className="title">{title}</div>
    </article>

  <article className="details">
    <div className="schedule-speaker">{speaker}</div>
    <div className="description">
      {description}
    </div>
    <div className="spacer"></div>
  </article>
  </React.Fragment>
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
