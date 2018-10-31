import React from 'react';
import {
  Form,
  Radio,
  Modal,
  Button,
  Message,
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import FormattedMarkdownMessage from '../../FormattedMarkdownMessage/FormattedMarkdownMessage';

// URL to direct requests to, from the Google Apps Script
const postUrl = 'https://script.google.com/macros/s/AKfycbyXYbemTPcqsdbmXITnjaNi-CkN85g5kKPrgzt4AS8ykT2jH6Zn/exec';


/**
 * Modal that asks for permission to store user data for debugging purposes
 */
class AskPermission extends React.Component {
  state = {
    submitType: null,
    submitting: false,
  };

  close = () => {
    this.setState({ submitFunc: null });
    this.props.closeAskPermission();
  };

  submit = (evnt) => {
    this.props.submit(evnt, this.state.submitType);
  };

  setSubmitType = (evnt, inputProps) => {
    this.setState({ submitType: inputProps.value });
  };

  // Return an array to take advantage of `Modal` styling
  render () {return ([
    <Modal.Content key = { `ask-permission-content` }>
      <p>{ this.props.question }</p>

      <Form.Field>
        <Radio
          name     = { `data-ask` }
          value    = { `withData` }
          label    = {
            <label>
              <FormattedMessage
                { ...messages.yes } />
            </label>
          }
          checked  = { this.state.submitType === `withData` }
          onChange = { this.setSubmitType } />
      </Form.Field>
      <Form.Field>
        <Radio
          name     = { `data-ask` }
          value    = { `withoutData` }
          label    = {
            <label>
              <FormattedMessage
                { ...messages.no } />
            </label>
          }
          checked  = { this.state.submitType === `withoutData` }
          onChange = { this.setSubmitType } />
      </Form.Field>
    </Modal.Content>,
    <Modal.Actions key = { `ask-permission-actions` }>
      <Button
        onClick  ={ this.close }
        disabled ={ this.props.submitting }>
        <FormattedMessage
          { ...messages.cancel } />
      </Button>
      <Button
        onClick  = { this.submit }
        loading  = { this.props.submitting }
        disabled = { this.state.submitType === null }
        color    ='teal'>
        { (this.state.submitType === `withData`) ? (
          <FormattedMessage
            { ...messages.sendWithMyInformation } />
        ) : (
          null
        ) }
        { (this.state.submitType === `withoutData`) ? (
          <FormattedMessage
            { ...messages.sendWithoutMyInformation } />
        ) : (
          null
        ) }
        {
          (this.state.submitType === null) ? (
            <FormattedMessage
              { ...messages.send } />
          ) : (null)
        }
      </Button>
    </Modal.Actions>,
  ]);}
}


/**
 * Modal that shows the feedback form.
 */
class FeedbackPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData:         {},
      ready:            false,
      submitting:       false,
      submissionFailed: false,
    };
  }

  handleInputChange = (event) => {
    // Source: https://reactjs.org/docs/forms.html#controlled-components
    const target = event.target;
    const name = target.name;
    let value;
    if (target.type === 'checkbox') {
      value = target.checked;
    } else {
      value = target.value;
    }

    this.setState({ formData: Object.assign({}, this.state.formData, { [ name ]: value }) });
  };

  // returns promise that succeeds if submission is successful, else rejects.
  sendDataToSpreadsheet(data) {
    const fetchOptions = {
      method: 'POST',
      body:   JSON.stringify(data),
    };
    return fetch(postUrl, fetchOptions)
      .then((response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      });
  }

  close = (event) => {
    // Reset state for next time it's opened
    this.setState({
      formData:         {},
      ready:            false,
      submitting:       false,
      submissionFailed: false,
    });
    this.props.close();
  };

  onReady = () => {
    this.setState({ ready: true });
  };

  closeAskPermission = () => {
    this.setState({ ready: false });
  };

  submit = (evnt, type) => {
    this.setState({ submitting: true });

    let data = this.state.formData;
    if (type === `withData`) {
      data = Object.assign({ clientData: this.props.data }, this.state.formData);
    }

    this.sendDataToSpreadsheet(data)
      .then((response) => {
        this.close();
      })
      .catch((error) => {
        this.setState({ submissionFailed: true, submitting: false });
        console.error(error.message);
      });
  };

  render () {
    const inputProps = (name) => {
      return {
        name,
        value:    this.state.formData[ name ] || '',
        onChange: this.handleInputChange,
      };
    };

    // Without the #root selector, we can't get the accessibility
    // focus styles to win 
    return (
      <Modal
        mountNode = { document.getElementById(`App`) }
        size="large"
        open={ this.props.isOpen }
        onClose={ this.close }
        closeOnDimmerClick={ false }
        closeOnEscape={ false }
        closeIcon>
        <Modal.Header>
          <FormattedMessage
            { ...messages.header } />
        </Modal.Header>
        <Modal.Content scrolling>
          <Form>
            <Form.Input
              autoFocus
              { ...inputProps('currentSnap') }
              label={
                <FormattedMarkdownMessage
                  { ...messages.labels.currentSNAPCorrection } />
              } />
            <Form.Input
              { ...inputProps('futureSnap') }
              label={
                <FormattedMarkdownMessage
                  { ...messages.labels.futureSNAPCorrection } />
              } />
            <Form.Input
              { ...inputProps('futureS8') }
              label={
                <FormattedMarkdownMessage
                  { ...messages.labels.futureSection8Correction } />
              } />
            <Form.TextArea
              { ...inputProps('otherCircumstances') }
              label={
                <FormattedMessage
                  { ...messages.labels.otherCircumstances } />
              } />
            <Form.TextArea
              { ...inputProps('bugReport') }
              label={
                <FormattedMessage
                  { ...messages.labels.bugReport } />
              } />
            <Form.TextArea
              { ...inputProps('comments') }
              label={
                <FormattedMessage
                  { ...messages.labels.otherComments } />
              } />
          </Form>
          <Message
            hidden={ !this.state.submissionFailed }
            error>
            <FormattedMessage
              { ...messages.errorMessage }
              values={{
                emailLink: (
                  <a href="mailto:andrew@codeforboston.org">
                    <FormattedMessage
                      { ...messages.emailLinkText } />
                  </a>
                ),
              }} />
          </Message>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={ this.close }
            disabled={ this.state.submitting }>
            <FormattedMessage
              { ...messages.cancel } />
          </Button>
          <Button
            onClick={ this.onReady }
            color='teal'>
            <FormattedMessage
              { ...messages.ready } />
          </Button>
        </Modal.Actions>

        <Modal
          mountNode = { document.getElementById(`App`) }
          size               = "large"
          open               = { this.state.ready }
          onClose            = { this.closeAskPermission }
          closeOnDimmerClick = { false }
          closeOnEscape      = { false }
          closeIcon>
          <AskPermission
            submitting         = { this.state.submitting }
            closeAskPermission = { this.closeAskPermission }
            submit             = { this.submit }
            question           = {
              <FormattedMessage
                { ...messages.askPermission } />
            } />
        </Modal>
      </Modal>
    );
  }
};


export default FeedbackPrompt;
