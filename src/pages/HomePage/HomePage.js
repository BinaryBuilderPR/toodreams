import React from 'react';
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.Hero_main}>
      <div className={classes.Hero_section}>
          <h1 className={classes.Hero_text}>On-Time, Every Time – Raw Materials & Construction Items at Your Doorsteps</h1>
      </div>

      <div className={classes.image}>
            <img src="images/hero images.jpg" alt="hero"></img>
      </div>

    </div>
  )
};

export default HomePage;
