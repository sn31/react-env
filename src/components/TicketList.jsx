import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types'

function TicketList(props) {
  let tickets =[]
  {Object.keys(props.ticketList).map((ticketId)=>{
    var ticket = props.ticketList[ticketId];
    tickets.push(
      <Ticket
        location={ticket.location}
        names={ticket.names}
        issue={ticket.issue}
        formattedWaitTime={ticket.formattedWaitTime}
        currentRouterPath={props.currentRouterPath}
        onTicketSelection={props.onTicketSelection}
        key={ticketId}
        ticketId = {ticketId}
      />)
  })}

  return (
    <div>
      {tickets}
    </div>
  )
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
}

export default TicketList
