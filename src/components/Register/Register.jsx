import React from "react";
import styles from './Register.module.css';
import img from "../../assets/7.jpg";

export default function Register() {
    return (
        <>
            <div
                style={{ '--background-image': `url(${img})` }}
                className={`w-full h-screen ${styles.bg} flex items-center justify-center tracking-wider`}
            >
                <div className={`w-11/12 sm:w-5/12 ${styles.glass} md:w-5/12 text-base py-48`}>
                    <div className="w-full text-center mb-20">
                        <h2 className="text-3xl text-black font-semibold">Register</h2>
                    </div>
                    <form className="my-2">

                        {/* Name */}
                        <div className="mx-5 my-20">
                            <label htmlFor="name" className="block text-black text-lg font-semibold mb-6">
                                Name:
                            </label>
                            <div className="flex border-b-2 border-black py-2">
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your Name:"
                                    className="w-11/12 bg-transparent outline-none text-black placeholder-black py-5"
                                />
                                <div className="w-2/12 flex items-center justify-center">
                                    <i className="fa-solid fa-user text-2xl"></i>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mx-5 my-20">
                            <label htmlFor="email" className="block text-black text-lg font-semibold mb-6">
                                Email Address:
                            </label>
                            <div className="flex border-b-2 border-black py-2">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your Email Address :"
                                    className="w-11/12 bg-transparent outline-none text-black placeholder-black py-5"
                                />
                                <div className="w-2/12 flex items-center justify-center">
                                    <i className="fa-solid fa-envelope text-2xl"></i>
                                </div>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="mx-5 my-20">
                            <label htmlFor="password" className="block text-black text-lg font-semibold mb-6">
                                Password:
                            </label>
                            <div className="flex border-b-2 border-black py-2">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Create a Strong Password:"
                                    className="w-11/12 bg-transparent outline-none text-black placeholder-black py-5"
                                />
                                <div className="w-2/12 flex items-center justify-center">
                                    <i className="fa-solid fa-lock text-2xl"></i>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="mx-5 my-20">
                            <label htmlFor="phone" className="block text-black text-lg font-semibold mb-6">
                                Phone Number:
                            </label>
                            <div className="flex border-b-2 border-black py-2">
                                <input
                                    id="phone"
                                    type="number"
                                    placeholder="Enter your Phone number:"
                                    className="w-11/12 bg-transparent outline-none text-black placeholder-black py-5"
                                />
                                <div className="w-2/12 flex items-center justify-center">
                                    <i className="fa-solid fa-phone text-2xl"></i>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mx-5 my-20">
                            <button className="bg-black w-full h-10 rounded text-white text-base">
                                Register
                            </button>
                        </div>

                        {/* Login link */}
                        <div className="mx-5 mt-20 py-3 flex items-center justify-center cursor-pointer">
                            <p className="text-base">Already have an account? /Login</p>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
