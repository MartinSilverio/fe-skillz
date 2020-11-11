import React from 'react';
import NavList from '../navlist/NavList';
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
  return (
    <div className='accordion-container'>
      <Accordion className='nav-accordion' allowZeroExpanded>
        {navItems.map((navItem) => {
          return (
            <AccordionItem uuid={navItem.id} className='nav-accordion-item'>
              <AccordionItemHeading className='nav-accordion-heading'>
                <AccordionItemButton className='nav-accordion-btn'>
                  <span className='accordion-title'>{navItem.title}</span>
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
