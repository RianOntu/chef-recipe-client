import React from 'react';
import SingleRecipe from '../SingleRecipe/SingleRecipe';
import './RecipeInfo.css'

const RecipeInfo = ({singleChef}) => {
    const {recipeInfo}=singleChef;
    return (
        <div className='container'>
            <h1 className='text-center'>Recipes</h1>
           <div className="recipes">
           {
                recipeInfo.map(recipe=><SingleRecipe recipe={recipe}></SingleRecipe>)
            }
           </div>
        </div>
    );
};

export default RecipeInfo;