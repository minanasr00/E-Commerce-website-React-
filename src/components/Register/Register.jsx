import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from './Register.module.css';
import img from '../../assets/backGround2.jpg';

// Schema
const schema = z.object({
  name: z.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be under 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must contain letters only"),

  email: z.string()
    .email("Invalid email format")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),

  password: z.string()
    .regex(/^[A-Z][a-z0-9_]{2,8}$/, "Password must start with capital and be 3-9 chars."),

  rePassword: z.string(),

  phone: z.string()
    .regex(/^(002)?01[0125][0-9]{8}$/, "Phone must be a valid Egyptian number.")
}).refine((data) => data.password === data.rePassword, {
  path: ["rePassword"],
  message: "Passwords do not match",
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  // const { setToken } = useAuth();
  const [apiError, setApiError] = useState("");

  const onSubmit = async (data) => {
    setApiError(""); // clear old error
    try {
      const res = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", data);
      const token = res.data.token;
      if (token) {
        // setToken(token);
        // localStorage.setItem("userToken", token);
        navigate("/login");
      }
    } catch (error) {
      setApiError(error?.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      style={{ '--background-image': `url(${img})` }}
      className={`w-full ${styles.bg} flex items-center justify-center pt-17 tracking-wider`}
    >
      <div className={`w-11/12 sm:w-5/12 ${styles.glass} md:w-5/12 text-base`}>
        <div className="w-full text-center mb-2">
          <h2 className="text-3xl text-black font-semibold">Register</h2>
        </div>

        <form className="my-2" onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mx-5 my-2">
            <label htmlFor="name" className="block text-black text-lg font-semibold">Name:</label>
            <div className="flex border-b-2 border-black py-2">
              <input
                id="name"
                type="text"
                placeholder="Enter your Name:"
                {...register("name")}
                className="w-11/12 bg-transparent outline-none text-black placeholder-black py-3"
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-user text-2xl"></i>
              </div>
            </div>
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mx-5 my-2">
            <label htmlFor="email" className="block text-black text-lg font-semibold">Email:</label>
            <div className="flex border-b-2 border-black py-2">
              <input
                id="email"
                type="email"
                placeholder="Your Email Address:"
                {...register("email")}
                className="w-11/12 bg-transparent outline-none text-black placeholder-black py-3"
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-envelope text-2xl"></i>
              </div>
            </div>
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mx-5 my-2">
            <label htmlFor="password" className="block text-black text-lg font-semibold">Password:</label>
            <div className="flex border-b-2 border-black py-2">
              <input
                id="password"
                type="password"
                placeholder="Create a Strong Password:"
                {...register("password")}
                className="w-11/12 bg-transparent outline-none text-black placeholder-black py-3"
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-2xl"></i>
              </div>
            </div>
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mx-5 my-2">
            <label htmlFor="rePassword" className="block text-black text-lg font-semibold">Confirm Password:</label>
            <div className="flex border-b-2 border-black py-2">
              <input
                id="rePassword"
                type="password"
                placeholder="Re-enter your Password:"
                {...register("rePassword")}
                className="w-11/12 bg-transparent outline-none text-black placeholder-black py-3"
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-lock text-2xl"></i>
              </div>
            </div>
            {errors.rePassword && <p className="text-red-600 text-sm mt-1">{errors.rePassword.message}</p>}
          </div>

          {/* Phone */}
          <div className="mx-5 my-2">
            <label htmlFor="phone" className="block text-black text-lg font-semibold">Phone Number:</label>
            <div className="flex border-b-2 border-black py-2">
              <input
                id="phone"
                type="text"
                placeholder="Enter your Phone number:"
                {...register("phone")}
                className="w-11/12 bg-transparent outline-none text-black placeholder-black py-3"
              />
              <div className="w-2/12 flex items-center justify-center">
                <i className="fa-solid fa-phone text-2xl"></i>
              </div>
            </div>
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          {/* API Error Message */}
          {apiError && (
  <div className="mx-5 my-2 text-sm text-red-700 bg-red-100 border border-red-400 rounded px-3 py-2 text-center">
    <i className="fa-solid fa-circle-exclamation mr-2"></i> {apiError}
  </div>
)}


          {/* Submit Button */}
          <div className="mx-5 my-4">
            <button type="submit" className="bg-black w-full h-10 rounded text-white text-base">
              Register
            </button>
          </div>

          {/* Login Link */}
          <div className="mx-5 py-3 flex items-center justify-center cursor-pointer">
            <p className="text-base">Already have an account? <span onClick={()=>{navigate("/login")}} className="text-blue-500">/Login</span></p>
          </div>

        </form>
      </div>
    </div>
  );
}
