import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';

const Home = () => {
    return (
        <main style={{margin:'10px 20px'}}>
            <Header />
            <Dashboard />
        </main>
    );
};

export default Home;