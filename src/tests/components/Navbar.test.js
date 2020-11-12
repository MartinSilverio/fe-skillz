import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../components/navbar/NavBar';
import { menuData } from '../../utils/data';

describe('NavBar', () => {
  it('should display a navbar given data if window size is bigger than 800px', () => {
    expect.assertions(1);
    expect(shallow(<NavBar navItems={menuData.menu} />)).toMatchSnapshot();
  });
  it('should display header with button if window size is less than or equal to 800px', () => {
    expect.assertions(1);
    window.innerWidth = 800;
    expect(shallow(<NavBar navItems={menuData.menu} />)).toMatchSnapshot();
  });
});
