import { MdHomeFilled } from 'react-icons/md';
import React, { useState } from 'react';
import { FaPlus, FaCheckCircle, FaMinus, FaChevronDown, FaLongArrowAltRight } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { } from 'react-icons/fa';


const Accordian = () => {

    const [icon, setIcon] = useState(<FaPlus />);
    const [cutIcon, setCutIcon] = useState(<FaMinus />);
    const [modelOpen, setModelOpen] = useState(false);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");






    const [accordianData, setAccordianData] = useState([
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
            isOpen: false,
        },
    ]);



    const [icons, setIcons] = useState([{
        id: 1,
        icon: <FaPlus size={18} />,
        cutIcon: <FaMinus />,
        name: "Plus/Minus"
    }, {
        id: 2,
        icon: <CiCirclePlus size={25} />,
        cutIcon: <CiCircleMinus />,
        name: "Circle Plus/Minus"
    }, {
        id: 3,
        icon: <MdKeyboardArrowDown size={25} />,
        cutIcon: <MdKeyboardArrowUp />,
        name: "Arrow Down/Up"
    }]);


    const toggleAccordian = (id) => {
        setAccordianData((prev) => prev.map((item) => item.id === id ? { ...item, isOpen: !item.isOpen } : item));
    };


    const changeIcon = (iconComponent, cutIconComponent) => {
        setIcon(iconComponent);
        setCutIcon(cutIconComponent);
    };



    const addQuestion = (e) => {
        e.preventDefault();
        alert("Functionality to be added soon!");
        if (question.trim() === "" || question.trim() === "") return;
        if (answer.trim() === "" || answer.trim() === "") return;

        const newQuestion = {
            id:accordianData.length+1,
            question: question,
            answer: answer,
            isOpen: false,
        }

        setAccordianData((prev)=>[...prev,newQuestion]);
        setQuestion("");
        setAnswer("");
        setModelOpen(false);
    }

    return (
        <section className="min-h-screen flex flex-col items-center w-full bg-gray-50 text-gray-800">
            <header className="flex  gap-3 p-6 sm:p-10 ">
                <a href="/" aria-label="Home">
                    <MdHomeFilled size={28} className="text-indigo-600 hover:text-indigo-800 transition" />
                </a>
                <h1 className="text-2xl font-bold">Accordian</h1>
            </header>

            <div className="rounded-2xl bg-white p-4 shadow-lg mb-6 w-full max-w-md flex justify-between items-center m-2">
                <button onClick={()=>setModelOpen(!modelOpen)} type="button" className='py-1.5 px-4 cursor-pointer hover:bg-pink-500 text-white rounded bg-pink-400 text-lg uppercase' >Add</button>

                <IconDropdown icons={icons} selectedIcon={icon} changeIcon={changeIcon} />

            </div>

            <ul className="select w-full max-w-md px-4">
                {accordianData.map((item) => {
                    return (
                        <li key={item.id} className="rounded-lg bg-gray-100 shadow  mb-2 cursor-pointer hover:bg-gray-200 transition">
                            <div className="flex justify-between items-center p-3">
                                <div className="flex items-center w-full">
                                    <FaCheckCircle className="h-[25px] w-[25px] text-green-500 mr-2" />
                                    <h3 className="text-lg font-semibold">{item.question}</h3>
                                </div>
                                <p onClick={() => toggleAccordian(item.id)} className="text-xl text-gray-600 hover:text-gray-800 transition">
                                    {item.isOpen ? cutIcon : icon}
                                </p>
                            </div>
                            {item.isOpen && <p className=" text-gray-700 bg-white w-full p-3 transition-all ease-in-out duration-300">{item.answer}</p>}

                        </li>
                    )
                })}

            </ul>

            {modelOpen && <div className="modal  h-screen w-full fixed top-0 left-0 bg-black/50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Add New Question</h2>
                    <form className="space-y-4" onSubmit={addQuestion}>
                        <div>
                            <label className="block text-gray-700">Question:</label>
                            <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} className="w-full border border-gray-300 p-2 rounded mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Answer:</label>
                            <textarea value={answer} onChange={(e)=>setAnswer(e.target.value)} className="w-full border border-gray-300 p-2 rounded mt-1" rows="4"></textarea>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button onClick={()=>setModelOpen(false)} type="button" className="px-4 py-2 cursor-pointer bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition">Cancel</button>
                            <button  type="submit" className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add</button>
                        </div>
                    </form>
                </div>
            </div>}




        </section>
    )
}

export default Accordian

const IconDropdown = ({ icons, selectedIcon, changeIcon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
            >
                Select Icon
                <FaChevronDown className="ml-2" />
            </button>

            {isOpen && (
                <ul className="changeIcon absolute z-10 mt-2 w-fit bg-white border border-gray-300 rounded shadow-lg">
                    {icons.map((item) => {

                        return (
                            <li
                                onClick={() => {
                                    changeIcon(item.icon, item.cutIcon);
                                    setIsOpen(false);
                                }}

                                key={item.id}
                                className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition cursor-pointer"
                            >
                                {selectedIcon}
                                <FaLongArrowAltRight className="h-[20px] w-[20px] mx-2" />
                                <p className=''>{item.icon}</p>

                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
