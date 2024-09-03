// components/Events.js
import React from 'react';
import { Camera, Users, Briefcase } from 'lucide-react';

const EventCard = ({ Icon, title, date }) => (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <Icon className="mx-auto text-blue-600 mb-4" size={48} />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{date}</p>
    </div>
);

const Events = () => (
    <section id="events" className="py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard Icon={Users} title="Annual Department Mixer" date="September 15" />
            <EventCard Icon={Camera} title="Guest Lecture Series" date="October 5" />
            <EventCard Icon={Briefcase} title="Career Fair" date="November 20" />
        </div>
    </section>
);

export default Events;