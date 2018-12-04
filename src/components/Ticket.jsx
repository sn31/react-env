import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import {connect} from 'react-redux';

function Ticket(props) {
  function handleSavingSelectedTicket(ticketId){
    const {dispatch} = props;
    const action ={
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }
  const ticketInfo = (
    <div>
      <style jsx>{`
        div {
          background-color: papayawhip;
          border: 2px solid pink;
          margin: 1em;
          margin-right: 30em;
        }
      `}</style>
      <h3>
        {props.location} - {props.names}
      </h3>
      <h4>{props.formattedWaitTime} ago</h4>
    </div>
  );
  if (props.currentRouterPath === "/admin") {
    return (
      <div
        onClick={() => {
          handleSavingSelectedTicket(props.ticketId);
        }}
      >
        {ticketInfo}
      </div>
    );
  } else {
    return <div>{ticketInfo}</div>;
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired
};
export default connect()(Ticket);
