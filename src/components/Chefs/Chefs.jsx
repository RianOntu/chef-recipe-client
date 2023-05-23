import React, { useContext, useState } from 'react';
import SingleChef from '../SingleChef/SingleChef';
import './Chefs.css';
import { AuthenticationContext } from '../Providers/AuthenticationProvider';

const Chefs = ({chefs}) => {
    const {loading}=useContext(AuthenticationContext)
    return (
        
        <div className='container mt-5 margins'>
            <h1 className='text-center mb-5'>All Indian Chefs</h1>
            <div className="chefs">
            { 

              loading?<div class="spinner-border m-auto" role="status">
              <span class="visually-hidden">Loading...</span>
              </div>:chefs.map(chef=><SingleChef chef={chef}></SingleChef>)
                
            }
            </div>
        </div>
    );
};

export default Chefs;