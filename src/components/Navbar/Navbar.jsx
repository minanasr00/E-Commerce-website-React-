import React from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
export default function Navbar() {
  return <>
<nav className="bg-white  w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">


      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
        </li>
          </ul>
          
    </div>
    
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-between">
          <div> 
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
        {/* <span className="sr-only">Open main menu</span> */}
       <BiMenuAltLeft className='text-3xl text-black'/>
        </button>
      </div>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Get started</button>
    </div>
  </div>
</nav>



  </>
}
