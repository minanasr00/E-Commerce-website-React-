import React from "react";
import styles from "./Login.module.css"
export default function Login(){

    return(
        <>
         <div className={`w-full h-screen ${styles.bg} flex items-center justify-center tracking-wider`}>
<div className={`w-11/12 sm:w-5/12 ${styles.glass} md:w-5/12 text-sm`}>
    <div className="w-full text-center my-3">
        <h2 className="text-2xl text-black font-medium">Login</h2>
    </div>
    <form className="my-2">
       
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
       
       <div className="mx-5 flex items-center justify-end cursor-pointer tracking-wider text-xs">
<p>Forgot Password</p>
       </div>
<div className="mx-5 my-7 py-2">
<button className="bg-black w-full h-[35px] rounded-sm text-white">Login</button>
</div>
<div className="mx-5 my-5 py-2 flex items-center justify-center cursor-pointer">
    <p className="text-sm">Don't have a account? /Register</p>
</div>
    </form>
    </div>     
       </div>
        </>
    )
}