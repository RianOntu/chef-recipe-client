import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import IndianFoods from '../IndianFoods/IndianFoods';
import About from '../About/About';

const Home = () => {
    const chefs=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Chefs chefs={chefs}></Chefs>
            <IndianFoods></IndianFoods>
            <About></About>
        </div>
    );
};

export default Home;