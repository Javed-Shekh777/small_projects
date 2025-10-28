import React, { useState } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';



const BMICalc = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const h = parseFloat(height);
        const w = parseFloat(weight);

        if (h > 0 && w > 0) {
            const bmi = (w / ((h / 100) ** 2)).toFixed(1);
            setBmiValue(bmi);

            if (bmi < 18.5) setStatus("Underweight");
            else if (bmi >= 18.5 && bmi <= 24.9) setStatus("Normal");
            else if (bmi >= 25 && bmi <= 29.9) setStatus("Overweight");
            else setStatus("Obese");
        } else {
            setBmiValue('');
            setStatus('');
        }
    }, [height, weight]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isNaN(value) && value !== '') {
            alert("Please enter a valid number");
            return;
        }

        if (name === 'height') setHeight(value);
        if (name === 'weight') setWeight(value);
        if (name === 'age') setAge(value);
    };




    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     console.log(name, value);

    //     if (isNaN(value) && value !== '') {
    //         alert("Please enter a valid number");
    //         return;
    //     }
    //     let r;
    //     if (!isNaN(value) || value === '') {
    //         switch (name) {
    //             case 'height':
    //                 setHeight(value);
    //                 r = (weight / (Math.pow(height / 100))).toFixed(1);
    //                 break;
    //             case 'weight':
    //                 setWeight(value);
    //                 r = (weight / (Math.pow(height / 100))).toFixed(1);
    //                 break;
    //         }
    //         setBmiValue(r);
    //     }
    //     if (b < 18.5) setStatus("Underweight");
    //     else if (bmiValue >= 18.5 && bmiValue <= 24.9) setStatus("Normal");
    //     else if (bmiValue >= 25 && bmiValue <= 29.9) setStatus("Overweight");
    //     else setStatus("Obese");
    // }

    const getColor = () => {
        if (status === "Underweight") return "text-blue-400";
        if (status === "Normal") return "text-green-500";
        if (status === "Overweight") return "text-orange-500";
        if (status === "Obese") return "text-red-600";
        return "text-gray-700";
    };


    return (
        <main className="h-full w-full py-12 flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 ">
            <div className="bg-white rounded-2xl shadow-xl w-[350px] sm:mx-5 m-2.5">
                {/* Header */}
                <div className="flex p-5 items-center justify-center gap-x-2 shadow mb-4 border-b border-b-[rgba(0,0,0,0.1)] pb-3">
                    <a href='/'><MdHomeFilled size={24} className="text-indigo-600" /></a>
                    <h1 className="text-xl font-semibold text-gray-800">BMI Calculator</h1>
                </div>

                <div className="flex flex-col gap-y-3 p-5">
                    {bmiValue && (
                        <div className="text-center mt-4">
                            <p className="text-lg font-semibold">
                                Your BMI: <span className={getColor()}>{bmiValue}</span>
                            </p>
                            <p className={`text-xl font-bold ${getColor()}`}>{status}</p>
                        </div>
                    )}

                    <div className="flex  gap-x-3 items-center">
                        <label htmlFor="height" className='text-lg font-semibold w-32'>Height (cm)</label>
                        <input
                            type="text"
                            placeholder="Enter height (cm)"
                            id='height'
                            value={height}
                            autoFocus="on"
                            onChange={handleChange}
                            name='height'
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="flex  gap-x-3 items-center">
                        <label htmlFor="weight" className='text-lg font-semibold w-32'>Weight (kg)</label>
                        <input
                            type="text"
                            placeholder="Enter weight (kg)"
                            id='weight'
                            name='weight'
                            onChange={handleChange}
                            value={weight}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="flex  gap-x-3 items-center">
                        <label htmlFor="age" className='text-lg font-semibold w-32 '>Age</label>
                        <input
                            type="text"
                            placeholder="Enter age"
                            id='age'
                            onChange={handleChange}
                            name='age'
                            value={age}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BMICalc;
