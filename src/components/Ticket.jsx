import React from 'react'
import PropTypes from 'prop-types'

function Ticket(props) {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: papayawhip;
          border: 2px solid pink;
          margin: 1em;
          margin-right: 30em;
        }

      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p>
        <em>{props.issue}</em>
      </p>
    </div>
  )
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}
export default Ticket
