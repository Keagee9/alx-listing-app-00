// components/layout/Header.tsx
import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/logo.svg" alt="Logo" width={120} height={40} className="mr-2" />
        </div>

        {/* Search Bar (central) */}
        <div className="flex-grow flex justify-center mb-4 md:mb-0">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        {/* Auth Buttons and Accommodation Types */}
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Rooms</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Mansion</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Countryside</a>
            {/* Add more categories as needed */}
          </nav>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;