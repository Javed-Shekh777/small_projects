


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MdHomeFilled } from 'react-icons/md'

const PasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [len, setLen] = useState(5);
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(true);
    const [symbols, setSymbols] = useState(false);
    const [number, setNumber] = useState(false);
    const [message, setMessage] = useState(false);



    const toggle = (fun, val) => {
        fun(!val);
    }

    const generatePassword = (e) => {
        setLen(e.target.value);
        const l = 'abcdefghijklmnopqrstuvwxyz';
        const u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const n = '0123456789';
        const s = '~!@#$%^&*()/\\';

        let chars = '';
        if (lowercase) chars += l;
        if (uppercase) chars += u;
        if (number) chars += n;
        if (symbols) chars += s;

        if (chars.length === 0) chars = l; // default lowercase

        let ps = '';
        for (let i = 0; i < len; i++) {
            ps += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        console.log(ps);

        setPassword(ps);
    };


const copyText = () => {
  window.navigator.clipboard.writeText(password);
  setMessage(true);
  setTimeout(() => {
    setMessage(false);
  }, 2000); // ✅ Use a number, not [2000]
};


    return (
        <main className="min-h-screen w-full flex items-center justify-center  p-4">
            <div className=" rounded-3xl shadow-2xl w-full max-w-sm p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <a href="/" aria-label="Home">
                        <MdHomeFilled size={28} className="text-indigo-600 hover:text-indigo-800 transition" />
                    </a>
                    <h1 className="text-2xl font-bold text-gray-800">Password Generator</h1>
                </div>
                {password}

                {/* Display */}
                <div className="mb-4 relative">
                    <input
                        type="text"
                        readOnly
                        value={password}
                        className="w-full px-4 py-2 border rounded-md text-lg font-mono bg-gray-50"
                    />
                    <button type="button" onClick={copyText} className='p-1.5 active:scale-95 rounded text-white bg-pink-300 absolute right-2 top-[4px]'>Copy</button>
                </div>

                <div className="space-y-2 mb-4">
                    <label className="flex items-center justify-between">
                        <span>Length: {len}</span>
                        <input
                            type="range"
                            min='5'
                            max="30"
                            value={len}
                            // onChange={(e) => setLen(e.target.value)}
                            onChange={(e) => generatePassword(e)}
                            className="w-2/3"
                        />
                    </label>

                    <label className="flex items-center justify-between">
                        <span>Include Uppercase</span>
                        <input type="checkbox" checked={uppercase}
                            onChange={(e) => toggle(setUppercase, uppercase)}
                            className='accent-blue-500 h-5 w-5'
                        />
                    </label>

                    <label className="flex items-center justify-between">
                        <span>Include Lowercase</span>
                        <input type="checkbox" checked={lowercase}
                            onChange={(e) => toggle(setLowercase, lowercase)}
                            className='accent-blue-500 h-5 w-5'
                        />
                    </label>

                    <label className="flex items-center justify-between">
                        <span>Include Numbers</span>
                        <input type="checkbox" checked={number}
                            onChange={(e) => toggle(setNumber, number)}
                            className='accent-blue-500 h-5 w-5'
                        />
                    </label>

                    <label className="flex items-center justify-between">
                        <span>Include Symbols</span>
                        <input type="checkbox" checked={symbols} className='accent-blue-500 h-5 w-5' onChange={(e) => toggle(setSymbols, symbols)} />
                    </label>
                </div>

                {/* <button
                    onClick={generatePassword}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Generate Password
                </button> */}

                {message && <button type='button'  className='fixed top-32 left-[43%] px-5 py-2 cursor-pointer bg-white shadow rounded-2xl'>Password copied to clipboard!</button>}

            </div>
        </main>
    )
}

export default PasswordGenerator
