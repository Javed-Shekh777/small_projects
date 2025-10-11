import React from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import './button.css'; // Optional if you're using Tailwind only

const ButtonEffects = () => {
  return (
    <section className="min-h-screen w-full bg-gray-50 text-gray-800">
      <header className="flex items-center gap-3 p-6 sm:p-10">
        <a href="/" aria-label="Home">
          <MdHomeFilled size={28} className="text-indigo-600 hover:text-indigo-800 transition" />
        </a>
        <h1 className="text-2xl font-bold">Modern Button Effects</h1>
      </header>
      <hr className='mb-3' />

      <article className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 xxl:grid-cols-8 gap-6 px-6 sm:px-10">
        {/* Primary Rounded Button */}
        <button
          className="px-6 py-3 rounded-full bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition"
          aria-label="Primary Hover Button"
        >
          Hover Me
        </button>

        {/* Facebook Style Button */}
        <button
          className="flex items-center h-10 w-40 bg-[#3498db] hover:bg-[#2980b9] text-white rounded overflow-hidden shadow transition"
          aria-label="Facebook Button"
        >
          <span className="w-12 h-full flex items-center justify-center bg-black/10">
            <FaFacebookF size={20} />
          </span>
          <span className="flex-1 text-center">Hover Me</span>
        </button>

        {/* Ghost Button */}
        <button
          className="px-6 py-3 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition"
          aria-label="Ghost Button"
        >
          Hover Me
        </button>

        {/* Gradient Button */}
        <button
          className="px-6 py-3 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
          aria-label="Gradient Button"
        >
          Click Here
        </button>

        {/* Outline Button */}
        <button
          className="px-6 py-3 border-2 border-indigo-500 text-indigo-500 rounded hover:bg-indigo-50 transition"
          aria-label="Outline Button"
        >
          Click Here
        </button>

        {/* Elevated Button */}
        <button
          className="px-6 py-3 bg-white text-gray-800 rounded shadow-md hover:shadow-lg transition"
          aria-label="Elevated Button"
        >
          Click Here
        </button>

        {/* Icon Button */}
        <button
          className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
          aria-label="Info Button"
        >
          <FaFacebookF size={18} />
          Info
        </button>

        {/* Disabled Button */}
        <button
          className="px-6 py-3 bg-gray-300 text-gray-500 rounded cursor-not-allowed"
          disabled
          aria-label="Disabled Button"
        >
          Disabled
        </button>
      </article>
    </section>
  );
};

export default ButtonEffects;
