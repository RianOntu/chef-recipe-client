import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs=useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Chefs chefs={chefs}></Chefs>
        </div>
    );
};

export default Home;