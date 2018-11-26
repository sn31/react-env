import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types';

function TicketList(props) {
  let tickets =[]
  {props.ticketList.map((ticket,index)=>
    tickets.push(
      <Ticket
        location={ticket.location}
        names={ticket.names}
        issue={ticket.issue}
        key={index}
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
};

export default TicketList
