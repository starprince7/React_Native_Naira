import React from 'react';
import renderer from 'react-test-renderer';
import Naira from '../index';

describe('Naira component', () => {
  it('renders correctly with default decimal places', () => {
    const component = renderer.create(
      <Naira style={{ color: 'red' }}>{1000}</Naira>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom decimal places', () => {
    const component = renderer.create(
      <Naira style={{ fontSize: 18 }} decimalPlaces={2}>{500.99}</Naira>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
