// REACT COMPONENTS
import React from 'react';
import { Form } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

// PROJECT COMPONENTS
import { FormPartsContainer } from '../FormPartsContainer';
import IntervalColumnHeadings from '../../components/Headings/IntervalColumnHeadings';
import { CashFlowInputsRow } from '../cashflow';
import messages from './messages';


// ========================================
// COMPONENTS
// ========================================
/* Move to program calculations
 * @todo Figure out which programs need to know which types of incomes
 * and categorize/tag them accordingly.
 * @todo Calc and store `client.currentUnearnedIncomeMonthly`? I think
 * we do still have to keep the other specific income soruces separate
 * as they're possibly used in other calculations.
 * @todo Stuff like interest of bank accounts? (unearned income?)
 * @todo Other assets (not counted in gross income? income categories?)
 * @todo Relevant? "State housing programs base eligibility on net yearly income.
 * Net yearly income does not include funds such as wages earned by full-time
 * students, worker's compensation, and a certain amount of wages earned by a
 * tenant 62 or older. It also allows you to deduct certain amounts, such as
 * necessary medical expenses and personal care services." (@see {@link
 * http://www.masslegalhelp.org/housing/financial-eligibility})
 */

/**
 * @todo Add note: "Household income (a before tax income, and does not include
 * funds such as income from children under 18 years old, amounts received
 * through training programs funded by HUD, and the income of a live-in aide)"
 * (@see {@link http://www.masslegalhelp.org/housing/financial-eligibility})
 */

/** Contents of income step. Abstract to allow entry of `future` values too.
 *
 * @function
 * @param {object} props
 * @property {object} props.current Client current info. Could be
 *     changed to just 'client' to allow future values in abstraction.
 * @property {string} props.time 'current' or 'future'. (needed?)
 * @property {function} props.updateClientValue Updates state upstream.
 *
 * @returns {object} React element
 */
const IncomeForm = function ({ current, time, updateClientValue }) {
  var type = 'income';

  /** Makes sure values are propagated to 'future' properties if needed
   * @member
   * @depricated
   */
  var ensureFuture = function (evnt, inputProps) {
    updateClientValue(evnt, { ...inputProps, fillFuture: true });
  };  // End ensureFuture()

  var sharedProps = {
    timeState:         current,
    time:              time,
    updateClientValue: ensureFuture,
  };

  return (
    <div className='field-aligner two-column'>

      <IntervalColumnHeadings
        type={ type }
        columnTitle={
          <FormattedMessage
            { ...messages.incomeColumnTitle } />
        } />

      {/* All kinds of things need to be explained. */}
      
      <CashFlowInputsRow
        { ...sharedProps }
        generic="earned">
        <FormattedMessage
          { ...messages.earnedIncome.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="TAFDC"> 
        <FormattedMessage
          { ...messages.TAFDC.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="SSI"> 
        <FormattedMessage
          { ...messages.SSI.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="SSDI">
        <FormattedMessage
          { ...messages.SSDI.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="childSupportIn">
        <FormattedMessage
          { ...messages.childSupport.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="unemployment"> 
        <FormattedMessage
          { ...messages.unemployment.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="workersComp"> 
        <FormattedMessage
          { ...messages.workersComp.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="pension">
        <FormattedMessage
          { ...messages.pension.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="socialSecurity">
        <FormattedMessage
          { ...messages.socialSecurity.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="alimony"> 
        <FormattedMessage
          { ...messages.alimony.label } />
      </CashFlowInputsRow>
      <CashFlowInputsRow
        { ...sharedProps }
        generic="otherIncome">
        <FormattedMessage
          { ...messages.otherIncome.label } />
      </CashFlowInputsRow>
      <Form.Field>
        <FormattedMessage
          { ...messages.explainSNAPCalculation } />
      </Form.Field>

    </div>
  );  // end return

};  // End IncomeForm()


/**
 * @function
 * @param {object} props
 * @property {function} props.updateClientValue Updates state upstream.
 * @property {object} props.navData Bottom row buttons. 
 * @property {object} props.client JSON object with `future` and `current` props.
 *
 * @returns {object} React element
 */
const CurrentIncomeStep = function ({ updateClientValue, navData, client }) {
// `props` is a cloned version of the original props. References broken.

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
      formClass = "income">
      <IncomeForm
        updateClientValue = { updateClientValue }
        current={ client.current }
        time="current" />
    </FormPartsContainer>
  );

};  // End CurrentIncomeStep()

export default CurrentIncomeStep;

export { IncomeForm };
