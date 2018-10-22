import React from 'react';
import { Menu, Responsive } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const BetaWarning = function (props) {
  return (
    <Menu.Item>
      <Responsive
        as='strong'
        { ...Responsive.onlyTablet }>
        <FormattedMessage
          { ...messages.shortText } />
      </Responsive>
      <Responsive
        as='strong'
        { ...Responsive.onlyComputer }>
        <FormattedMessage
          { ...messages.longText } />
      </Responsive>
    </Menu.Item>
  );
};  // End BetaWarning(<>)


export default BetaWarning;
