import React from 'react';
import { injectIntl } from 'react-intl';

import TranslationContainer from '../TranslationContainer';
import formatText from '../../utils/formatText';

const FormattedMarkdownMessage = ({ intl, values, ...props }) => {
  return (
    <TranslationContainer>
      { formatText({ text: intl.formatMessage(props, values) }) }
    </TranslationContainer>
  );
};

export default injectIntl(FormattedMarkdownMessage);
