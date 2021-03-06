import _ from 'lodash';

/** Helper functions to format vlaues
 * @module
 * @todo Use language of the app in money formatters
 */

const toFancyMoneyStr = function (toFormat) {
  return toFormat.toLocaleString('en-US', { style: 'currency',currency: 'USD' }).replace('.00','');
};

const formatAxis = function (label) {
  /* Adds 1,000s separators to graph axes */
  return label.toLocaleString('en-US');
};

const formatLabel =  function(tooltipItem, data) {
  /* From https://github.com/chartjs/Chart.js/issues/2386 */
  return data.datasets[ tooltipItem.datasetIndex ].label
          + ': ' + toFancyMoneyStr(tooltipItem.yLabel);
};

const formatBenefitLinesTitle = function (tooltipItems, data) {
  let toFormat = data.labels[ tooltipItems[ 0 ].index ];
  return toFancyMoneyStr(toFormat);
};

const formatStackedTitle = function(tooltipItems, data) {
  const { index } = tooltipItems[ 0 ];
  return toFancyMoneyStr(_.sumBy(data.datasets, (dataset) => {
    return dataset.data[ index ];
  }));
};


// For use by react-chartjs-2
export {
  toFancyMoneyStr,
  formatAxis,
  formatLabel,
  formatBenefitLinesTitle,
  formatStackedTitle,
};
