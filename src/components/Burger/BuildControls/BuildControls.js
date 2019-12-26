import React from 'react';
import classes from '../../../assets/components/BuildControls/BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {
            controls.map(ctr => {
                return <BuildControl
                    key={ctr.label}
                    label={ctr.label}
                    added={() => props.ingredientAdded(ctr.type)}
                    removed={() => props.ingredientRemove(ctr.type)}
                    disabled={props.disabled[ctr.type]} />
            })
        }
    </div>
);

export default buildControls;
