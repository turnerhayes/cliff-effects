// REACT COMPONENTS
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Radio,
  Checkbox,
  Header,
} from 'semantic-ui-react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';

// PROJECT COMPONENTS
import { FormPartsContainer } from '../FormPartsContainer';
import { AttentionArrow } from '../formHelpers';
import { CashFlowInputsRow } from '../cashflow';
import { ControlledRadioYesNo } from '../Inputs';
import { ContentH1 } from '../../components/headings';
import IntervalColumnHeadings from '../../components/Headings/IntervalColumnHeadings';
import {
  ContractRentField,
  RentShareField,
  PlainRentRow,
} from '../rentFields';
import { HeadingWithDetail } from '../../components/details';
// Premature feature temporarily hidden to avoid messy revert
// import { ExpensesOther } from './ExpensesOther';
import { ShowOnYes } from '../ShowOnYes';

// LOGIC
import {
  getEveryMember,
  isHeadOrSpouse,
  getDependentMembers,
  isDisabled,
  isUnder13,
} from '../../utils/getMembers';
import { getUnder13Expenses } from '../../utils/cashflow';

import messages from './messages';
import FormattedMarkdownMessage from '../../components/FormattedMarkdownMessage/FormattedMarkdownMessage';

const IntervalHeadings = () => {
  return (
    <IntervalColumnHeadings
      type="expense"
      columnTitle={
        <FormattedMessage
          { ...messages.columnHeaderTitle } />
      } />
  );
};

// ========================================
// COMPONENTS
// ========================================

/** Renders a yes/no choice that will reveal the cash
 *     flow component given when the user selects 'yes'.
 *
 *     We added this extra step between the user and
 *     the input because people kept skipping that question.
 *
 * @param {object} props
 * @param {bool} props.hasExpenses True if client has any
 *     expenses here that could affect their income.
 * @param {object} props.CashFlowRow To be rendered if user
 *     chooses 'yes'.
 * @param {string | object} props.label To be rendered as
 *     the yes/no question.
 * @param {object} props.propData Data for the prop changed
 *     by the given cash flow component. (move component in
 *     here?)
 * @param {string} props.propData.childPropName Name of cash
 *     flow client prop to be updated.
 * @param {object} props.propData client Current or future
 *     client data.
 *
 * @returns Value that React can render
 */
const EarnedFrom = function ({ hasExpenses, CashFlowRow, label, propData }) {

  /** @todo Save amount temporarily when 'source'
   *      amount is set to 0. */
  var reset = function (evnt) {
    var { childPropName, update } = propData;

    update(evnt, {
      name:  childPropName,
      value: 0,
    });
  };

  if (hasExpenses) {

    var { childPropName, client } = propData;
    var showProps = {
      childName:           childPropName,
      showChildrenAtStart: client[ childPropName ] > 0,
      question:            label,
      heading:             null,
      onNo:                reset,
      // `<Surrounder>` props
      Left:                <AttentionArrow />,
    };

    return (
      <div className="earned-from">
        <ShowOnYes { ...showProps }>
          { CashFlowRow }
        </ShowOnYes>
      </div>
    );

  } else {
    return null;
  }

};  // End EarnedFrom


const Utilities = function ({ current, type, time, updateClientValue }) {

  let hasClimate     = current.climateControl,
      hasElectricity = current.nonHeatElectricity,
      hasPhone       = current.phone,
      hasFuelAssist  = current.fuelAssistance;

  let setChecked = function (evnt, inputProps) {
    var obj = { ...inputProps, value: inputProps.checked };
    updateClientValue(evnt, obj);
  };  // End setChecked()

  // For keyboard access (already does spacebar)
  let onKeyDown = function (evnt) {
    if (evnt.key === `Enter`) {
      evnt.target.click();
    }
  };

  // May want to change name to 'utilities' and value to what's 'name' now
  // Will require more work in the change handler
  return (
    <div>
      <Header as="h4">
        <FormattedMessage
          { ...messages.housing.utilitiesSubheading } />
      </Header>

      <Checkbox
        name="climateControl"
        label={
          <label>
            <FormattedMessage
              { ...messages.housing.climateControl.label } />
          </label>
        }
        checked={ hasClimate }
        onChange={ setChecked }
        onKeyDown = { onKeyDown } />
      <br />
      <Checkbox
        name="nonHeatElectricity"
        label={
          <label>
            <FormattedMessage
              { ...messages.housing.nonHeatElectricity.label } />
          </label>
        }
        checked={ hasElectricity }
        onChange={ setChecked }
        onKeyDown = { onKeyDown } />
      <br />
      <Checkbox
        name="phone"
        label={
          <label>
            <FormattedMessage
              { ...messages.housing.phone.label } />
          </label>
        }
        checked={ hasPhone }
        onChange={ setChecked }
        onKeyDown = { onKeyDown } />
      <br />
      <br />
      <ControlledRadioYesNo
        labelText={
          <FormattedMessage
            { ...messages.housing.fuelAssistance.label } />
        }
        checked   = { hasFuelAssist }
        name      = "fuelAssistance"
        onChange  = { updateClientValue } />

    </div>

  );
};  // End Utilities(<>)


