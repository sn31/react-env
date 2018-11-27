import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types'

function TicketList(props) {
  let tickets =[]
  {props.ticketList.map((ticket)=>
    tickets.push(
      <Ticket
        location={ticket.location}
        names={ticket.names}
        issue={ticket.issue}
        key={ticket.id}
        timeOpen={ticket.timeOpen}
      />)
  )}
  return (
    <div>
      {tickets}
    </div>
  )
}

TicketList.propTypes = {
  ticketList: PropTypes.array
}

export default TicketList
