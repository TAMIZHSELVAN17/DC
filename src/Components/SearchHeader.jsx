import React from 'react';
import { Search } from 'lucide-react';
import logo from '../assets/Daas Computers LOGO.png'; // Update path if needed

const SearchHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src={logo}
              alt="Dass Computers Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-blue-900 tracking-wide">
              Dass Computers
            </span>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-[500px] flex rounded-full overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 shadow-sm transition">
            <select className="bg-gray-100 px-3 py-2 text-gray-700 text-sm border-r border-gray-300 focus:outline-none w-36">
              <option>All Categories</option>
              <option>Accessories</option>
              <option>Laptops</option>
              <option>Desktops</option>
              <option>Monitors</option>
            </select>
            <input
              type="text"
              placeholder="Search products, accessories..."
              className="flex-grow px-4 py-2 text-sm focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 flex items-center justify-center transition">
              <Search size={18} />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