const HousingDetails = function ({ current, type, time, updateClientValue }) {

  let housing = current.housing,
      sharedProps = {
        timeState:         current,
        current:           current,
        type:              type,
        time:              time,
        updateClientValue: updateClientValue,
      };

  if (current.housing === 'voucher') {
    return (
      <div>
        <ContractRentField { ...sharedProps } />
        <RentShareField { ...sharedProps } />
        <Utilities { ...sharedProps } />
      </div>
    );

  } else if (housing === 'homeless') {
    return null;

  } else if (housing === 'renter') {
    return (
      <div>
        <br />
        <PlainRentRow { ...sharedProps } />
        <Utilities { ...sharedProps } />
      </div>
    );

  } else if (housing === 'homeowner') {
    return (
      <div>
        <IntervalHeadings />
        <CashFlowInputsRow
          { ...sharedProps }
          generic="mortgage">
          <FormattedMessage
            { ...messages.housing.expenseTypes.mortgage } />
        </CashFlowInputsRow>
        <CashFlowInputsRow
          { ...sharedProps }
          generic="housingInsurance">
          <FormattedMessage
            { ...messages.housing.expenseTypes.insuranceCosts } />
        </CashFlowInputsRow>
        <CashFlowInputsRow
          { ...sharedProps }
          generic="propertyTax">
          <FormattedMessage
            { ...messages.housing.expenseTypes.propertyTax } />
        </CashFlowInputsRow>
        <Utilities { ...sharedProps } />
      </div>
    );

  }  // end which expenses
};  // End HousingDetails(<>)


const HousingRadio = function ({ currentValue, value, label, updateClientValue }) {
  return (
    <Form.Field>
      <Radio
        name="housing"
        label={
          <label>
            {label}
          </label>
        }
        value={ value }
        checked={ currentValue === value }
        onChange = { updateClientValue } />
    </Form.Field>
  );

};  // End HousingRadio(<>)


/**
 * @function
 * @param {object} props
 * @param {object} props.current Client data of current user circumstances
 * @param {string} props.type 'expense' or 'income', etc., for classes
 * @param {string} props.time 'current' or 'future'
 * @param {function} props.updateClientValue Sets state values
 *
 * @returns React element
 */
const Housing = function ({ current, type, time, updateClientValue }) {

  /** @deprecated This is handled differently now */
  let ensureRouteAndValue = function (evnt, inputProps) {
    var obj = { ...inputProps, name: inputProps.name, value: inputProps.value, checked: null };
    updateClientValue(evnt, obj);
  };

  let sharedProps = {
    current:           current,
    type:              type,
    time:              time,
    updateClientValue: ensureRouteAndValue,
  };

  return (
    <div>

      <ContentH1>
        <FormattedMessage
          { ...messages.housing.sectionTitle } />
      </ContentH1>

      { current.housing === 'voucher' ? (
        null
      ) : (
        <div>
          <Header as='h4'>
            <FormattedMessage
              { ...messages.housing.clarifier } />
          </Header>
          <HousingRadio
            currentValue={ current.housing }
            value="homeless"
            label={
              <FormattedMessage
                { ...messages.housing.situations.homeless } />
            }
            time={ time }
            updateClientValue = { ensureRouteAndValue } />
          <HousingRadio
            currentValue={ current.housing }
            value="renter"
            label={
              <FormattedMessage
                { ...messages.housing.situations.renter } />
            }
            time={ time }
            updateClientValue = { ensureRouteAndValue } />
          <HousingRadio
            currentValue={ current.housing }
            value="homeowner"
            label={
              <FormattedMessage
                { ...messages.housing.situations.homeowner } />
            }
            time={ time }
            updateClientValue = { ensureRouteAndValue } />
        </div>
      ) }

      <HousingDetails { ...sharedProps } />

    </div>
  );

};  // End Housing()


/** Abstracted for future use in 'future' value setting as well.
 * @function
 * @param {object} props
 * @param {object} props.current Client data of current user circumstances
 * @param {string} props.time 'current' or 'future'
 * @param {function} props.updateClientValue Sets state values
 * @param {object} props.intl Internationalization object from react-intl
 *
 * @returns React element
 */
