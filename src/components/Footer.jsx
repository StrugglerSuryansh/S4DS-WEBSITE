// components/Footer.js
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
            <p className="mb-4">&copy; 2024 College Departmental Society. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300"><Facebook size={24} /></a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300"><Twitter size={24} /></a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300"><Instagram size={24} /></a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300"><Linkedin size={24} /></a>
            </div>
        </div>
    </footer>
);

export default Footer;