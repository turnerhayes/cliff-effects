// REACT COMPONENTS
import React from 'react';
import { Table } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
// OBJECT MANIPULATION
import cloneDeep from 'lodash/cloneDeep';

// BENEFIT LOGIC
import { applyAndPushBenefits } from '../../../programs/applyAndPushBenefits';

import messages from './messages';


const getSignSymbol = function (num) {
  if (num > 0) {
    return '+';
  }
  else if (num < 0) {
    return '-';
  }
  else { return ''; }
};  // End getSignSymbol()


const BenefitsTable = function ({ client }) {

  var clone = cloneDeep(client);
  var curr = clone.current;

  var allData         = {},
      activeBenefits  = [ `income` ];

  if (curr.hasSection8) {
    activeBenefits.push(`section8`);
  }

  if (curr.hasSnap) {
    activeBenefits.push(`snap`);
  }

  var currentCalcData = {
    activeBenefits: activeBenefits,
    dataToAddTo:    allData,
    clientToChange: clone,
    timeframe:      `current`,
  };
  applyAndPushBenefits (currentCalcData);

  // Add to the `current` data already there
  var futureCalcData = {
    activeBenefits: activeBenefits,
    dataToAddTo:    allData,
    clientToChange: clone,
    timeframe:      `future`,
  };
  applyAndPushBenefits (futureCalcData);

  // @todo Abstract getting values for each row
  var income   = allData.income,
      section8 = allData.section8,
      snap     = allData.snap;

  var sec8BenefitCurrent = 0,
      sec8BenefitFuture  = 0,
      SNAPBenefitCurrent = 0,
      SNAPBenefitFuture  = 0;

  if (curr.hasSection8) {
    sec8BenefitCurrent     = Math.round(section8[ 0 ]);
    sec8BenefitFuture      = Math.round(section8[ 1 ]);
  }

  if (curr.hasSnap) {
    SNAPBenefitCurrent = Math.round(snap[ 0 ]);
    SNAPBenefitFuture  = Math.round(snap[ 1 ]);
  }

  var SNAPDiff            = SNAPBenefitFuture - SNAPBenefitCurrent,
      sec8Diff            = sec8BenefitFuture - sec8BenefitCurrent,
      totalBenefitCurrent = SNAPBenefitCurrent + sec8BenefitCurrent,
      totalBenefitFuture  = SNAPBenefitFuture + sec8BenefitFuture,
      totalDiff           = SNAPDiff + sec8Diff,
      incomeCurrent       = Math.round(income[ 0 ]),
      incomeFuture        = Math.round(income[ 1 ]),
      incomeDiff          = incomeFuture - incomeCurrent,
      netCurrent          = totalBenefitCurrent + incomeCurrent,
      netFuture           = totalBenefitFuture + incomeFuture,
      netDiff             = totalDiff + incomeDiff;

  const columnHeaderStyle = {
          background:    'rgba(0, 181, 173, 1)',
          color:         'white',
          fontSize:      '1.3em',
          fontWeight:    900,
          textAlign:     'center',
          borderRadius:  'inherit',
          letterSpacing: '0.02em',
        },
        totalsRowStyle    = {
          borderTop:  '2px solid rgba(0, 181, 173, 1)',
          fontWeight: 700,
          fontSize:   '1.1em',
          padingTop:  '0.25em',
        },
        rowHeaderStyle    = {
          fontSize:   '1.1em',
          fontWeight: 700,
          textAlign:  'left',
        },
        totalsRowHeaderStyle = {
          fontSize:   '1.2em',
          fontWeight: 700,
          textAlign:  'left',
          borderTop:  '2px solid rgba(0, 181, 173, 1)',
          padingTop:  '0.25em',
        };


  const SNAPBenefitRow = function({ client }){

    if (!client.current.hasSnap) {
      return (null);
    }

    return (
      <Table.Row>
        <Table.Cell style={ rowHeaderStyle }>
          <FormattedMessage
            { ...messages.rows.SNAP } />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <FormattedMessage
            { ...messages.currentSNAP }
            values={{ currentSNAPBenefit: SNAPBenefitCurrent }} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <FormattedMessage
            { ...messages.futureSNAP }
            values={{ futureSNAPBenefit: SNAPBenefitFuture }} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <FormattedMessage
            { ...messages.SNAPDiff }
            values={{
              sign:     getSignSymbol(SNAPDiff),
              SNAPDiff: Math.abs(SNAPDiff),
            }} />
        </Table.Cell>
      </Table.Row>
    );
  };

  const Sec8BenefitRow  = function({ client }){
    if (!client.current.hasSection8) {
      return (null);
    }

    return (
      <Table.Row>
        <Table.Cell style={ rowHeaderStyle }>
          <FormattedMessage
            { ...messages.rows.section8 } />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <FormattedMessage
            { ...messages.currentSection8 }
            values={{ currentSection8Benefit: sec8BenefitCurrent }} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <FormattedMessage
            { ...messages.futureSection8 }
            values={{ futureSection8Benefit: sec8BenefitFuture }} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          <FormattedMessage
            { ...messages.section8Diff }
            values={{
              sign:         getSignSymbol(sec8Diff),
              section8Diff: Math.abs(sec8Diff),
            }} />
        </Table.Cell>
      </Table.Row>
    );
  };

  const TotalBenefitsRow = function({ client }){
    if (!client.current.hasSnap || !client.current.hasSection8) {
      return (null);
    }

    return (
      <Table.Row>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowHeaderStyle }>
          <FormattedMessage
            { ...messages.rows.totalBenefits } />
        </Table.Cell>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowStyle }>
          <FormattedMessage
            { ...messages.currentTotalBenefits }
            values={{ currentTotalBenefits: totalBenefitCurrent }} />
        </Table.Cell>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowStyle }>
          <FormattedMessage
            { ...messages.futureTotalBenefits }
            values={{ futureTotalBenefits: totalBenefitFuture }} />
        </Table.Cell>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowStyle }>
          <FormattedMessage
            { ...messages.totalBenefitsDiff }
            values={{
              sign:              getSignSymbol(totalDiff),
              totalBenefitsDiff: Math.abs(totalDiff),
            }} />
        </Table.Cell>
      </Table.Row>
    );
  };

  const IncomeRow = function () {
    return (
      <Table.Row>
        <Table.Cell style={ rowHeaderStyle }>
          <FormattedMessage
            { ...messages.rows.income } />
        </Table.Cell>
        <Table.Cell textAlign="right">
          <FormattedMessage
            { ...messages.currentIncome }
            values={{ currentIncome: incomeCurrent }} />
        </Table.Cell>
        <Table.Cell textAlign="right">
          <FormattedMessage
            { ...messages.futureIncome }
            values={{ futureIncome: incomeFuture }} />
        </Table.Cell>
        <Table.Cell textAlign="right">
          <FormattedMessage
            { ...messages.incomeDiff }
            values={{
              sign: getSignSymbol(incomeDiff),
              incomeDiff,
            }} />
        </Table.Cell>
      </Table.Row>
    );
  };

  const TotalsRow = function () {
    return (
      <Table.Row style={{ border: 'none' }}>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowHeaderStyle }>
          <FormattedMessage
            { ...messages.rows.netTotal } />
        </Table.Cell>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowStyle }>
          <FormattedMessage
            { ...messages.currentNetTotal }
            values={{ currentNetTotal: netCurrent }} />
        </Table.Cell>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowStyle }>
          <FormattedMessage
            { ...messages.futureNetTotal }
            values={{ futureNetTotal: netFuture }} />
        </Table.Cell>
        <Table.Cell
          textAlign='right'
          width={ 3 }
          style={ totalsRowStyle }>
          <FormattedMessage
            { ...messages.netTotalDiff }
            values={{
              sign:         getSignSymbol(netDiff),
              netTotalDiff: Math.abs(netDiff),
            }} />
        </Table.Cell>
      </Table.Row>
    );
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row >
            <Table.Cell
              style={ columnHeaderStyle }
              width={ 3 }>
              <FormattedMessage
                { ...messages.columnHeaders.benefit } />
            </Table.Cell>
            <Table.Cell
              style={ columnHeaderStyle }
              width={ 3 }>
              <FormattedMessage
                { ...messages.columnHeaders.currentBenefits } />
            </Table.Cell>
            <Table.Cell
              style={ columnHeaderStyle }
              width={ 3 }>
              <FormattedMessage
                { ...messages.columnHeaders.newEstimate } />
            </Table.Cell>
            <Table.Cell
              style={ columnHeaderStyle }
              width={ 3 }>
              <FormattedMessage
                { ...messages.columnHeaders.difference } />
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <SNAPBenefitRow 
            client={ clone } />
          <Sec8BenefitRow 
            client={ clone } />
          <TotalBenefitsRow 
            client={ clone } />
          <IncomeRow />
          <TotalsRow />
        </Table.Body>
      </Table>
    </div>
  );

};  // End BenefitsTable(<>)


export default BenefitsTable;
