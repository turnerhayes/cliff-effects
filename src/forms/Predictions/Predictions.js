import React from 'react';
import { Divider, Header, Tab, Message, Button, Menu } from 'semantic-ui-react';

// PROJECT COMPONENTS
import { FormPartsContainer } from '../FormPartsContainer';
import IntervalColumnHeadings from '../../components/Headings/IntervalColumnHeadings';
import { CashFlowInputsRow } from '../cashflow';
import { GraphHolder } from '../output/GraphHolder';
import { Summary } from '../output/Summary';
import BenefitsTable from '../output/BenefitsTable';
import { StackedBarGraph } from '../output/StackedBarGraph';
import { StackedAreaGraph } from '../output/StackedAreaGraph';
import { BenefitsLineGraph } from '../output/BenefitsLineGraph';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

// ========================================
// COMPONENTS
// ========================================
/** @todo Cash flow row for trying out different future incomes.
 *
 * As per Project Hope's input, for the first prototype
 *     we're only including the ability to change earned income.
 *
 * @function
 * @param {object} props
 * @param {object} props.future Client future/predictive data.
 * @param {string} props.time Used in class names. Meant to make
 *     this more easily decoupled in future.
 * @param {function} props.updateClientValue Update client state
 *     value.
 *
 * @returns {object} React element
 */
const IncomeForm = function ({ future, time, updateClientValue }) {
  var type = 'income';

  return (
    <div className="field-aligner two-column">
      <IntervalColumnHeadings
        type={ type }
        columnTitle={
          <FormattedMessage
            { ...messages.columnHeaderTitle } />
        } />
      <CashFlowInputsRow
        timeState={ future }
        type={ type }
        time={ time }
        updateClientValue = { updateClientValue }
        generic="earned"
        labelInfo='(Weekly income = hourly wage times average number of work hours per week)'>
        <FormattedMessage
          { ...messages.futureIncomeQuestion } />
      </CashFlowInputsRow>
    </div>
  );
};  // End IncomeForm() Component


const TabbedVisualizations = ({ client, openFeedback }) => {
  return (
    <Tab
      menu={{ color: 'teal',  attached: true, tabular: true }}
      panes={ [
        {
          menuItem: (
            <Menu.Item
              key="tab0"
              as  = { Button }>
              <FormattedMessage
                { ...messages.summaryTitle } />
            </Menu.Item>
          ),
          render: () => {return (
            <Tab.Pane><Summary
              client       = { client }
              openFeedback = { openFeedback } />
            </Tab.Pane>
          );}, 
        },
        { 
          menuItem: (
            <Menu.Item
              key="tab1"
              as  = { Button }>
              <FormattedMessage
                { ...messages.tabTitles.changes } />
            </Menu.Item>
          ),
          render: () => {
            return (
              <Tab.Pane>
                <BenefitsTable
                  client={ client } />
              </Tab.Pane>
            );
          },
        },
        {
          menuItem: (
            <Menu.Item
              key="tab2"
              as  = { Button }>
              <FormattedMessage
                { ...messages.tabTitles.changesChart } />
            </Menu.Item>
          ),
          render: () => {return <Tab.Pane><StackedBarGraph client={ client } /></Tab.Pane>;},
        },
        {
          menuItem: (
            <Menu.Item
              key="tab3"
              as  = { Button }>
              <FormattedMessage
                { ...messages.tabTitles.stackedIncomes } />
            </Menu.Item>
          ),
          render: () => {
            return (
              <Tab.Pane>
                <GraphHolder
                  client={ client }
                  Graph={ StackedAreaGraph } />
              </Tab.Pane>
            );
          },
        },
        {
          menuItem: (
            <Menu.Item
              key="tab4"
              as  = { Button }>
              <FormattedMessage
                { ...messages.tabTitles.benefitPrograms } />
            </Menu.Item>
          ),
          render: () => {
            return (
              <Tab.Pane>
                <GraphHolder
                  client={ client }
                  Graph={ BenefitsLineGraph } />
              </Tab.Pane>
            );
          },
        },
      ] } />
  );
};


const PredictionsStep = function ({ updateClientValue, navData, client, openFeedback }) {

  return (
    <FormPartsContainer
      title={
        <FormattedMessage
          { ...messages.title } />
      }
      clarifier = { null }
      navData   = { navData }
      formClass = { `predictions` }>
      {/* `predictionsForm`: This whole div will be outside
        the form in the future and then we'll be able to
        access its style that way */}
      <div id = { `predictionsForm` }>
        <IncomeForm
          updateClientValue = { updateClientValue }
          future            = { client.future }
          time              = { 'future' } />
        <Divider className='ui section divider hidden' />
      </div>
      <div id={ `resultsIntro` }>
        <Header
          as        ='h3'
          className ='ui Header align centered'>
          <FormattedMessage
            { ...messages.chartsHeader } />
        </Header>
        <Message
          className = { `prediction-message` }
          visible
          warning>
          <FormattedMessage
            { ...messages.warningMessage }
            values={{
              feedbackButton: (
                <Button
                  className="feedback-button"
                  size="small"
                  color="teal"
                  compact
                  onClick   = { openFeedback }>
                  <FormattedMessage
                    { ...messages.feedbackLinkText } />
                </Button>
              ),
            }} />
        </Message>
      </div>
      <TabbedVisualizations 
        client       = { client }
        openFeedback = { openFeedback } />
    </FormPartsContainer>
  );
};  // End FutureIncomeStep() Component

export default PredictionsStep;

