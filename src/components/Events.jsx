import React from 'react';

const Events = () => {
  const events = [
    { id: 1, title: 'Annual Hackathon', date: 'October 15-17, 2023' },
    { id: 2, title: 'AI Workshop Series', date: 'Every Tuesday, Sept - Nov 2023' },
    { id: 3, title: 'Tech Talk: Future of Quantum Computing', date: 'November 5, 2023' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102"
          >
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;