let ExpensesFormContent = function ({ current, time, updateClientValue, intl }) {

  const type = 'expense';
  const household = current.household;
  const sharedProps = {
    timeState:         current,
    type:              type,
    time:              time,
    updateClientValue: updateClientValue,
  };

  /* @todo Make a more general age-checking function to keep
   * household data format under control in one place. */
  var isOver12 = function (member) {
    return !isUnder13(member);
  };

  // Won't include head or spouse
  var allDependents = getDependentMembers(household),
      under13       = getEveryMember(allDependents, isUnder13),
      over12        = getEveryMember(allDependents, isOver12);

  // 'Elderly' here is using the lowest common denominator - SNAP standards.
  var isElderlyOrDisabled = function (member) {
    return isDisabled(member) || member.m_age >= 60;
  };
  var elderlyOrDisabled = getEveryMember(household, isElderlyOrDisabled),
      elderlyOrDisabledHeadOrSpouse = getEveryMember(elderlyOrDisabled, isHeadOrSpouse);

  return (
    <div className='field-aligner two-column'>

      { under13.length > 0 ? (
        <div>
          <ContentH1
            subheading={
              <FormattedMessage
                { ...messages.unreimbursedNonMedicalChildCare.subheading } />
            } >
            <FormattedMessage
              { ...messages.unreimbursedNonMedicalChildCare.sectionHeading } />
          </ContentH1>
          <IntervalHeadings />
          <CashFlowInputsRow
            { ...sharedProps }
            generic="childDirectCare">
            <FormattedMessage
              { ...messages.unreimbursedNonMedicalChildCare.childDirectCare.label } />
          </CashFlowInputsRow>
          <CashFlowInputsRow
            { ...sharedProps }
            generic="childBeforeAndAfterSchoolCare">
            <FormattedMessage
              { ...messages.unreimbursedNonMedicalChildCare.childBeforeAndAfterSchoolCare.label } />
          </CashFlowInputsRow>
          <CashFlowInputsRow
            { ...sharedProps }
            generic="childTransportation">
            <FormattedMessage
              { ...messages.unreimbursedNonMedicalChildCare.childTransportation.label } />
          </CashFlowInputsRow>
          <CashFlowInputsRow
            { ...sharedProps }
            generic="childOtherCare">
            <FormattedMessage
              { ...messages.unreimbursedNonMedicalChildCare.childOtherCare.label } />
          </CashFlowInputsRow>

          <EarnedFrom
            hasExpenses = { getUnder13Expenses(current) !== 0 }
            label={
              <FormattedMessage
                { ...messages.unreimbursedNonMedicalChildCare.wouldNoChildCareChangeIncome } />
            }
            propData = {{
              client:        current,
              childPropName: `earnedBecauseOfChildCare`,
              update:        updateClientValue,
            }}
            CashFlowRow = {
              <CashFlowInputsRow
                { ...sharedProps }
                generic="earnedBecauseOfChildCare">
                <FormattedMessage
                  { ...messages.unreimbursedNonMedicalChildCare.noChildCareIncomeChange } />
              </CashFlowInputsRow>
            } />

        </div>
      ) : (
        null
      ) }

      { current.hasSnap ? (
        <div>
          <ContentH1>
            <FormattedMessage
              { ...messages.childSupport.sectionHeading } />
          </ContentH1>
          <IntervalHeadings />
          <CashFlowInputsRow
            { ...sharedProps }
            generic="childSupportPaidOut">
            {/* {
              formatText(
                {
                  text: intl.formatMessage(
                    { ...messages.childSupport.childSupportPaidOut },
                  ),
                }
              )
            } */}
            <FormattedMarkdownMessage
              { ...messages.childSupport.childSupportPaidOut } />
          </CashFlowInputsRow>
        </div>
      ) : (
        null
      ) }

      {/* Head or spouse can't be a dependent, so they don't count. */}
      { over12.length > 0 ? (
        <div>
          <ContentH1
            subheading={
              <FormattedMessage
                { ...messages.dependentCare.subheading } />
            }>
            <FormattedMessage
              { ...messages.dependentCare.sectionHeading } />
          </ContentH1>
          <IntervalHeadings />
          <CashFlowInputsRow
            { ...sharedProps }
            generic="adultDirectCare">
            <FormattedMessage
              { ...messages.dependentCare.directCareCosts } />
          </CashFlowInputsRow>
          <CashFlowInputsRow
            { ...sharedProps }
            generic="adultTransportation">
            <FormattedMessage
              { ...messages.dependentCare.transportationCosts } />
          </CashFlowInputsRow>
          <CashFlowInputsRow
            { ...sharedProps }
            generic="adultOtherCare">
            <FormattedMessage
              { ...messages.dependentCare.otherCare } />
          </CashFlowInputsRow>
        </div>
      ) : (
        null
      ) }

      { elderlyOrDisabled.length > 0 ? (
        <div>
          <HeadingWithDetail>
            <ContentH1>
              <FormattedMessage
                { ...messages.elderlyDisabled.sectionHeading } />
            </ContentH1>
            <div>
              <FormattedMarkdownMessage
                { ...messages.elderlyDisabled.moreInformation } />
            </div>
          </HeadingWithDetail>
          <IntervalHeadings />
          <CashFlowInputsRow
            { ...sharedProps }
            generic="disabledAssistance">
            <FormattedMessage
              { ...messages.elderlyDisabled.disabledAssistance } />
          </CashFlowInputsRow>

          <EarnedFrom
            hasExpenses = { current.disabledAssistance !== 0 }
            label={
              <FormattedMessage
                { ...messages.elderlyDisabled.wouldNoAssistanceChangeIncome } />
            }
            propData = {{
              client:        current,
              childPropName: 'earnedBecauseOfAdultCare',
              update:        updateClientValue,
            }}
            CashFlowRow = {
              <CashFlowInputsRow
                { ...sharedProps }
                generic="earnedBecauseOfAdultCare">
                <FormattedMessage
                  { ...messages.elderlyDisabled.noAssistanceIncomeChange } />
              </CashFlowInputsRow>
            } />

        </div>
      ) : (
        null
      ) }

      {/* This comment may or may not belong here. Deeper discussion needed:
        * These medical expenses count for Section 8 too if the disabled
        *     person is the head or spouse. From Appendix B, item (D)
        *     {@link http://www.tacinc.org/media/58886/S8MS%20Full%20Book.pdf} */}
      { elderlyOrDisabledHeadOrSpouse.length > 0 || (current.hasSnap && elderlyOrDisabled.length > 0) ? (
        <div>
          <HeadingWithDetail>
            <ContentH1>
              <FormattedMessage
                { ...messages.elderlyDisabled.unreimbursedMedicalExpenses.sectionHeading } />
            </ContentH1>
            <div>
              <FormattedMarkdownMessage
                { ...messages.elderlyDisabled.unreimbursedMedicalExpenses.moreInformation } />
            </div>
          </HeadingWithDetail>
          <IntervalHeadings />
          <CashFlowInputsRow
            { ...sharedProps }
            generic="disabledMedical">
            <FormattedMessage
              { ...messages.elderlyDisabled.unreimbursedMedicalExpenses.disabledMedical } />
          </CashFlowInputsRow>
          <CashFlowInputsRow
            { ...sharedProps }
            generic="otherMedical">
            <FormattedMessage
              { ...messages.elderlyDisabled.unreimbursedMedicalExpenses.otherMemberExpenses } />
          </CashFlowInputsRow>
        </div>
      ) : (
        null
      ) }

      <Housing
        current={ current }
        time={ time }
        type={ type }
        updateClientValue = { updateClientValue } />

      {/* Premature feature temporarily hidden to avoid messy revert
        <ShowOnYes
          clientPartial = { current }
          propName = { `wantsToSeeOtherExpenses` }
          updateClientValue = { updateClientValue }
          question = { `Do you want to enter your other expenses so you can see if you need to make a different plan?` }
          heading = { `Other Expenses` }>
          <ExpensesOther { ...sharedProps } />
        </ShowOnYes>
      */}
    </div>
  );

};  // End ExpensesFormContent()

