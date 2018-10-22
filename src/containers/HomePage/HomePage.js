import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class HomePage extends Component {
  render() {
    return (
      <div id='HomePage'>
        <div id='HomeContent'>
          <div className="main-wrapper">
            <div className="headings">
              <h1>
                <FormattedMessage
                  { ...messages.appName } />
              </h1>
              <h2>
                <FormattedMessage
                  { ...messages.prototypeNote } />
              </h2>
            </div>

            <div className='center-contents'>
              <Link
                className='home-button hb-left'
                to='/visit/54321/1'>
                <FormattedMessage
                  { ...messages.toFirstInputPage } />
              </Link>

              <Link
                className='home-button hb-right'
                to='/about'>
                <FormattedMessage
                  { ...messages.toAboutPage } />
              </Link>
            </div>
            <p className="home-disclaimer">
              <FormattedMessage
                { ...messages.cautionaryNote } />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
