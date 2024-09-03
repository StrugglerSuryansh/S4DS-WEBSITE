// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans text-gray-900 leading-normal tracking-wider bg-gray-100">
      <Header />
      <Hero />
      <main className="container mx-auto px-4">
        <About />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;