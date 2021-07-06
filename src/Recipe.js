import React from 'react';
import './App.css';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
return(
<div className={style.recipe}>
<h1>{title}</h1>
<ol>
    {ingredients.map(ingredient => (
        <li>{ingredient.text}</li>
    ))}
</ol>
<h5>Calories: {calories}</h5>
<img className={style.image} src={image} alt=""></img>

</div>
);
}

export default Recipe;
