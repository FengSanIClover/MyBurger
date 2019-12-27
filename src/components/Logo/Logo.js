import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from '../../assets/components/Logo/Logo.css';
const logo = (props) => (
    <div className={classes.Logo}>
        <img
            src={burgerLogo} alt="MyBurger"
        />
    </div>
);

export default logo;