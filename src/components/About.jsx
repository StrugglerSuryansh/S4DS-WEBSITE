import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div id='about' className="max-w-4xl mx-auto py-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center">About S4DS</h2>
      <div className="mb-8 flex justify-center space-x-4">
        {['Mission', 'Vision', 'Values'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-2 rounded transition duration-300 ease-in-out ${
              activeTab === tab.toLowerCase()
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn">
        {activeTab === 'mission' && (
          <p className="text-lg">
            Our mission is to inspire and nurture the next generation of tech leaders through hands-on projects, workshops, and networking opportunities.
          </p>
        )}
        {activeTab === 'vision' && (
          <p className="text-lg">
            We envision a vibrant community of tech enthusiasts who collaborate, innovate, and drive positive change through technology.
          </p>
        )}
        {activeTab === 'values' && (
          <p className="text-lg">
            Our core values include innovation, collaboration, inclusivity, continuous learning, and ethical technology use.
          </p>
        )}
      </div>
    </div>
  );
};

export default About;