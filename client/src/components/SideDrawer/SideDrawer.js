import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';

  // sideDrawerOpen is true add a `open` class
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};

export default sideDrawer;
