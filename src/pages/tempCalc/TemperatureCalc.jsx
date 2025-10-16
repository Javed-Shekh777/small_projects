import React, { useState } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



const TemperatureCalc = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [kelvin, setKelvin] = useState('');   



    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value);

        if(isNaN(value) && value !== ''){
            alert("Please enter a valid number");
            return;
        }
        if (!isNaN(value) || value === '') {
           switch(name){
             case 'celsius':
                setCelsius(value);
                setFahrenheit(((value * 9/5) + 32).toFixed(4));
                setKelvin((parseFloat(value) + 273.15).toFixed(4));
                break;
            case 'fahrenheit':
                setFahrenheit(value);
                setCelsius(((value - 32) * 5/9).toFixed(4));
                setKelvin((((value - 32) * 5/9) + 273.15).toFixed(4));
                break;
            case 'kelvin':
                setKelvin(value);
                setCelsius((value - 273.15).toFixed(4));
                setFahrenheit((((value - 273.15) * 9/5) + 32).toFixed(4));
                break;        
           }
        }
    }

    // Conditions check
   

    return (
        <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 ">
            <div className="bg-white rounded-2xl shadow-xl w-[350px] sm:mx-5 m-2.5">
                {/* Header */}
                <div className="flex p-5 items-center justify-center gap-x-2 shadow mb-4 border-b border-b-[rgba(0,0,0,0.1)] pb-3">
                    <a href='/'><MdHomeFilled size={24} className="text-indigo-600" /></a>
                    <h1 className="text-xl font-semibold text-gray-800">Temperature Calculator</h1>
                </div>

                <div className="flex flex-col gap-y-4 p-5">
                    <div className="flex  gap-x-3 items-center">
                        <label htmlFor="celsius" className='text-lg font-semibold w-32'>Celsius</label>
                        <input
                            type="text"
                            placeholder="Enter celcius"
                            id='celsius'
                            value={celsius}
                            autoFocus="on"
                            onChange={handleChange}
                            name='celsius'
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="flex  gap-x-3 items-center">
                        <label htmlFor="kelvin" className='text-lg font-semibold w-32'>Kelvin</label>
                        <input
                            type="text"
                            placeholder="Enter kelvin"
                            id='kelvin'
                            name='kelvin'
                            onChange={handleChange}
                            value={kelvin}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="flex  gap-x-3 items-center">
                        <label htmlFor="fahrenheit" className='text-lg font-semibold w-32 '>Fahrenheit</label>
                        <input
                            type="text"
                            placeholder="Enter fahrenheit"
                            id='fahrenheit'
                            onChange={handleChange}
                            name='fahrenheit'
                            value={fahrenheit}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                </div>







            </div>
        </main>
    );
};

export default TemperatureCalc;
