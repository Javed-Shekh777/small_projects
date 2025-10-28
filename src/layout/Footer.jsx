import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { MdHome, MdWork } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom'; // Optional if using React Router

const Footer = () => {
    return (
        <footer className="bg-indigo-600 text-white py-6 mt-10">
            <div className="flex justify-center gap-6">
                <a href="https://github.com/Javed-Shekh777" target="_blank" className="hover:text-gray-300">GitHub</a>
                <a href="https://www.linkedin.com/in/md-javed-shekh/" target="_blank" className="hover:text-gray-300">LinkedIn</a>
                <a href="mailto:mdjavedshekh777@gmail.com" className="hover:text-gray-300">Email</a>
            </div>
            <p className="text-center text-sm mt-4">© 2025 JAVED AKHTAR. All rights reserved.</p>
        </footer>

    );
}

export default Footer
