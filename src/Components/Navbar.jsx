import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 shadow-md"
      style={{ backgroundColor: "#FDD7CD" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-extrabold text-pink-600 tracking-wide cursor-pointer">
          Manisha
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-black">
          <li><a href="#home" className="hover:text-pink-600 transition">Home</a></li>
          <li><a href="#skills" className="hover:text-pink-600 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-600 transition">Projects</a></li>
          <li><a href="#experience" className="hover:text-pink-600 transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-pink-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} color="black" /> : <FaBars size={24} color="black" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#FDD7CD] text-black flex flex-col items-center space-y-4 py-4">
          <li><a href="#home" onClick={toggleMenu} className="hover:text-pink-600 transition">Home</a></li>
          <li><a href="#skills" onClick={toggleMenu} className="hover:text-pink-600 transition">Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-pink-600 transition">Projects</a></li>
          <li><a href="#experience" onClick={toggleMenu} className="hover:text-pink-600 transition">Experience</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-pink-600 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
