import React from 'react';
import './../styles/SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if (props.show) {
      drawerClasses = 'side_drawer open';
    }

  return (
    <nav className={drawerClasses}>
    <ul>
      <li><a href="/">Expertise</a></li>
      <li><a href="/products">Products</a></li>
      <li><a href="/">Projects</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
  );
};

export default SideDrawer;
