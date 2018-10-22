import React from 'react';

import { ExternalLink } from '../../ExternalLink';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

export default function GitHubLink({ ...props }) {
  return (
    <ExternalLink
      href='https://github.com/codeforboston/cliff-effects'
      { ...props }>
      <FormattedMessage
        { ...messages.text } />
    </ExternalLink>
  );
}
