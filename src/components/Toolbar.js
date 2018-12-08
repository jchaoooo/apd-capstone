import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './../styles/Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_nav">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/" title="VCO's Architectural Products Division">
          <img id="logo" src={require("./../images/apd-logo.png")} alt="VCO-APD" width="130"/>
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar_nav-items">
        <ul>
          <li><a href="/services" className="toolbar-links">services</a></li>
          <li><a href="/products" className="toolbar-links">PRODUCTS</a></li>
          <li><a href="/" className="toolbar-links">PROJECTS</a></li>
          <li><a href="/" className="toolbar-links">ABOUT</a></li>
          <li><a href="/contact" className="toolbar-links">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
