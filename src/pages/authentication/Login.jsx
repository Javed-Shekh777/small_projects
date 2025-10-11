import React, { useEffect, useState } from 'react'
import Navigate from '../../components/Navigate';

const SignUp = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [tempData, settempData] = useState(JSON.parse(localStorage.getItem("tempUser")) || null);
    const [data, setData] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const [error, setError] = React.useState({ key: "", message: "" });

    const [loading, setLoading] = React.useState(false);

    
    useEffect(() => {
        if (data) {
            Navigate("/authenticated");
        }
    }, [data]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (username.trim() === "") {
            setError({ key: "username", message: "Username is required" });
            setLoading(false);
            return;
        } else if (password.trim() === "") {
            setError({ key: "password", message: "Password is required" });
            setLoading(false);
            return;
        }

        // All good 👌
        setError({ key: "", message: "" });
        if (tempData && (tempData.username === username || tempData.email === username) && tempData.password === password) {
            localStorage.setItem("user", JSON.stringify(tempData));
            localStorage.removeItem("tempUser");

        } else {
            alert("Invalid Credentials ❌");
            setLoading(false);
            return;
        }

        // simulate server delay
        setTimeout(() => {
            setLoading(false);
            alert("Login Successful ✅");
            Navigate("/authenticated"); // example route after register
        }, 2000);
    };




    return (
        <>
            <section

             style={{
                backgroundImage: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"
            }} 

             
            
            className='h-screen w-screen flex justify-center items-center'>
                <form 
                style={{
    //   backgroundImage: 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)'
backgroundImage: 'linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)'

      }}
                
                action="" onSubmit={handleSubmit} className='shadow-2xl p-6 rounded-2xl bg-white max-w-[400px] w-full sm:m-5 m-2'>
                    <h1 className='text-center text-3xl font-serif font-bold '>Login</h1>
                    <div className="flex flex-col gap-4 my-4">
                        <div className="box flex flex-col gap-1">
                            <label htmlFor="username">Username</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" placeholder="Enter username or email" className="w-full max-w-md p-2.5 rounded-2xl border border-transparent bg-white/70 backdrop-blur-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 hover:shadow-lg transition-all duration-300 ease-in-out" />
                        </div>
                        {error.key === "username" && <p className='text-red-500 text-xs'>{error.message}</p>}


                        <div className="box flex flex-col gap-1">
                            <label htmlFor="password">Password</label>
                            <input type="password" autoComplete='off' autoCorrect='off' value={password} onChange={(e) => setPassword(e.target.value)} id='password' name='password' placeholder='Enter password' className="w-full max-w-md p-2.5 rounded-2xl border border-transparent bg-white/70 backdrop-blur-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 hover:shadow-lg transition-all duration-300 ease-in-out" />
                        </div>
                        {error.key === "password" && <p className='text-red-500 text-xs'>{error.message}</p>}



                        <button
                            type="submit"
                            id="login"
                            disabled={loading}
                            className={`p-3 text-xl cursor-pointer border-0 rounded-2xl text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 ${loading ? "opacity-80 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? (
                                <>
                                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Processing...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>

                        <p className='text-center'>Create an account <a href="/register" className='text-blue-500 underline'>Register</a> </p>

                    </div>
                </form>
            </section>

        </>

    )
}

export default SignUp
