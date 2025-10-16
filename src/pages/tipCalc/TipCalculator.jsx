import React, { useState } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";



const TipCalculator = () => {
    const [tip, setTip] = useState('');
    const [amount, setAmount] = useState('');
    const [totalTip, setTotalTip] = useState('');
     const [text, setText] = useState('')






    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name, value);

        if (isNaN(value) && value !== '') {
            alert("Please enter a valid number");
            return;
        }

        if (!isNaN(value) || value === '') {
            switch (name) {
                case 'amount':
                    setAmount(value);
                    break;
                case 'tip':
                    setTip(value);
                    break;
            }
        }

        if (amount && tip) {
            let calculatedTip = (parseFloat(amount) * parseFloat(tip)) / 100;
            setTotalTip(calculatedTip.toFixed(3));
        }

    }

    const copyText = () => {
        window.navigator.clipboard.writeText(totalTip);
        // alert("Copied to clipboard");
        triggerBubbles();
    }

     const triggerBubbles = () => {
        setText("Copied");
        setTimeout(() => {
            setText("");
        }, 2000);
  }


    // Conditions check


    return (
        <main className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 ">
            <div className="bg-white rounded-2xl shadow-xl w-[350px] sm:mx-5 m-2.5">
                {/* Header */}
                <div className="flex p-5 items-center justify-center gap-x-2 shadow mb-4 border-b border-b-[rgba(0,0,0,0.1)] pb-3">
                    <a href='/'><MdHomeFilled size={24} className="text-indigo-600" /></a>
                    <h1 className="text-xl font-semibold text-gray-800">Tip Calculator</h1>
                </div>

                <div className="flex flex-col gap-y-4 p-5">
                    <div className="flex flex-col gap-y-1 ">
                        <label htmlFor="amount" className='text-lg font-semibold '>Total Bill Amount</label>
                        <input
                            type="text"
                            placeholder="Enter total bill amount"
                            id='amount'
                            value={amount}
                            autoFocus="on"
                            onChange={handleChange}
                            name='amount'
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="flex flex-col gap-y-1 ">
                        <label htmlFor="kelvin" className='text-lg font-semibold'>Tip Percentage(%)</label>
                        <input
                            type="text"
                            placeholder="Enter Tip percentage"
                            id='tip'
                            name='tip'
                            onChange={handleChange}
                            value={tip}
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                </div>


                <div className="shadow relative bg-white rounded-2xl flex gap-x-2 items-center justify-between p-3 m-5 border border-[rgba(0,0,0,0.1)]">
                    <p>{totalTip ? totalTip : "0.0"}</p>
                    <div className="relative inline-block">
                        <button
                            type="button"
                            onClick={copyText}
                            className="px-3 py-2 cursor-pointer rounded-lg text-white bg-blue-400 hover:bg-blue-500 relative z-10"
                        >
                            Copy
                        </button>

                        <div className={`absolute top-[-40px] right-0 bg-green-800 text-white text-sm rounded-md px-3 py-1 transition-opacity duration-300 ${text ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            <div className="flex items-center gap-x-1">
                                <FaCheckCircle />
                                <span>{text}</span>
                            </div>
                        </div>

                        
                    </div>
                </div>







            </div>
        </main>
    );
};

export default TipCalculator;


