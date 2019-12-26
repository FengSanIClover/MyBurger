import React from 'react';
import Aux from '../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igkey, i) => {
        return <li key={igkey + i}><span style={{
            textTransform: 'capitalize'
        }}>{igkey}</span>:{props.ingredients[igkey]}</li>
    })
    return (
        <Aux>
            <h3>你的餐點</h3>
            <p>美味漢堡配料包含:</p>
            <ul>
                {
                    ingredientSummary
                }
            </ul>
            <p>繼續結帳?</p>
        </Aux>
    )
}

export default orderSummary;