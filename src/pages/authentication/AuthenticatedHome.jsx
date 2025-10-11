import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigate from "../../components/Navigate";

export default function AuthenticatedHome() {
  const navigate = useNavigate();

    const [data,setData] = React.useState(JSON.parse(localStorage.getItem("user")) || null);
  
  
      
      useEffect(() => {
          if (!data) {
              Navigate("/login");
          }
      }, [data]);


  const handleLogout = () => {
    localStorage.removeItem("user"); // remove user data
    Navigate("/login"); // redirect to login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="text-center sm:p-8 p-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-xl sm:m-5 m-2">
        <h1 className="text-4xl font-bold mb-4 sm:mx-auto -mx-5">Welcome Home 🏡</h1>
        <p className="text-lg text-white/90 mb-8">
          You are successfully logged in. Enjoy your dashboard experience!
        </p>

        <button
          onClick={handleLogout}
          className="relative px-8 py-3 text-lg font-semibold rounded-2xl overflow-hidden bg-white/20 border border-white/30 hover:bg-white/30 transition-all duration-300 group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10 flex items-center justify-center gap-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
              />
            </svg>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}
