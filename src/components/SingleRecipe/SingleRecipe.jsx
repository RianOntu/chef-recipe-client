import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({recipe}) => {
    const notify = () => toast("Added to favorite");

   const handleFavorite=(event)=>{
    notify();
    event.currentTarget.disabled = true;

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
    <button onClick={handleFavorite} className='btn btn-success'>Mark As Favorite</button>
   <ToastContainer></ToastContainer>
  </div>
</div>
        </div>
    );
};

export default SingleRecipe;