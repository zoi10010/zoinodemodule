import React from 'react';
import { shallow } from 'enzyme';
import { ZButton, ZButtonProgress } from '../index';

describe('Examining the syntax of Jest tests', () => {
  it('renders without crashing', () => {
    shallow(<ZButton />);
  });

  it('renders without crashing', () => {
    shallow(<ZButtonProgress />);
  });

  it('Should render a simple primary button', () => {
    const component = shallow(<ZButton>Button</ZButton>);
    expect(component).toMatchSnapshot();
  });

  it('Should render a simple secondary button', () => {
    const component = shallow(<ZButton type="secondary">Button</ZButton>);
    expect(component).toMatchSnapshot();
  });

  it('Should render a button without moveEvents', () => {
    const component = shallow(<ZButton moveEvents={false}>Button</ZButton>);
    expect(component).toMatchSnapshot();
  });

  it('Should render a button with a progress bar', () => {
    const component = shallow(
      <ZButtonProgress
        action={(element, next) => {
          next();
        }}
      >
        Button
      </ZButtonProgress>);
    expect(component).toMatchSnapshot();
  });
});


