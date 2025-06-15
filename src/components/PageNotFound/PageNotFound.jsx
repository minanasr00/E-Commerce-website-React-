import React from "react";
 import svg from "../../assets/404.svg"; 
 import './PageNot.module.css'
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
     const navigate = useNavigate()
     return ( <> <div className="h-screen cont-404 pt-12">
         <img src={svg} className="h-full w-full object-contain" alt="svg" /> 
         <button onClick={()=>{navigate("/")}} className="absolute mt-24 top-4 right-4 bg-gray-300 text-black p-2 rounded font-[beatrice] cursor-pointer hover:bg-black hover:text-white">Back to Home</button> 
         </div> </> );
          };
           export default PageNotFound;