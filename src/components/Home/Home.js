import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import Navbar from './Home/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
        </div>
    );
};

export default Home;