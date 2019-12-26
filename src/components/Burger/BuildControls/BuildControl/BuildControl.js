import React from 'react';
import classes from '../../../../assets/components/BuildControls/BuildControl/BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            disabled={props.disabled}
            className={classes.Less}
            onClick={props.removed}>減少</button>
        <button
            className={classes.More}
            onClick={props.added}>增加</button>
    </div>
);

export default buildControl;