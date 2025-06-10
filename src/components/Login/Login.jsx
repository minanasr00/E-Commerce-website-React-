import React from "react";
import styles from "./Login.module.css";

export default function Login() {
    return (
        <>
            <div className={`w-full h-screen ${styles.bg} flex items-center justify-center tracking-wider`}>
                <div className={`w-11/12 sm:w-5/12 ${styles.glass} md:w-5/12 text-base py-48`}>
                    <div className="w-full text-center mb-20">
                        <h2 className="text-3xl text-black font-semibold">Login</h2>
                    </div>
                    <form>

                        {/* Email Field */}
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

                        {/* Password Field */}
                        <div className="mx-5 my-20">
                            <label htmlFor="password" className="block text-black text-lg font-semibold mb-6">
                                Password:
                            </label>
                            <div className="flex border-b-2 border-black py-2">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter Password:"
                                    className="w-11/12 bg-transparent outline-none text-black placeholder-black py-5"
                                />
                                <div className="w-2/12 flex items-center justify-center">
                                    <i className="fa-solid fa-lock text-2xl"></i>
                                </div>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="mx-5 my-10 flex items-center justify-end cursor-pointer tracking-wider text-sm">
                            <p>Forgot Password?</p>
                        </div>

                        {/* Login Button */}
                        <div className="mx-5 my-20">
                            <button className="bg-black w-full h-10 rounded text-white text-base">
                                Login
                            </button>
                        </div>

                        {/* Register Link */}
                        <div className="mx-5 mt-20 py-3 flex items-center justify-center cursor-pointer">
                            <p className="text-base">Don't have an account? /Register</p>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
