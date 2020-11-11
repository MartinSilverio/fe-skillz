import React from 'react';
import NavList from '../navlist/NavList';

import './NavItem.scss';

function NavItem({ navItem }) {
  return (
    <li className='nav-item'>
      <span>{navItem.title}</span>
      {navItem.children && (
        <NavList className='subnav' navItems={navItem.children} />
      )}
    </li>
  );
}

export default NavItem;
