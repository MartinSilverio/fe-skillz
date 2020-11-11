import React, { Fragment } from 'react';
import NavList from '../navlist/NavList';
import NavAccordion from '../nav-accordion/NavAccordion';
import useWindowDimensions from '../../utils/hooks/useWidthDimensions';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

import './NabBar.scss';
import logo from '../assets/we_are_wonderful.png';

function NavBar({ navItems }) {
  const { width } = useWindowDimensions();

  return (
    <Fragment>
      <nav id='navbar'>
        <img className='logo' alt='' src={logo}></img>
        {width > MOBILE_BREAKPOINT && (
          <NavList className='nav-list' navItems={navItems} />
        )}
      </nav>
      {width <= MOBILE_BREAKPOINT && <NavAccordion navItems={navItems} />}
    </Fragment>
  );
}

export default NavBar;
