import React from "react"
import "./workshop.css"

const Workshop = ({ workshop }) => {
  return (
    <article className="workshop">
      <h3 className="workshop-title">{workshop.title}</h3>
      <p className="workshop-instructor">{workshop.instructor}</p>
      <p className="workshop-description">{workshop.description}</p>
    </article>
  )
}

export default Workshop
