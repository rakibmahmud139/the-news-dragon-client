import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <h3>This is Home</h3>
        </div>
    );
};

export default Home;