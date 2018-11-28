import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Form, FormGroup,Col,ControlLabel,FormControl } from "react-bootstrap";
import Moment from 'moment';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    });
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div id="container">
      <Form onSubmit={handleNewTicketFormSubmission}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Names
          </Col>
          <Col sm={10}>
            <FormControl componentClass="input" type="text" id="names" placeholder="Pair Names" inputRef={input => {
            _names = input;
          }}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Location
          </Col>
          <Col sm={10}>
            <FormControl componentClass="input" type="text" id="location" placeholder="Location" inputRef={input => {
            _location= input;
          }}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Issue
          </Col>
          <Col sm={10}>
            <FormControl componentClass="textarea" type="text" id="issue" placeholder="Issue" inputRef={textarea => {
            _issue = textarea;
          }}/>
          </Col>
        </FormGroup>
        
        <button id="submitBtn" className="btn btn-success" bsSize="large" type="submit">
          Help!
        </button>
      </Form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};
export default NewTicketForm;
