import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { MdHome, MdWork } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom'; // Optional if using React Router

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-600">MyProjects</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-gray-700 font-medium">
          <li className="flex items-center gap-1 hover:text-indigo-600 transition">
            <MdHome size={20} />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-1 hover:text-indigo-600 transition">
            <MdWork size={20} />
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a
              href="https://github.com/Javed-Shekh777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-indigo-600 transition"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/md-javed-shekh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-indigo-600 transition"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-3 text-gray-700 font-medium">
          <li className="flex items-center gap-2">
            <MdHome size={20} />
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <MdWork size={20} />
            <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          </li>
          <li className="flex items-center gap-2">
            <FaGithub size={20} />
            <a href="https://github.com/Javed-Shekh777" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li className="flex items-center gap-2">
            <FaLinkedin size={20} />
            <a href="https://www.linkedin.com/in/md-javed-shekh/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;