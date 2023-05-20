import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
        <img src="1.jpg" alt="" />
        <div className="container">
            <div className='description'>
            <h1 >Explore various indian <br /> chefs now</h1>
        <button className='btn btn-success'>Explore</button>
            </div>
    
        </div>
            
        </div>
    );
};

export default Banner;