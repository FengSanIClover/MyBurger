import React from 'react';
import classes from '../../assets/components/Burger/Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let ingredients = Object.keys(props.ingredient).map(igkey => {
        // 取得物件屬性名稱 igkey
        // console.log(igkey)
        // console.log('[ingredient[igkey]]', props.ingredient[igkey])
        // 建立空長度的陣列 Array(props.ingredient[igkey]
        // console.log(Array(props.ingredient[igkey]));
        // console.log([...Array(props.ingredient[igkey])])
        // 讀取 ingredient 值，建立相對應長度的陣列，按長度建立 burgerIngredient 並回傳
        return [...Array(props.ingredient[igkey])].map((_, i) => {
            return <BurgerIngredient key={`${igkey}${i}`} type={igkey} />
        })
    }).reduce((acc, cur) => {
        return acc.concat(cur)
    }, [])
    console.log(ingredients);

    if (ingredients.length === 0) {
        ingredients = <p>請加入配料</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {
                ingredients
            }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;