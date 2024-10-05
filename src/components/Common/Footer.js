import React from "react";
import classes from "./Footer.module.css"

function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
    
    <div>
    <div className={classes.footer}>
        <div>

             <div className={classes.footer_main_text}>TOO DREAMS</div>
            <p className={classes.about}>At Toodream, we believe in building lasting partnerships and supporting the diverse needs of manufacturers and artisans, ensuring they always have the right materials when they need them.</p>
        </div>
        <div>
        <div className={classes.footer_main_text}>Quick Links </div>
        <p className={classes.about}>At Toodream, we believe in building lasting partnerships and supporting the diverse needs of manufacturers and artisans, ensuring they always have the right materials when they need them.</p>
      
        </div>
        <div>
        <div className={classes.footer_main_text}>Shop Now </div>
        <p className={classes.about}>At Toodream, we believe in building lasting partnerships and supporting the diverse needs of manufacturers and artisans, ensuring they always have the right materials when they need them.</p>
      

        </div>
        <div>

        <div className={classes.footer_main_text}>Reach Us</div>
        <p className={classes.about}>At Toodream, we believe in building lasting partnerships and supporting the diverse needs of manufacturers and artisans, ensuring they always have the right materials when they need them.</p>
      
        </div>
        
    </div>
    <div className={classes.copy_right}>
    <p> © <span id="">{currentYear}</span> Too Dreams E.Commmerce All Rights Reserved. </p>
        </div>
</div>
  );
}

export default Footer;
