import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    meat: 1,
    cheese: 0.4,
    bacon: 0.6
}

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];
        const updateCount = oldCount + 1;
        const updateIngredient = {
            ...this.state.ingredient,
        };

        updateIngredient[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredient: updateIngredient,
            totalPrice: newPrice
        })
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredient[type];

        const newCount = oldCount - 1;

        if (newCount < 0) return;

        const updateIngredient = {
            ...this.state.ingredient
        }

        updateIngredient[type] = newCount;

        const priceSubtract = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtract;

        this.setState({
            ingredient: updateIngredient,
            totalPrice: newPrice
        })

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredient
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        return (
            <Aux>
                <Burger ingredient={this.state.ingredient} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo} />
            </Aux>
        )
    }
};

export default BurgerBuilder;