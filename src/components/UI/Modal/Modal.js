import React from 'react';
import classes from '../../../assets/components/UI/Modal.css';


const modal = (props) => (
    <div className={classes.Modal}>
        {
            props.children
        }
    </div>
)

export default modal;