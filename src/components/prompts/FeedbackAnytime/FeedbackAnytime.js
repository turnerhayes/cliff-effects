// REACT COMPONENTS
import React from 'react';
import { Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const FeedbackAnytime = function (props) {

  return (
    <div>
      <Button
        onClick={ props.openFeedback }
        type='button'
        color='teal'
        size='medium'
        className="fixed rotate"
        id="feedback_fixed">
        <FormattedMessage
          { ...messages.buttonText } />
      </Button>
    </div>
  );

};  // End <FeedbackAnytime>


export default FeedbackAnytime;
