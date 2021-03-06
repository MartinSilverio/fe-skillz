import React, { useState } from 'react';
import NavList from '../navlist/NavList';
import { NavLink, useHistory } from 'react-router-dom';

import './NavItem.scss';

function NavItem({ navItem }) {
  const [focused, setFocused] = useState(false);
  const history = useHistory();

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };

  const handleKeyPress = (e) => {
    //Handle space; enter works by default
    if (e.key === ' ') {
      history.push(navItem.url);
    }
  };

  let ariaProps = {
    'aria-haspopup': !!navItem.children,
  };

  if (navItem.children) {
    ariaProps['aria-expanded'] = focused;
  }

  return (
    <li role='none' className='nav-item'>
      <NavLink
        to={navItem.url}
        role='menuitem'
        {...ariaProps}
        activeClassName='selected'
        isActive={(match, location) => location.pathname.includes(navItem.url)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      >
        {navItem.title}
      </NavLink>
      {navItem.children && (
        <NavList
          className='subnav'
          role='menu'
          aria-label={navItem.title}
          navItems={navItem.children}
        />
      )}
    </li>
  );
}

export default NavItem;
