import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetail.css'

const ChefDetails = () => {
    const singleShef=useLoaderData();
    const {id,chefName,chefImg,yearsOfExperience,numberOfRecipes,likes,chefBio}=singleShef;
    return (
        <div className="bg">
            <div className='container mt-5'>
            <h1 className='text-center mb-3'>Chef Recipes Page</h1>
             <div className='row'>
                <div className='col-md-6 col-12'>
                    <h4>Chef Name : {chefName}</h4>
                    <img src={chefImg} alt="" />
                </div>
                <div className='col-md-6 col-12'>
                 <h5>Chef Bio:</h5>
                 <p>{chefBio}</p>
                 <p>Years of experience:{yearsOfExperience}</p>
                 <p>Number of recipes:{numberOfRecipes}</p>
                 <p>Likes:{likes}</p>
                </div>
             </div>
            
        </div>
        </div>
    );
};

export default ChefDetails;