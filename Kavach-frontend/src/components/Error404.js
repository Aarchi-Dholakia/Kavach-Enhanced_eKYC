import React from 'react';
import { Link } from 'react-router-dom';
import logo404 from '../assets/404.png'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}>
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <div className='w-100'>
          <img src={logo404} alt="Not Found" className="mx-auto w-80" />
        </div>
        <p className="text-2xl text-gray-700 mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block text-xl text-blue-600 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
          Go to Home
        </Link>
      </div>
      <div className="mt-8">
      </div>
    </div>
  );
}

export default NotFound;
