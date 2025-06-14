import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./Login.module.css";

export default function Login() {
  const { register, handleSubmit } = useForm(); 
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    setApiError("");
    try {
      const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", data);
      const token = res.data.token;
      if (token) {
        setToken(token);
        navigate("/"); 
      }
    } catch (error) {
      setApiError(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className={`w-full h-screen ${styles.bg} flex items-center justify-center tracking-wider`}>
      <div className={`w-11/12 sm:w-5/12 ${styles.glass} md:w-5/12 text-base`}>
        <div className="w-full text-center mb-5">
          <h2 className="text-3xl text-black font-semibold pt-3">Login</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mx-5">
            <label htmlFor="email" className="block text-black text-lg font-semibold mb-2">
              Email Address:
            </label>
            <div className="flex border-b-2 border-black py-2">
              <input
                id="email"
                type="email"
                placeholder="Your Email Address:"
                {...register("email")}
                className="w-11/12 bg-transparent outline-none text-black placeholder-black py-2"
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Password Field */}
          <div className="mx-5 mt-10">
            <label htmlFor="password" className="block text-black text-lg font-semibold mb-2">
              Password:
            </label>
            <div className="flex border-b-2 border-black py-2">
              <input
                id="password"
                type="password"
                placeholder="Enter Password:"
                {...register("password")}
                className="w-11/12 bg-transparent outline-none text-black placeholder-black py-2"
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-2xl"></i>
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="mx-5 my-5 flex items-center justify-end cursor-pointer tracking-wider text-sm">
            <p>Forgot Password?</p>
          </div>

          {/* Error Message */}
          {apiError && (
            <div className="mx-5 text-red-600 text-center text-sm mb-2">{apiError}</div>
          )}

          {/* Login Button */}
          <div className="mx-5 my-10">
            <button type="submit" className="bg-black w-full h-10 rounded text-white text-base">
              Login
            </button>
          </div>

          {/* Register Link */}
          <div className="mx-5 mt-10 py-3 flex items-center justify-center cursor-pointer">
            <p className="text-base">
              Don't have an account?{" "}
              <span onClick={() => navigate("/register")} className="text-blue-500">
                /Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
