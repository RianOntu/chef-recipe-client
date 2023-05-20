import React from 'react';
import { Link } from 'react-router-dom';
import './SingleChef.css'

const SingleChef = ({chef}) => {
    const {id,chefImg,chefName,yearsOfExperience,numberOfRecipes,likes}=chef;
    return (
        
            <div class="card">
  <img class="card-img-top" src={chefImg} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Chef Name:{chefName}</h5>
    <p class="card-text">Years of experience:{yearsOfExperience}</p>
    <p class="card-text">Number of recipes:{numberOfRecipes}</p>
    <p class="card-text">Likes:{likes}</p>
    <Link to={`/chefs/${id}`}><button className='btn btn-success'>View Recipes</button></Link>
  </div>
</div>
        
    );
};

export default SingleChef;