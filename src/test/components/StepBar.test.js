import React from 'react';
import { shallow, mount } from 'enzyme';

import StepBar from '../../components/StepBar';

describe('<StepBar>', () => {
  const goToStep = jest.fn();
  const steps = [
    'firstStep',
    'secondStep',
    'thirdStep',
  ].map(
    (key) => {
      return {
        key,
        name: `${key} name`,
      };
    }
  );
  const defaultProps = {
    currentStepIndex: 1,
    goToStep:         goToStep,
    steps:            steps,
  };

  const buildWrapper = (props = {}, useMount = false) => {
    return (useMount ? mount : shallow)(
      (
        <StepBar
          { ...defaultProps }
          { ...props } />
      )
    );
  };

  afterEach(() => {
    goToStep.mockReset();
  });

  it('renders steps with active prop', () => {
    expect(buildWrapper({ currentStepIndex: 1 }).shallow().find('Step').at(0).prop('active')).toBe(true);
    expect(buildWrapper({ currentStepIndex: 2 }).shallow().find('Step').at(1).prop('active')).toBe(true);
    expect(buildWrapper({ currentStepIndex: 3 }).shallow().find('Step').at(2).prop('active')).toBe(true);
  });

  it('calls goToStep with expected index', () => {
    const wrapper = buildWrapper().shallow();

    wrapper.find('Step').at(0).simulate('click');
    expect(goToStep).toHaveBeenLastCalledWith(1);

    wrapper.find('Step').at(1).simulate('click');
    expect(goToStep).toHaveBeenLastCalledWith(2);

    wrapper.find('Step').at(2).simulate('click');
    expect(goToStep).toHaveBeenLastCalledWith(3);
  });

  it('matches snapshot', () => {
    expect(buildWrapper(undefined, true)).toMatchSnapshot();
  });
});
