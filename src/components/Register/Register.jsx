import React from "react";
import styles from './Register.module.css';
 import img from "../../assets/2.jpg";

export default function Register(){

    return<>
        <div style={{ '--background-image': `url(${img})` }} className={`w-full h-screen ${styles.bg} flex items-center justify-center tracking-wider`}>
<div className={`w-11/12 sm:w-5/12 ${styles.glass} md:w-5/12 text-sm`}>
    <div className="w-full text-center my-3">
        <h2 className="text-2x1 text-black bg fa-1 font-medium">Register</h2>
    </div>
    <form className="my-2">
        <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
<input type="text" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder="Enter your Name:" />
<div className="w-2/12 flex items-center justify-center">
  <i className="fa-solid fa-user text-xl"></i>  
</div>
        </div>
        <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
<input type="email" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder=" your Email Address :" />
<div className="w-2/12 flex items-center justify-center">
  <i className="fa-solid fa-envelope text-xl"></i>  
</div>
        </div>
        <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
<input type="password" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder="Create a Strong Password:" />
<div className="w-2/12 flex items-center justify-center">
  <i className="fa-solid fa-lock text-xl"></i>  
</div>
        </div>
        <div className="flex border-b-black border-b-2 mx-5 my-7 py-1">
<input type="number" className="w-11/12 bg-transparent outline-none placeholder-black" placeholder="Enter your Phone number:" />
<div className="w-2/12 flex items-center justify-center">
  <i className="fa-solid fa-phone text-xl"></i>  
</div>
        </div>
<div className="mx-5 my-7 py-2">
<button className="bg-black w-full h-[35px] rounded-sm text-white">Register</button>
</div>
<div className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
    <p className="text-sm">Already have a account? /Login</p>
</div>
    </form>
    </div>     
       </div>
        </>
}