import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Home/Navbar/Navbar';
import Trainer from './Trainer/Trainer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <Trainer />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;