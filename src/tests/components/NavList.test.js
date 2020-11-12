import React from 'react';
import { shallow } from 'enzyme';
import NavList from '../../components/navlist/NavList';

const itemList = [
  {
    title: 'Adipiscing',
    id: 31,
    selected: false,
    url: '/consectetur/adipiscing',
  },
  {
    title: 'Eiusmod',
    id: 32,
    selected: false,
    url: '/consectetur/eiusmod',
  },
  {
    title: 'Tempor',
    id: 33,
    selected: false,
    url: '/consectetur/tempor',
  },
];

const emptyList = [];

describe('NavList', () => {
  it('Should list NavItems if there are items available', () => {
    expect.assertions(1);
    expect(shallow(<NavList navItems={itemList} />)).toMatchSnapshot();
  });
  it('Should not list NavItems if there are not items available', () => {
    expect.assertions(1);
    expect(shallow(<NavList navItems={emptyList} />)).toMatchSnapshot();
  });
});
