

import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBookmark } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="h-16 flex justify-between items-center px-4 sm:px-6 md:px-10 bg-white shadow-md relative">
      {/* Left Section - Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Middle Section - Logo */}
      <section className="flex items-center space-x-2">
        <Link className="flex items-center space-x-2" to="/">
          <img src="src/assets/Clip path group.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-lg font-bold">TripGo</h1>
        </Link>
      </section>

      {/* Desktop Navigation Links */}
      <section className="hidden md:flex items-center space-x-6">
        <Link to="/home" className="text-gray-700 hover:text-black">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-black">About Us</Link>
        <Link to="/tours" className="text-gray-700 hover:text-black">Tours</Link>
        <Link to="/prices" className="text-gray-700 hover:text-black">Prices</Link>
      </section>

      {/* Right Section - Icons & Buttons */}
      <section className="hidden md:flex items-center space-x-4">
        <div
          className="border rounded-full p-2 hover:bg-gray-100 cursor-pointer relative flex items-center"
          onMouseEnter={() => setIsSearchOpen(true)}
          onMouseLeave={() => setIsSearchOpen(false)}
        >
          <CiSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className={`absolute right-10 w-0 opacity-0 transition-all duration-300 bg-gray-100 px-3 py-1 rounded-full focus:outline-none focus:w-40 focus:opacity-100 ${isSearchOpen ? "w-40 opacity-100" : ""}`}
          />
        </div>
        <div className="border rounded-full p-2 hover:bg-gray-100 cursor-pointer">
          <HiOutlineBookmark size={20} />
        </div>
        <button className="px-4 py-1 border rounded-2xl text-gray-700 hover:bg-gray-200">Login</button>
      
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link to="/home" className="text-gray-700 hover:text-black">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-black">About Us</Link>
            <Link to="/tours" className="text-gray-700 hover:text-black">Tours</Link>
            <Link to="/prices" className="text-gray-700 hover:text-black">Prices</Link>
            <div className="flex items-center space-x-4">
              <div className="border rounded-full p-2 hover:bg-gray-100 cursor-pointer">
                <CiSearch size={20} />
              </div>
              <div className="border rounded-full p-2 hover:bg-gray-100 cursor-pointer">
                <HiOutlineBookmark size={20} />
              </div>
            </div>
            <button className="px-4 py-1 border rounded-2xl text-gray-700 hover:bg-gray-200">Login</button>
       
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
