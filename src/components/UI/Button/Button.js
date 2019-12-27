import React from 'react';
import classes from '../../../assets/components/UI/Button.css';


const button = (props) => (
    <button
        onClick={props.clicked}
        className={[classes.Button, classes[props.btnTye]].join(' ')}>
        {props.children}
    </button>
);

export default button;