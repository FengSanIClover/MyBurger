import React from 'react';
import classes from '../../../../assets/components/NavigationItem/NavigationItem.css';


const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : null}>
            {props.children}</a>
    </li>
);

export default navigationItem;
