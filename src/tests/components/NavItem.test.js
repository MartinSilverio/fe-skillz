import React from 'react';
import { shallow } from 'enzyme';
import NavItem from '../../components/navitem/NavItem';

const itemWithNoChild = {
  title: 'Amet',
  id: 2,
  selected: false,
  url: '/amet',
};

const itemWithChild = {
  title: 'Consectetur',
  id: 3,
  selected: false,
  url: '/consectetur',
  children: [
    {
      title: 'Tempor',
      id: 33,
      selected: false,
      url: '/consectetur/tempor',
    },
  ],
};

describe('NavItem', () => {
  it('Should utilize NavList if navItem has children', () => {
    expect.assertions(1);
    expect(shallow(<NavItem navItem={itemWithChild} />)).toMatchSnapshot();
  });
  it('Should not have NavList if navItem has no children', () => {
    expect.assertions(1);
    expect(shallow(<NavItem navItem={itemWithNoChild} />)).toMatchSnapshot();
  });
});
