import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="toolbar-logo">
        <a href="/"> OUR LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar-navigation-items">
        {/* TODO: react router can go here later or just add a search bar? */}
        <ul>
          <li>
            <a href="/">Search Properties</a>
          </li>
          <li>
            <a href="/">Property Values</a>
          </li>
          <li>
            <a href="/">Purchase History</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
