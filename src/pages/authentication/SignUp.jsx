import React from 'react'
import Navigate from '../../components/Navigate';

const SignUp = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [error, setError] = React.useState({ key: "", message: "" });

    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (username.trim() === "") {
            setError({ key: "username", message: "Username is required" });
            setLoading(false);
            return;
        } else if (email.trim() === "") {
            setError({ key: "email", message: "Email is required" });
            setLoading(false);
            return;
        } else if (password.trim() === "") {
            setError({ key: "password", message: "Password is required" });
            setLoading(false);
            return;
        } else if (confirmPassword.trim() === "") {
            setError({ key: "confirmPassword", message: "Confirm Password is required" });
            setLoading(false);
            return;
        } else if (password !== confirmPassword) {
            setError({ key: "confirmPassword", message: "Password and Confirm Password must be same" });
            setLoading(false);
            return;
        }

        // All good 👌
        setError({ key: "", message: "" });
        localStorage.setItem("tempUser", JSON.stringify({ username, email, password }));

        // simulate server delay
        setTimeout(() => {
            setLoading(false);
            alert("Registration Successful ✅");
            Navigate("/login"); // example route after register
        }, 2000);
    };




    return (
        <>
            <section className='h-screen text-white w-screen flex justify-center items-center  bg-gradient-to-r from-[#638898] via-[#a4c4ce] to-[#2c5364]'>
                <form action="" onSubmit={handleSubmit} className='bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/30 shadow-2xl p-6 rounded-2xl max-w-[400px] w-full sm:m-5 m-2'>
                    <h1 className='text-center text-3xl font-serif font-bold '>Register</h1>
                    <div className="flex flex-col gap-4 my-4">
                        <div className="box flex flex-col gap-1">
                            <label htmlFor="username">Username</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" placeholder="Enter username" className="w-full text-black max-w-md p-2.5 rounded-2xl border border-transparent bg-white/70 backdrop-blur-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 hover:shadow-lg transition-all duration-300 ease-in-out" />
                        </div>
                        {error.key === "username" && <p className='text-red-500 text-xs'>{error.message}</p>}
                        <div className="box flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' placeholder='Enter email' className="w-full text-black max-w-md p-2.5 rounded-2xl border border-transparent bg-white/70 backdrop-blur-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 hover:shadow-lg transition-all duration-300 ease-in-out" />
                        </div>
                        {error.key === "email" && <p className='text-red-500 text-xs'>{error.message}</p>}

                        <div className="box flex flex-col gap-1">
                            <label htmlFor="password">Password</label>
                            <input type="password" autoComplete='off' autoCorrect='off' value={password} onChange={(e) => setPassword(e.target.value)} id='password' name='password' placeholder='Enter password' className="w-full text-black max-w-md p-2.5 rounded-2xl border border-transparent bg-white/70 backdrop-blur-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 hover:shadow-lg transition-all duration-300 ease-in-out" />
                        </div>
                        {error.key === "password" && <p className='text-red-500 text-xs'>{error.message}</p>}
                        <div className="box flex flex-col gap-1">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" autoComplete='off' autoCorrect='off' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword' name='confirmPassword' placeholder='Enter confirm password' className="w-full text-black max-w-md p-2.5 rounded-2xl border border-transparent bg-white/70 backdrop-blur-md shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1 hover:shadow-lg transition-all duration-300 ease-in-out" />
                        </div>
                        {error.key === "confirmPassword" && <p className='text-red-500 text-xs'>{error.message}</p>}


                        <button
                            type="submit"
                            id="register"
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
                                "Register"
                            )}
                        </button>
                        <p className='text-center'>Already have an account <a href="/login" className='text-blue-500 underline'>Login</a> </p>


                    </div>
                </form>
            </section>

        </>

    )
}

export default SignUp
