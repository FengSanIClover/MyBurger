import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredient: {
            salad: 2,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredient} />
                <div>BurgerControls</div>
            </Aux>
        )
    }
};

export default BurgerBuilder;