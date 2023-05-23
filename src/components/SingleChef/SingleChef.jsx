import React from 'react';
import { Link } from 'react-router-dom';
import './SingleChef.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeHolderImage from '../../assets/blur.jpg';

const SingleChef = ({chef}) => {
    const {id,chefImg,chefName,yearsOfExperience,numberOfRecipes,likes}=chef;
    return (
        
            <div class="card">
               <LazyLoadImage src={chefImg}
        width={"100%"} height={450}
        alt="Image Alt" class="card-img-top"
        placeholderSrc={placeHolderImage}
        effect="blur"
      />
              
          
  
  <div class="card-body">
    <h5 class="card-title">Chef Name:{chefName}</h5>
    <p class="card-text">Years of experience:{yearsOfExperience}</p>
    <p class="card-text">Number of recipes:{numberOfRecipes}</p>
    <p class="card-text">Likes:{likes}</p>
    <Link className='b' to={`/chefs/${id}`}><button className='btn btn-success'>View Recipes</button></Link>
  </div>
</div>
        
    );
};

export default SingleChef;