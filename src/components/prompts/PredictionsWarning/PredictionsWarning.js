import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Form,
  Modal,
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

/**
 * Displays a model that requires the user to accept the terms and conditions before using the app
 * @extends React.Component
 * @param {boolean} termsAccepted - boolean indicating whether terms and conditions have been accepted by the user
 * @param {function} toggleAcceptTerms - function to set the termsAccepted in app state
 */
class TermsAndConditions extends Component {
  state = { 
    checkbox1: false,
    checkbox2: false,
  };

  handleChange = (checkboxField) => {
    let checked = !this.state[ checkboxField ];
    this.setState({ [ checkboxField ]: checked });
  };

  allowContinue = () => {
    return (
      this.state.checkbox1 === true && 
      this.state.checkbox2 === true
    ) ? true : false;
  };

  closeModal = (accept) => {
    if (accept) {
      this.props.toggleAcceptTerms();
    } else {
      this.props.history.push('/');
    }
  };

  handleCheckbox1Change = () => {
    this.handleChange('checkbox1');
  };

  handleCheckbox2Change = () => {
    this.handleChange('checkbox2');
  };

  handleCancelButtonClick = () => {
    this.closeModal(false);
  };

  handleAcceptButtonClick = () => {
    this.closeModal(true);
  };

  render() {
  
    const { termsAccepted } = this.props;

    return (
      <Modal
        id={ `WarningModal` }
        mountNode = { document.getElementById('App') }
        size='large'
        open={ !termsAccepted }
        closeOnDimmerClick={ false }
        closeOnEscape={ false }>
        <Modal.Header>
          <FormattedMessage
            { ...messages.header } />
        </Modal.Header>
        <Modal.Content scrolling>

          <FormattedMessage
            { ...messages.warning } />

          <h4>
            <FormattedMessage
              { ...messages.formInstructions } />
          </h4>

          <div
            className="radio-yes-no"
            key="ReqCkBx1">
            <Form.Field>
              <Checkbox
                checked = { this.state.Checkbox1 }
                name    = "checkbox1"
                onClick = { this.handleCheckbox1Change } />
            </Form.Field>
            <Form.Field>
              <FormattedMessage
                { ...messages.checkboxLabel1 } />
            </Form.Field>
          </div>

          <div
            className="radio-yes-no"
            key="ReqCkBx2">
            <Form.Field>
              <Checkbox
                checked = { this.state.Checkbox2 }
                name    = "checkbox2"
                onClick = { this.handleCheckbox2Change } />
            </Form.Field>
            <Form.Field>
              <FormattedMessage
                { ...messages.checkboxLabel2 } />
            </Form.Field>
          </div>
         
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={ this.handleCancelButtonClick }>
            <FormattedMessage
              { ...messages.buttonCancel } />
          </Button>
          <Button
            disabled={ !this.allowContinue() }
            onClick={ this.handleAcceptButtonClick }
            color="teal">
            <FormattedMessage
              { ...messages.buttonAcceptWarning } />
          </Button>
        </Modal.Actions>
      </Modal>
    ); // End return()
  } // End render()
};

TermsAndConditions.propTypes = { termsAccepted: PropTypes.bool.isRequired };

TermsAndConditions.defaultProps = { termsAccepted: false };

export default withRouter(TermsAndConditions);
