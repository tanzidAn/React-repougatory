import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShat =useLoaderData();
    console.log(tShat)
    return (
        <div>
            <h1>This is Home{tShat.length}</h1>
        </div>
    );
};

export default Home;