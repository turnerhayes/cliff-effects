import React from 'react';
import {
  Form,
  Radio,
} from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';


/** Yes/no toggleable radio button group with a label.
 *
 * @param {object} props
 * @param {string} props.name Key for radio-group. Must
 *     be unique from all other radio names on the page.
 * @param {bool} props.checked `true` if 'yes' is selected
 *     `false` if 'no' is selected. Change will be sent out.
 * @param {function} props.onChange Is given event and adjusted
 *     input element props object. Adjustment is to make sure
 *     the property `value` is under control since there are
 *     issues further up the line.
 * 
 * @returns {object} React element
 */
class ControlledRadioYesNo extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {};
  }

  handleChange = (evnt, inputProps) => {
    inputProps.value = inputProps.value === 'Yes';
    this.props.onChange(evnt, inputProps);
  };

  render(){

    return (
      <div className="radio-yes-no">

        <Form.Field>
          <Radio
            label={
              <label>
                <FormattedMessage
                  { ...messages.yes } />
              </label>
            }
            name={ this.props.name }
            value='Yes'
            checked={ this.props.checked === true }
            onChange={ this.handleChange } />
        </Form.Field>
        <Form.Field >
          <Radio
            label={
              <label>
                <FormattedMessage
                  { ...messages.no } />
              </label>
            }
            name={ this.props.name }
            value='No'
            checked={ this.props.checked === false }
            onChange={ this.handleChange } />
        </Form.Field>
        <Form.Field >
          <strong>
            {this.props.labelText}
          </strong>
        </Form.Field>

      </div>
    );
  }
};  // End <ControlledRadioYesNo>

export default ControlledRadioYesNo;
