import React from 'react'
import Ticket from './Ticket'

function TicketList() {
  var masterTicketList = [
    {
      names: 'Thato and Haley',
      location: '3A',
      issue: 'Firebase won\'t save record. Halp.'
    },
    {
      names: 'Sleater and Kinney',
      location: '4B',
      issue: 'Fox image not displaying on page, can only see duck?'
    },
    {
      names: 'Imani & Jacob',
      location: '9F',
      issue: 'Donkey picture not displaying on hover in Zoology app. :('
    }
  ]
  let tickets =[]
  {masterTicketList.map((ticket,index)=>
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

export default TicketList