ExpensesFormContent.propTypes = {
  intl:    intlShape.isRequired,
  current: PropTypes.object.isRequired,
  time:    PropTypes.oneOf([
    'current',
    'future',
  ]).isRequired,
  updateClientValue: PropTypes.func.isRequired,
};

ExpensesFormContent = injectIntl(ExpensesFormContent);

/* Move these to SNAP calc logic scripts:
 * @todo SNAP: Does a medical assistant's payments count as a medical expense?
 *     (Answer: Yes. @see {@link https://www.mass.gov/service-details/snap-verifications})
 * @todo SNAP: Medical expense only matters if household has elder/disabled, but
 *     are they any medical expenses or only those of the disabled person? "Medical
 *     Expenses for Disabled or Elderly". Also, do they sometimes need to
 *     enter medical expenses even if they don't have an elderly or disabled
 *     household member?
 */

// `props` is a cloned version of the original props. References broken.
/**
  * @function
  * @param {object} props
  * @param {function} props.updateClientValue Setting client state
  * @param {object} props.navData Buttons for bottom row
  * @param {object} props.client Data for calculating benefits, `future` and `current`
  *
  * @returns React element
  */
const CurrentExpensesStep = function ({ updateClientValue, navData, client }) {

  return (
    <FormPartsContainer
      title={
        <FormattedMessage
          { ...messages.title } />
      }
      // clarifier={
      //   <FormattedMessage
      //     { ...messages.clarifier} />
      // }
      navData   = { navData }
      formClass="expenses">
      <ExpensesFormContent
        updateClientValue = { updateClientValue }
        current={ client.current }
        time="current" />
    </FormPartsContainer>
  );

};  // End CurrentExpensesStep()


export default CurrentExpensesStep;
