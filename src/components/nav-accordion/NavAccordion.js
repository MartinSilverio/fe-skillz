import React from 'react';
import NavList from '../navlist/NavList';
import { useHistory, useLocation } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';

import './NavAccordion.scss';

function NavAccordion({ navItems }) {
  const location = useLocation();
  const history = useHistory();
  const navigateTo = (url) => {
    history.push(url);
  };

  return (
    <div className='accordion-container'>
      <Accordion className='nav-accordion' allowZeroExpanded>
        {navItems.map((navItem) => {
          return (
            <AccordionItem
              key={navItem.id}
              uuid={navItem.id}
              className='nav-accordion-item'
            >
              <AccordionItemHeading
                className='nav-accordion-heading'
                onClick={() => {
                  navigateTo(navItem.url);
                }}
              >
                <AccordionItemButton className='nav-accordion-btn'>
                  <span
                    className={`accordion-title ${
                      location.pathname.includes(navItem.url) && 'selected'
                    }`}
                  >
                    {navItem.title}
                  </span>
                  {navItem.children && (
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? (
                          <span className='accordion-icon collapse'>-</span>
                        ) : (
                          <span className='accordion-icon expand'>+</span>
                        )
                      }
                    </AccordionItemState>
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              {navItem.children && (
                <AccordionItemPanel className='nav-accordion-panel'>
                  <NavList
                    className='accordion-subnav'
                    navItems={navItem.children}
                  />
                </AccordionItemPanel>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default NavAccordion;

// {
/* <AccordionItemButton className='nav-accordion-btn'>
                  {navItem.children ? (
                    <span className='accordion-title'>{navItem.title}</span>
                  ) : (
                    <NavLink
                      to={navItem.url}
                      role='menuitem'
                      className='accordion-title'
                      activeClassName='selected'
                      isActive={(match, location) =>
                        location.pathname.includes(navItem.url)
                      }
                    >
                      {navItem.title}
                    </NavLink>
                  )}

                  {navItem.children && (
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded ? (
                          <span className='accordion-icon collapse'>-</span>
                        ) : (
                          <span className='accordion-icon expand'>+</span>
                        )
                      }
                    </AccordionItemState>
                  )}
                </AccordionItemButton> */
// }
