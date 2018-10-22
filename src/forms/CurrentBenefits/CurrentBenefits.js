// REACT COMPONENTS
import React from 'react';
import { FormattedMessage } from 'react-intl';

// PROJECT COMPONENTS
import { FormPartsContainer } from '../FormPartsContainer';
import { ControlledRadioYesNo } from '../Inputs';
import messages from './messages';


/** Asks which benefits the user is currently receiving
 *
 * @todo Add 'vertical list of options' creator that will create a list of fields using the `.field-aligner` class
 *
 * @function
 * @param {object} props
 * @property {object} props.current Client current info.
 * @property {function} props.updateClientValue Updates state upstream.
 *
 * @returns {object} Component
 */
const CurrentBenefitsContent = ({ current, updateClientValue }) => {
  return (
    <div >
      <ControlledRadioYesNo
        onChange={ updateClientValue }
        labelText={
          <FormattedMessage
            { ...messages.hasSection8Label } />
        }
        checked = { current.hasSection8 }
        name    = "hasSection8" />
      <div className="question-spacer" />
      <ControlledRadioYesNo
        onChange={ updateClientValue }
        labelText={
          <FormattedMessage
            { ...messages.hasSNAPLabel } />
        }
        checked = { current.hasSnap }
        name    = "hasSnap" />
    </div>
  );  // end return

};  // End CurrentBenefitsContent()

/**
 * @todo Combine with related components?
 *
 * @function
 * @param {object} props
 * @property {function} props.updateClientValue Updates state upstream.
 * @property {object} props.navData Bottom row buttons
 * @property {object} props.client JSON object with future and current values.
 *
 * @returns {object} Component
 */
const CurrentBenefitsStep = ({ updateClientValue, navData, client }) => {
  return (
    <FormPartsContainer
      title     = {
        <FormattedMessage
          { ...messages.title } />
      }
      clarifier = {
        <FormattedMessage
          { ...messages.clarifier } />
      }
      navData   = { navData }
      formClass = "benefits"
      formSize  = "massive">
      <CurrentBenefitsContent
        updateClientValue = { updateClientValue }
        current      = { client.current } />
    </FormPartsContainer>
  );

};  // End CurrentBenefitsStep()

export default CurrentBenefitsStep;
