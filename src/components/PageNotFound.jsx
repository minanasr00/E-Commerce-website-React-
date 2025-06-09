import React from "react";
 import svg from "../assets/404.svg"; 
 const PageNotFound = () => {
     return ( <> <div className="h-screen cont-404">
         <img src={svg} className="h-full w-full object-contain" alt="svg" /> 
         <button className="absolute top-4 right-4 bg-gray-300 text-black p-2 rounded font-[beatrice] cursor-pointer hover:bg-black hover:text-white">Back to Home</button> 
         </div> </> );
          };
           export default PageNotFound;