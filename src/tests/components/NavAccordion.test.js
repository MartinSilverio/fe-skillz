import React from 'react';
import { shallow } from 'enzyme';
import NavAccordion from '../../components/nav-accordion/NavAccordion';

const itemList = [
  {
    title: 'Lorem',
    id: 1,
    selected: false,
    url: '/lorem',
    children: [
      {
        title: 'Dolor',
        id: 11,
        selected: false,
        url: '/lorem/dolor',
      },
      {
        title: 'Ipsum',
        id: 12,
        selected: false,
        url: '/lorem/ipsum',
      },
      {
        title: 'Sit',
        id: 13,
        selected: false,
        url: '/lorem/sit',
      },
    ],
  },
  {
    title: 'Amet',
    id: 2,
    selected: false,
    url: '/amet',
  },
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/lorem/ipsum',
  }),
}));
describe('NavAccordion', () => {
  it("Should display accessible react accordion with accordion item that have children and accordion items that don't", () => {
    expect.assertions(1);
    expect(shallow(<NavAccordion navItems={itemList} />)).toMatchSnapshot();
  });
});
