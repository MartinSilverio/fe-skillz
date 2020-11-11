import React, { useRef, useState } from 'react';
import NavList from '../navlist/NavList';

import './NavItem.scss';

function NavItem({ navItem, isLastItem, setParentFocused }) {
  const listItem = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    //Change top-level focus once we leave the last item in the submenu
    if (isLastItem && setParentFocused) {
      setParentFocused(false);
    }
    //If no children, navItem is a proper link
    if (!navItem.children) {
      setFocused(false);
    }
  };

  return (
    <li ref={listItem} className={`nav-item ${focused && 'focus'}`}>
      <a href='#' onFocus={handleFocus} onBlur={handleBlur}>
        {navItem.title}
      </a>
      {navItem.children && (
        <NavList
          className='subnav'
          navItems={navItem.children}
          setParentFocused={setFocused}
        />
      )}
    </li>
  );
}

export default NavItem;
