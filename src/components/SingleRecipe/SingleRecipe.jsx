import React, { useState } from 'react';

const SingleRecipe = ({recipe}) => {
    const [disable,setDisable]=useState(false)
   const handleFavorite=()=>{
    setDisable(true)
   }

    const {recipeName,ingredients,cookingMethod,rating}=recipe;
    return (
        <div>
            <div class="card">
  <div class="card-body">
    <h5 class="card-title">Recipe Name:{recipeName}</h5>
    <h5>Ingredients:</h5>
    {
        ingredients.map(ingredient=><li>{ingredient}</li>)
    }
    <p class="card-text">Cooking Method:{cookingMethod}</p>
    <p class="card-text">Rating:{rating}</p>
    <button onClick={handleFavorite} className='btn btn-success' {disable?'disable':""}>Mark As Favorite</button>
   
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;