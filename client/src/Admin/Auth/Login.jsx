import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Images } from '../../assets/Index';
import { ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from '../Components/Loader';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { Login } = useAuth(); //  Get Login function from AuthContext
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (token && user) {
            navigate("/admin");
        }
        setLoading(false); // Stop loader after checking
    }, [navigate]);

    if (loading) {
        return <Loader />; // Show Loader while checking login state
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handlePasswordVisible = (e) => {
        e.preventDefault();
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        Login(formData.email, formData.password); // Call Login function from AuthContext
    };

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link to={''} className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-[220px] mr-2" src={Images.BrandColor} alt="logo" />
                </Link>
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#93c5fd] focus:border-[#2563eb] block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <div className='w-full relative'>
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        id="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#93c5fd] focus:border-[#2563eb] block w-full p-2.5"
                                        required
                                    />
                                    <button onClick={handlePasswordVisible} className='absolute select-none top-1/2 -translate-y-1/2 opacity-50 right-3 pointer'>
                                        {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#93c5fd]"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <Link to={''} className="text-sm font-medium text-[#2563eb] hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Login;
