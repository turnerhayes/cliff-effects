import React from 'react';

import { ExternalLink } from '../../ExternalLink';

export default function ProjectHopeLink({ ...props }) {
  return (
    <ExternalLink
      href='http://www.prohope.org/'
      { ...props }>
      Project Hope
    </ExternalLink>
  );
}
