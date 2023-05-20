import React from 'react';
import SingleChef from '../SingleChef/SingleChef';
import './Chefs.css';

const Chefs = ({chefs}) => {
    return (
        
        <div className='container mt-5'>
            <h1 className='text-center mb-5'>All Indian Chefs</h1>
            <div className="chefs">
            {
                chefs.map(chef=><SingleChef chef={chef}></SingleChef>)
            }
            </div>
        </div>
    );
};

export default Chefs;