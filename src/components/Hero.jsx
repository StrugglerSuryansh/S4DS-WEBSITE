// components/Hero.js
import React from 'react';

const Hero = () => (
    <section id="home" className="bg-gray-900 text-white h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: "url('/api/placeholder/1200/600')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Society</h1>
            <p className="text-xl mb-8">Advancing knowledge and fostering community within our department</p>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">Join Us</a>
        </div>
    </section>
);

export default Hero;