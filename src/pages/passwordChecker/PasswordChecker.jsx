import React, { useState } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



const PasswordChecker = () => {
    const [password, setPassword] = useState("");

    // Conditions check
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasMinLength = password.length >= 6;

    // Level calculation
    const level = [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, hasMinLength]
        .filter(Boolean).length;

    return (
        <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[350px]">
                {/* Header */}
                <div className="flex items-center gap-x-2 mb-4">
                    <a href='/'><MdHomeFilled size={24} className="text-indigo-600" /></a>
                    <h1 className="text-xl font-semibold text-gray-800">Password Checker</h1>
                </div>

                {/* Input */}
                <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                {/* Strength bar */}
                <div className="flex items-center w-full my-4 gap-x-1">
                    <div className={`flex-1 h-2 rounded-md ${level >= 1 ? "bg-red-500" : "bg-gray-200"}`}></div>
                    <div className={`flex-1 h-2 rounded-md ${level >= 3 ? "bg-yellow-500" : "bg-gray-200"}`}></div>
                    <div className={`flex-1 h-2 rounded-md ${level >= 5 ? "bg-green-500" : "bg-gray-200"}`}></div>
                </div>

                {/* Status */}
                <p className="text-center text-sm font-medium text-gray-600 mb-3">
                    {level === 0 && "Enter a password"}
                    {level > 0 && level < 3 && "Weak"}
                    {level >= 3 && level < 5 && "Medium"}
                    {level === 5 && "Strong"}
                </p>

                {/* Conditions */}
                <div className="space-y-2 text-sm">
                    <p className={`flex items-center gap-2 ${hasUpperCase ? "text-green-600" : "text-gray-500"}`}>
                        {hasUpperCase ? <FaCheckCircle size={20} /> : <RxCross2 size={20} className='font-bold text-red-500' />} At least 1 uppercase letter
                    </p>
                    <p className={`flex items-center gap-2 ${hasLowerCase ? "text-green-600" : "text-gray-500"}`}>
                        {hasLowerCase ? <FaCheckCircle size={20} /> : <RxCross2 size={20} className='font-bold text-red-500' />} At least 1 lowercase letter
                    </p>
                    <p className={`flex items-center gap-2 ${hasNumber ? "text-green-600" : "text-gray-500"}`}>
                        {hasNumber ? <FaCheckCircle size={20} /> : <RxCross2 size={20} className='font-bold text-red-500' />} At least 1 number
                    </p>
                    <p className={`flex items-center gap-2 ${hasSpecialChar ? "text-green-600" : "text-gray-500"}`}>
                        {hasSpecialChar ? <FaCheckCircle size={20} /> : <RxCross2 size={20} className='font-bold text-red-500' />} At least 1 special character
                    </p>
                    <p className={`flex items-center gap-2 ${hasMinLength ? "text-green-600" : "text-gray-500"}`}>
                        {hasMinLength ? <FaCheckCircle size={20} /> : <RxCross2 size={20} className='font-bold text-red-500' />} Minimum 6 characters
                    </p>
                </div>
            </div>
        </main>
    );
};

export default PasswordChecker;
