import React, { useState } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const AgeCalculator = () => {

    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');


   const calcAge = () => {
  if (!dob) {
    alert('Please enter your DOB');
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const result = `Years: ${years}, Months: ${months}, Days: ${days}`;
  setAge(result);
  setDob('');
};




    return (
        <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 ">
            <div className="bg-white rounded-2xl shadow-xl w-[350px] sm:mx-5 m-2.5">
                {/* Header */}
                <div className="flex p-5 items-center justify-center gap-x-2 shadow mb-4 border-b border-b-[rgba(0,0,0,0.1)] pb-3">
                    <a href='/'><MdHomeFilled size={24} className="text-indigo-600" /></a>
                    <h1 className="text-xl font-semibold text-gray-800">Age Calculator</h1>
                </div>

                <div className="flex flex-col gap-y-2  p-5">
                    <div className="flex  gap-x-3 items-center">
                        <label htmlFor="age" className='text-lg font-semibold'>DOB: </label>
                        <input
                            type="text"
                            placeholder="Ex. xx/xx/xxxx"
                            id='age'
                            value={dob}
                            autoFocus="on"
                            onChange={(e) => setDob(e.target.value)}
                            name='age'
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    {age && <div className='font-semibold'>Your Age: {age}</div>}
                    <button type="button" onClick={() => calcAge()} className='p-2.5 bg-blue-400 cursor-pointer hover:bg-blue-500 text-white rounded-lg my-2'>Calcuate</button>
                </div>







            </div>
        </main>
    );
}

export default AgeCalculator


