import React from 'react';
import classes from './Header.module.css'; // Import the CSS module
import { Search } from '@mui/icons-material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import "../../Global.css"
const Header = () => {
  return (
    <header className={classes.header}>
      <div >
       <p className={classes.logo}> TD </p>
      <p className={classes.logoText}> TooDreams</p>

      </div>

        <div className={classes.search_div}>
          <Search fontSize="large" className={classes.search_logo}/>
        <input  type="text" placeholder="Search for products..." className={classes.search_input}></input>

      </div>
     
    
       
      <nav className={classes.navbar}>
      
        <ul >
        <div className={classes.location_div}>
          <LocationOnOutlinedIcon fontSize="large" className={classes.location_logo}/>
        <input  type="text" placeholder="Jamshedpur,Jharkhand" className={classes.location_input}></input>

        </div>
          <li className={classes.Active}>Become Seller</li>
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
