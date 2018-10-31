import React from 'react';
import {
  // Button,
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import GithubLink from '../Links/GithubLink';

import messages from './messages';


const MainMenu = function ({ snippets }) {
  return (
    <Menu
      inverted
      secondary
      size='large'>

      <Menu.Item>
        <Link
          className="main-nav"
          to="/">
          <FormattedMessage { ...messages.nav.home } />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          className="main-nav"
          to="/about">
          <FormattedMessage { ...messages.nav.about } />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <GithubLink
          className="neutral-link" />
      </Menu.Item>
      <Menu.Item position='right'>
        {/*<Link to="/login"><Button inverted>Log in</Button></Link>*/}
        {/*<Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>*/}
      </Menu.Item>
    </Menu>
  );
};  // End MainMenu(<>)


export { MainMenu };

