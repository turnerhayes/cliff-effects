import React from 'react';
import logo from '../../images/logo.svg';

import {
  Grid,
  Header,
  Segment,
  Image,
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Footer = () => {
  return (
    <Segment
      className = { `footer_segment` }
      inverted
      vertical
      color='teal'>
      <Grid
        container
        divided
        inverted
        stackable>
        <Grid.Row>
          <Grid.Column
            width={ 4 }
            floated='left'>
            <Header
              as='h4'
              inverted>
              <FormattedMessage
                { ...messages.header.text } />
            </Header>
            <p>
              <FormattedMessage
                { ...messages.cfbCredit } />
            </p>
          </Grid.Column>
          <a

            href="http://www.codeforboston.org"
            target="_blank"
            rel="noopener noreferrer"><Image
              src={ logo }
              size='small'
              floated='right' />
          </a>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Footer;
