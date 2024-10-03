import React from 'react';
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.Hero_section}>
        <h1 className={classes.Hero_text}>On-Time, Every Time – Raw Materials and Construction Items at Your Doorsteps</h1>
        <div>

            <img  className={classes.first_image} src="images/pexels-tima-miroshnichenko-6473974.jpg"></img>
        </div>
    </div>
  )
};

export default HomePage;
