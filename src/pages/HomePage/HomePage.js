import React from 'react';
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.Hero_main}>
      <div className={classes.Hero_section}>
          <h1 className={classes.Hero_text}>On-Time, Every Time – Raw Materials & Construction Items at Your Doorsteps</h1>
      </div>

      <div className={classes.first_image}>
            <img src="images/electrical-cable-energy-technology-equipment-isolated-white.jpg" alt="hero"></img>
      </div>
      <div className={classes.image}>
            <img src="images/Gemini_Generated_Image_dv693adv693adv69.jpeg" alt="hero"></img>
      </div>
      <div className={classes.image}>
            <img src="images/Gemini_Generated_Image_fgyaiffgyaiffgya.jpeg" alt="hero"></img>
      </div>
      <div className={classes.image}>
            <img src="images/mix_img.png" alt="hero"></img>
      </div>

    </div>
  )
};

export default HomePage;
