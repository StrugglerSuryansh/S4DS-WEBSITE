import React from 'react';

const Header = () => (
    <header className="bg-blue-600 text-white fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl size-12 font-bold">
                <img src="./public/s4ds.jpg" alt="logo" className="rounded-full bg-transparent" />
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="hover:text-blue-200 transition-colors duration-300">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-200 transition-colors duration-300">About</a></li>
                    <li><a href="#events" className="hover:text-blue-200 transition-colors duration-300">Events</a></li>
                    <li><a href="#contact" className="hover:text-blue-200 transition-colors duration-300">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;