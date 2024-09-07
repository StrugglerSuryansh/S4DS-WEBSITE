import React from 'react';

const Header = () => (
    <header className="fixed top-0 z-50 w-full text-white bg-blue-600">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
            <div className="text-2xl font-bold size-12">
                <img src="./S4DS.jpg" alt="logo" className="bg-transparent rounded-full" />
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#home" className="transition-colors duration-300 hover:text-blue-200">Home</a></li>
                    <li><a href="#about" className="transition-colors duration-300 hover:text-blue-200">About</a></li>
                    <li><a href="#events" className="transition-colors duration-300 hover:text-blue-200">Events</a></li>
                    <li><a href="#contact" className="transition-colors duration-300 hover:text-blue-200">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;