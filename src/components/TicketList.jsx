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
        formattedWaitTime={ticket.formattedWaitTime}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection}
        key={ticket.id}
      />)
  )}
  return (
    <div>
      {tickets}
    </div>
  )
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
}

export default TicketList
