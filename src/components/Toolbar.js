import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './../styles/Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo"><a href="/">LOGO</a></div>
      <div className="spacer" />
      <div className="toolbar_nav-items">
        <ul>
          <li><a href="/">Products</a></li>
          <li><a href="/">Users</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
