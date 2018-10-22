import React from 'react';
import { Header } from 'semantic-ui-react';

/** Style for text at the tops of columns, like
*     cashflow or household columns.
*
* @function
* @param {object} props
* @property {string} props.type - Used for element classes
* @property {string} props.colName - Also for the element classes
* @property {object} props.style - Style override
* @property {object} props.children - Usually the heading text
*
* @returns Component
*/
const ColumnHeading = function ({ type, colName, style, children }) {
  var classes = type + '-column cashflow-column header ' + colName;
  return (
    <Header
      as='h4'
      className={ classes }
      style={ style }
      color='teal'>
      { children }
    </Header>
  );
};  // End <ColumnHeading>

export default ColumnHeading;
