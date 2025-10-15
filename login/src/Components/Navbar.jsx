import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-blue-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          MyApp
        </Link>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <div className={`md:flex md:items-center space-x-6 absolute md:static w-full md:w-auto bg-blue-700 md:bg-transparent left-0 md:left-auto top-16 md:top-0 p-4 md:p-0 transition-all duration-300 ${isOpen ? "" : "hidden md:flex"}`}>
          <Link to="/" className="block py-2 px-4 text-white hover:text-blue-200">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-white hover:text-blue-200">About</Link>
          <Link to="/login" className="block py-2 px-4 text-white hover:text-blue-200">Login</Link>
          <Link to="/register" className="block py-2 px-4 text-white hover:text-blue-200">Registration</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
