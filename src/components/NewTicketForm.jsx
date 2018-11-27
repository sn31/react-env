import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { Button, Form, FormGroup,Col,ControlLabel,FormControl } from "react-bootstrap";
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
      id: v4(),
      timeOpen: new Moment()
    });
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
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
            <FormControl componentClass="textarea" type="text" id="issue" placeholder="Issue" ref={textarea => {
            _issue = textarea;
          }}/>
          </Col>
        </FormGroup>
        
        <Button bsStyle="primary" bsSize="medium" type="submit">
          Help!
        </Button>
      </Form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};
export default NewTicketForm;
