import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Button from '../UI/Button/Button';

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
            <p><strong>總金額為:{props.price.toFixed(2)}</strong></p>
            <p>繼續結帳?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>取消</Button>
            <Button btnType="Success" clicked={props.purchaseContiune}>結帳</Button>
        </Aux>
    )
}

export default orderSummary;