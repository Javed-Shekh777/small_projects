import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { MdHomeFilled } from 'react-icons/md'

const BgChanger = () => {
    const [bg, setBg] = useState("white");

    const bgChange = (e) => {
        const bgc = e?.target?.value;
        console.log(e);

        if (e && bgc) {
            bgChange(bgc);
            window.document.body.style.background = `${bgc}`;
        } else {
            window.document.body.style.background = bg
        }
    }

    useEffect(() => {
        bgChange();
    }, [bg.bgChange]);

    return (
        <main className="min-h-screen w-full flex items-center justify-center  p-4">
            <div className=" rounded-3xl shadow-2xl w-full max-w-sm p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <a href="/" aria-label="Home">
                        <MdHomeFilled size={28} className="text-indigo-600 hover:text-indigo-800 transition" />
                    </a>
                    <h1 className="text-2xl font-bold text-gray-800">BG Changer</h1>
                </div>

                {/* Display */}
                <input
                    type="color"
                    value={bg}
                    onChange={bgChange}
                    className="w-full h-20 text-right text-4xl  font-semibold p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="0"
                    autoFocus
                />


            </div>
        </main>
    )
}

export default BgChanger
