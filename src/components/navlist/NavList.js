import React from 'react';
import NavItem from '../navitem/NavItem';

function NavList({ navItems, ...props }) {
  return (
    <ul {...props}>
      {navItems.map((navItem) => {
        return <NavItem key={navItem.id} navItem={navItem} />;
      })}
    </ul>
  );
}

export default NavList;
