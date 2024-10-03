import React from 'react';
import classes from './Header.module.css'; // Import the CSS module
import "../../Global.css"
const Header = () => {
  return (
    <header className={classes.header}>
      <div >
       <p className={classes.logo}> TD </p>
      <p className={classes.logoText}> TooDreams</p>

      </div>

        <div className={classes.input_div}>
        <input  type="text" placeholder="Search for products..." className={classes.input}></input>

        </div>
      <nav className={classes.navbar}>
        <ul>
          <li>Become Seller</li>
          <li>Row Materials</li>
          <li>Specialist & Works </li>
          <li>Plumbing & Electrical </li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
