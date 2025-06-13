import React, { useState } from 'react'
import { BiMenuAltLeft } from "react-icons/bi";
import Products from './../Products/Products';
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useWishlist } from "../../contexts/WishlistContext.jsx";
import { AuthContext, useAuth } from '../../contexts/AuthContext.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserOpen, setIsUserOpen] = useState(false)
  const navigate = useNavigate();
  const { wishlist } = useWishlist();
  const { token, setToken } = useAuth();

  return <>
    <nav className="font-[beatrice] p-4 flex justify-between items-center shadow-md fixed bg-white top-0 right-0  left-0 z-50 min-w-sm">
      <div className="flex items-center space-x-6">
        <button onClick={()=>{setIsOpen(!isOpen)}} className="text-black cursor-pointer focus:outline-none sm:block md:hidden relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {isOpen && <div className="md:hidden space-x-4 absolute flex flex-col top-6 left-10  rounded-2xl px-3 shadow-2xl w-48 z-10 mt-3 bg-white backdrop-blur-md ">
          <Link to="/" className=" text-black hover:text-gray-700">Home</Link>
        <Link to="/products" className="text-black hover:text-gray-700">Products</Link>
        <Link to="/about" className="text-black hover:text-gray-700">About</Link>

        </div> }
        <div className=" space-x-4 sm:hidden md:flex">
          <Link to="/" className="text-black hover:text-gray-700">Home</Link>
        <Link to="/products" className="text-black hover:text-gray-700">Products</Link>
        <Link to="/about" className="text-black hover:text-gray-700">About</Link>

        </div>
      </div>

      <div>
        <span>
          <div className="w-8 h-8 bg-gradient-to-br from-white to-black transform rotate-45 mb-2"></div>
        </span> 
      </div>

      {/* Right side - Icons */}
      <div className="flex items-center space-x-10">
  <Link to="/wishlist" className="relative">
    <svg
      className="cursor-pointer rotate-315 bg-black rounded-full p-1"
      xmlns="http://www.w3.org/2000/svg"
      height="35px"
      viewBox="0 -960 960 960"
      width="35px"
      fill="#ffffff"
    >
      <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
    </svg>

    {/* Wishlist Count Badge */}
    {wishlist.length > 0 && (
      <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
        {wishlist.length}
      </span>
    )}
  </Link>


        <div onClick={() => navigate("/cart")} className="flex items-center"  >
          <button  className="bg-black text-white px-4 py-2 rounded-full focus:outline-none cursor-pointer sm:hidden md:block">Cart</button>
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center ml-[-8px] cursor-pointer">
           <MdOutlineShoppingBag />
          </div>
        </div>
        <button className="text-black focus:outline-none relative" onClick={() => setIsUserOpen(!isUserOpen)}>
          <svg className="cursor-pointer w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {isUserOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              {token ? <Link to="/" onClick={() => { setToken(null) }} className="block px-4 py-2 text-black hover:bg-gray-100">Logout</Link> :
                <> <Link to="/login" className="block px-4 py-2 text-black hover:bg-gray-100">Login</Link>
                  <Link to="/register"  className="block px-4 py-2 text-black hover:bg-gray-100">Register</Link>
                </>}
              
            </div>
          )}
        </button>
      </div>
    </nav>




  </>
}
