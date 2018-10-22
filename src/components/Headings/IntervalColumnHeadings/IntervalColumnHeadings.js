import React from 'react';
import PropTypes from 'prop-types';

import ColumnHeading from '../ColumnHeading';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const IntervalColumnHeadings = ({ type, columnTitle }) => {
  const styles = { fontSize: '14px' };

  return (
    <div style={{ display: 'inline-block' }}>
      <ColumnHeading
        type={ type }
        colName="weekly"
        style={ styles }>
        <FormattedMessage
          { ...messages.weekly } />
      </ColumnHeading>
      <ColumnHeading
        type={ type }
        colName="monthly"
        style={ styles }>
        <FormattedMessage
          { ...messages.monthly } />
      </ColumnHeading>
      <ColumnHeading
        type={ type }
        colName="yearly"
        style={ styles }>
        <FormattedMessage
          { ...messages.yearly } />
      </ColumnHeading>
      <ColumnHeading
        type={ type }
        colName={ type }
        style={ styles }
        columnTitle={ columnTitle }>
        {columnTitle}
      </ColumnHeading>
    </div>
  );
};

IntervalColumnHeadings.propTypes = { type: PropTypes.string };

export default IntervalColumnHeadings;
