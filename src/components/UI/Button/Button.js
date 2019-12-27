import React from 'react';
import classes from '../../../assets/components/UI/Button.css';


const button = (props) => (
    <button
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnType]].join(' ')}>
        {props.children}
    </button>
);

export default button;