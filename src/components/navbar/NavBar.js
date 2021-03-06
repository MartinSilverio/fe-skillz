import React, { Fragment, useState } from 'react';
import NavList from '../navlist/NavList';
import NavAccordion from '../nav-accordion/NavAccordion';
import useWindowDimensions from '../../utils/hooks/useWidthDimensions';
import { MOBILE_BREAKPOINT } from '../../utils/constants';

import './NabBar.scss';
import logo from '../../assets/we_are_wonderful.png';
import closeIcon from '../../assets/close.svg';

function NavBar({ navItems }) {
  const { width } = useWindowDimensions();
  const [openAccordion, setOpenAccordion] = useState(false);
  const clickHandler = () => {
    setOpenAccordion(!openAccordion);
  };

  return (
    <Fragment>
      <nav id='navbar' aria-label='This Is Wonderful Navigation'>
        <img className='logo' alt='' src={logo}></img>
        {width > MOBILE_BREAKPOINT && (
          <NavList
            className='nav-list'
            navItems={navItems}
            role='menubar'
            aria-label='Top Level Navigation'
          />
        )}
        {width <= MOBILE_BREAKPOINT && (
          <div className='nav-btn-container'>
            <button
              onClick={clickHandler}
              className={`nav-btn  ${openAccordion && 'close'}`}
              aria-label={`${openAccordion ? 'close' : 'open'} menu`}
            >
              {openAccordion ? <img src={closeIcon} alt='' /> : 'MENU'}
            </button>
            {!openAccordion && <div className='triangle'></div>}
          </div>
        )}
      </nav>
      {width <= MOBILE_BREAKPOINT && openAccordion && (
        <NavAccordion navItems={navItems} />
      )}
    </Fragment>
  );
}

export default NavBar;
