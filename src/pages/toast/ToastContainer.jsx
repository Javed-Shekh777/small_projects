import React, { useState } from 'react'
import { MdHomeFilled, MdOutlineWarning, MdCheckBox, MdOutlineError, MdDangerous } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const ToastContainer = () => {

    const directions = [
        {
            id: 1,
            dir: "top-left",
            isActive: false
        },
        {
            id: 2,
            dir: "top-center",
            isActive: false
        },
        {
            id: 3,
            dir: "top-right",
            isActive: false
        },
        {
            id: 4,
            dir: "center-left",
            isActive: false
        },
        {
            id: 5,
            dir: "center-center",
            isActive: false
        },
        {
            id: 6,
            dir: "center-right",
            isActive: false
        },
        {
            id: 7,
            dir: "bottom-left",
            isActive: false
        },
        {
            id: 8,
            dir: "bottom-center",
            isActive: false
        },
        {
            id: 9,
            dir: "bottom-right",
            isActive: false
        },
    ];


    const [message, setMessage] = useState('');
    const [duration, setDuration] = useState(2);
    const [msgType, setMsgType] = useState('success');
    const [showToast, setShowToast] = useState(false);
    const [icon, setIcon] = useState(<MdCheckBox className="text-green-500" />);
    const [activeDirection, setActiveDirection] = useState('top-center');


    const notify = (direction) => {
        setActiveDirection(direction);

        switch (msgType) {
            case 'success':
                setIcon(<MdCheckBox className="text-green-500" />);
                break;
            case 'warning':
                setIcon(<MdOutlineWarning className="text-yellow-500" />);
                break;
            case 'error':
                setIcon(<MdDangerous className="text-red-500" />);
                break;
            case 'info':
                setIcon(<MdOutlineError className="text-blue-500" />);
                break;
            default:
                setIcon(<MdCheckBox className="text-green-500" />);
        }

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
            setMessage('');
            setIcon(<MdCheckBox className="text-green-500" />);
        }, duration * 1000);
    };


    return (
        <section>
            <header className="flex items-center justify-center gap-3 p-3 sm:p-5">
                <a href="/" aria-label="Home">
                    <MdHomeFilled size={28} className="text-indigo-600 hover:text-indigo-800 transition" />
                </a>
                <h1 className="text-2xl font-bold">Toast Notifications</h1>
            </header>
            <hr className='mb-3' />


            <div

                className="sm:flex   shadow sm:bg-black bg-transparent text-white rounded-2xl my-10 gap-4 sm:space-0 space-y-4 m-4 p-4  justify-between mx-auto max-w-4xl">
                {/* Message Input */}
                <div className="flex flex-col gap-y-2 sm:gap-y-4 flex-1 sm:bg-transparent bg-black rounded-2xl sm:p-0 p-3 ">
                    <label htmlFor="message" className="font-medium text-sm">Message</label>
                    <input
                        type="text"
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message"
                        className="border rounded-md p-2"
                    />
                </div>

                {/* Message Type Selector */}
                <div className="flex flex-col gap-y-2 sm:gap-y-4 flex-1 sm:bg-transparent bg-black rounded-2xl sm:p-0 p-3">
                    <label htmlFor="msgType" className="font-medium text-sm">Type</label>
                    <select
                        name="msgType"
                        id="msgType"
                        value={msgType}
                        onChange={(e) => setMsgType(e.target.value)}
                        className="border rounded-md p-2 bg-black hover:text-red-500"
                    >
                        <option value="success">Success</option>
                        <option value="error">Error</option>
                        <option value="warning">Warning</option>
                        <option value="info">Info</option>
                    </select>
                </div>

                {/* Duration Input */}
                <div className="flex flex-col gap-y-2 sm:gap-y-4 flex-1 sm:bg-transparent bg-black rounded-2xl sm:p-0 p-3">
                    <label htmlFor="duration" className="font-medium text-sm">Duration (seconds)</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        placeholder="Enter duration"
                        className="border rounded-md p-2"
                    />
                </div>
            </div>


            <div className="flex flex-wrap gap-4 p-4 mx-auto sm:px-14">

                {/* {directions?.map((d) => {
                    // Generate a hex color from the ID (example logic)
                    const hex = `#${((d.id * 123456) % 0xffffff).toString(16).padStart(6, '0')}`;

                    return (
                        <button
                            key={d.id}
                            id={d.id}
                            onClick={() => notify(d.dir)}
                            style={{ backgroundColor: hex }}
                            className="hover:bg-green-600 text-white px-4 py-2 rounded cursor-pointer"
                        >
                            {d.dir}
                        </button>
                    );
                })} */}
                {directions.map((d) => (
                    <button
                        key={d.id}
                        onClick={() => notify(d.dir)}
                        className={`px-4 py-2 rounded text-white ${activeDirection === d.dir ? "bg-blue-600" : "bg-gray-400"
                            }`}
                    >
                        {d.dir}
                    </button>
                ))}

                {showToast &&

                    <Toast
                        msg={message}
                        icon={icon}
                        onClose={() => setShowToast(false)}
                        position={activeDirection}
                    />

                }

                {/* {showToast && message && <Toast onClose={() => setShowToast(false)} icon={<MdCheckBox className='text-green-500 ' />} msg={message} />} */}


                {/* <ToastContainer position="top-right" autoClose={3000} /> */}
            </div>



        </section>
    )
}

export default ToastContainer


const Toast = ({ msg, icon, onClose, position }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const getPositionClass = (dir) => {
        const map = {
            'top-left': 'top-5 left-5',
            'top-center': 'top-5 left-1/2 -translate-x-1/2',
            'top-right': 'top-5 right-5',
            'center-left': 'top-1/2 left-5 -translate-y-1/2',
            'center-center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'center-right': 'top-1/2 right-5 -translate-y-1/2',
            'bottom-left': 'bottom-5 left-5',
            'bottom-center': 'bottom-5 left-1/2 -translate-x-1/2',
            'bottom-right': 'bottom-5 right-5',
        };
        return map[dir] || 'top-5 left-1/2 -translate-x-1/2';
    };

    const handleClose = () => {
        setFadeOut(true);
        setTimeout(() => {
            onClose();
        }, 400); // match fadeOut duration
    };


    return (
        <section
            className={`fixed ${getPositionClass(position)} shadow bg-white w-fit p-3 rounded-lg flex items-center transition-all duration-300
        ${fadeOut ? 'animate-fadeOut' : 'animate-fadeIn'}
      `}

        >
            <div className="icon mr-2">{icon}</div>
            <p className="message text-red-500">{msg}</p>
            <div className="cut cursor-pointer ml-2" onClick={onClose}>
                <RxCross2 />
            </div>
        </section>
    );
};
