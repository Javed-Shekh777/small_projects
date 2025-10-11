import React, { useState } from 'react';
import {
  MdHomeFilled,
  MdOutlineBackspace,
  MdPercent
} from 'react-icons/md';
import { TbPlusMinus } from 'react-icons/tb';
import {
  FaDivide,
  FaMinus,
  FaPlus,
  FaEquals
} from 'react-icons/fa6';
import { RxCross2, RxDotFilled } from 'react-icons/rx';

const Calculator = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const val = e.currentTarget.value;
    setText((prev) => prev + val);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <a href="/" aria-label="Home">
            <MdHomeFilled size={28} className="text-indigo-600 hover:text-indigo-800 transition" />
          </a>
          <h1 className="text-2xl font-bold text-gray-800">Smart Calculator</h1>
        </div>

        {/* Display */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-20 text-right text-4xl font-semibold p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="0"
          autoFocus
        />

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {[
            { label: 'AC', value: 'AC', className: 'bg-orange-400 text-white' },
            { icon: <MdOutlineBackspace />, value: 'backspace', className: 'bg-orange-400 text-white' },
            { icon: <TbPlusMinus />, value: '^', className: 'bg-orange-400 text-white' },
            { icon: <FaDivide />, value: '/', className: 'bg-yellow-500 text-white' },
            '7', '8', '9',
            { icon: <RxCross2 />, value: '*', className: 'bg-yellow-500 text-white' },
            '4', '5', '6',
            { icon: <FaMinus />, value: '-', className: 'bg-yellow-500 text-white' },
            '1', '2', '3',
            { icon: <FaPlus />, value: '+', className: 'bg-yellow-500 text-white' },
            { icon: <MdPercent />, value: '%', className: 'bg-yellow-500 text-white' },
            '0',
            { icon: <RxDotFilled />, value: '.', className: 'bg-gray-200' },
            { icon: <FaEquals />, value: '=', className: 'bg-yellow-500 text-white' }
          ].map((btn, i) => {
            const isObj = typeof btn === 'object';
            const label = isObj ? btn.label || btn.icon : btn;
            const value = isObj ? btn.value : btn;
            const extraClass = isObj?.className || 'bg-gray-200';
            return (
              <button
                key={i}
                value={value}
                onClick={handleChange}
                className={`h-16 rounded-xl text-xl font-medium flex items-center justify-center shadow hover:scale-105 transition ${extraClass}`}
                aria-label={value}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Calculator;
