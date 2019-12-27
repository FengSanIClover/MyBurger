import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
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

        this.updatePurchaseState(updateIngredient);
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
        this.updatePurchaseState(updateIngredient);
    }

    updatePurchaseState = (ingredients) => {
        // const ingredients = {
        //     ...this.state.ingredient
        // };
        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey]
        }).reduce((acc, cur) => {
            return acc + cur;
        }, 0)

        this.setState({
            purchasable: sum > 0
        })
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        alert('繼續結帳')
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
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredient}
                        purchaseCancel={this.purchaseCancelHandler}
                        purchaseContiune={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredient={this.state.ingredient} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchabable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler} />
            </Aux>
        )
    }
};

export default BurgerBuilder;