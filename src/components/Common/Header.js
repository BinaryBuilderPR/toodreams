import React from 'react';
import classes from './Header.module.css'; // Import the CSS module
import { Class, Search } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import "../../Global.css"
const Header = () => {
  return (
    <header className={classes.header}>
      <div >
       <p className={classes.logo}> TD </p>
      <p className={classes.logoText}> TooDreams</p>

      </div>

        <div className={classes.input_div}>
          <Search fontSize="large" className={classes.input_logo}/>
        <input  type="text" placeholder="Search for products..." className={classes.input}></input>

        </div>
      <nav className={classes.navbar}>
        <ul >
          <li>Become Seller</li>
          <li>Row Materials</li>
          <li>Specialist & Works </li>
          <li>Plumbing & Electrical </li>
          <li>Contact</li>
         <li><ShoppingCartOutlinedIcon fontSize='large' /></li>
         <li><AccountCircleOutlinedIcon fontSize='large'/></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
