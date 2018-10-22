import React from 'react';
import { Header, Message } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import GithubLink from '../Links/GithubLink';
import ProjectHopeLink from '../Links/ProjectHopeLink';
import { ExternalLink } from '../../forms/formHelpers';
import contributors from '../../localization/contributors';
import messages from './messages';

// CUSTOM COMPONENTS

// @todo Move to AboutPage now that editing content is in snippets.
const AboutContent = function () {
  return (
    <div>
      <Header
        className="ac-header"
        as='h1'>
        <FormattedMessage
          { ...messages.header } />
      </Header>

      <Header as='h3'>
        <FormattedMessage
          { ...messages.whatFor.header } />
      </Header>
      <Message>
        <strong>
          <FormattedMessage
            { ...messages.whatFor.importantNote.header } />
        </strong>
        <FormattedMessage
          { ...messages.whatFor.importantNote.text } />
      </Message>
      <p>
        <FormattedMessage
          { ...messages.whatFor.text }
          values={{
            projectHopeLink: (
              <ProjectHopeLink />
            ),
          }} />
      </p>

      <Header as='h3'>
        <FormattedMessage
          { ...messages.why.header } />
      </Header>
      <p>
        <FormattedMessage
          { ...messages.why.paragraph1 } />
      </p>
      <p>
        <FormattedMessage
          { ...messages.why.paragraph2 } />
      </p>

      <ul>
        <li>
          <ExternalLink href="https://www.youtube.com/watch?v=BveX_rID4_E">
            <FormattedMessage
              { ...messages.videoLink } />
          </ExternalLink>
        </li>

        <li>
          <ExternalLink href="http://www.nccp.org/projects/files/NCCP_CO_presentation07.pdf">
            <FormattedMessage
              { ...messages.quantitativeLink } />
          </ExternalLink>
        </li>

        <li>
          <ExternalLink href="https://www.umb.edu/editor_uploads/images/centers_institutes/center_social_policy/The_Road_to_the_Cliff_Edge_08.16.17.pdf">
            <FormattedMessage
              { ...messages.benefitsLink } />
          </ExternalLink>
        </li>
      </ul>

      <Header as='h3'>
        <FormattedMessage
          { ...messages.howToUse.header } />
      </Header>
      <p>
        <FormattedMessage
          { ...messages.howToUse.text } />
      </p>
      <Message>
        <FormattedMessage
          { ...messages.howToUse.note.text }
          values={{
            refreshNote: (
              <strong>
                <FormattedMessage
                  { ...messages.howToUse.note.refreshNote } />
              </strong>
            ),
          }} />
      </Message>

      <Header as='h3'>
        <FormattedMessage
          { ...messages.whoMadeThis.header } />
      </Header>
      <p>
        <FormattedMessage
          { ...messages.whoMadeThis.paragraph1 }
          values={{
            centerForSocialPolicyLink: (
              <ExternalLink href='https://www.umb.edu/csp'>Center for Social Policy</ExternalLink>
            ),
            projectHopeLink: (
              <ProjectHopeLink />
            ),
            codeForBostonLink: (
              <ExternalLink href='http://www.codeforboston.org/'>Code for Boston</ExternalLink>
            ),
            onSolidGroundCoalitionLink: (
              <ExternalLink href='https://onsolidgroundma.org/'>On Solid Ground Coalition</ExternalLink>
            ),
          }} />
      </p>
      <p>
        <FormattedMessage
          { ...messages.whoMadeThis.paragraph2 }
          values={{
            githubLink: (
              <GithubLink />
            ),
            codeForBostonLink: (
              <ExternalLink href='http://www.codeforboston.org/'>Code for Boston</ExternalLink>
            ),
            contactEmailLink: (
              <a href="mailto:andrew@codeforboston.org">andrew@codeforboston.org</a>
            ),
          }} />
      </p>
      <p>
        <FormattedMessage
          { ...messages.whoMadeThis.paragraph3 }
          values={{
            volunteerNamesButLast: contributors.slice(0, -1),
            lastVolunteerName:     contributors[ contributors.length - 1 ],
          }} />
      </p>

    </div>
  );

};  // End AboutContent(<>)


export default AboutContent;
