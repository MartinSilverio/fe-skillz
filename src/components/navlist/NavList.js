import React from 'react';
import NavItem from '../navitem/NavItem';

function NavList({ navItems, setParentFocused, ...props }) {
  const length = navItems.length;

  return (
    <ul {...props}>
      {navItems.map((navItem, i) => {
        return (
          <NavItem
            key={navItem.id}
            navItem={navItem}
            isLastItem={i === length - 1}
            setParentFocused={setParentFocused}
          />
        );
      })}
    </ul>
  );
}

export default NavList;
