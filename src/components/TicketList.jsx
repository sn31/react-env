import React from 'react'
import Ticket from './Ticket'

function TicketList() {
  const TicketData = {
    locations: ['A1','C3','B4'],
    names: ['Skye','Meria','Ryan'],
    issues: ['Stuff is not working','bla','woooah']
  }
  let tickets = []
  for(let i =0;i<TicketData.locations.length;i++)
  {
    tickets.push(
      <Ticket
        location={TicketData.locations[i]}
        names={TicketData.names[i]}
        issue={TicketData.issues[i]}
      />)
  }
  return (
    <div>
      {tickets}
    </div>
  )
}

export default TicketList
