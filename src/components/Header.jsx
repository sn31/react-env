import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <style jsx>{`
      div {
        margin-left: 1em;
      }
      `}</style>
    </div>
  )
}

export default Header
