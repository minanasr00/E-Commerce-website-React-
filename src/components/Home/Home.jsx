import React, { useContext } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../assets/imgs/1.jpg"
import img2 from "../../assets/imgs/2.jpg"
// import img3 from "../../assets/imgs/3.jpg"
// import img4 from "../../assets/imgs/4.jpg"
// import img5 from "../../assets/imgs/5.jpg"
import img6 from "../../assets/imgs/9.jpg"
import img7 from "../../assets/imgs/10.jpg"
import img8 from "../../assets/imgs/11.jpg"
import img9 from "../../assets/imgs/12.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { ApiContext } from '../../contexts/ApiContext';
import ProductCard from './productCard';


export default function Home() {
  const { homeData } = useContext(ApiContext);
  const navigate = useNavigate();
  return <>
    <div className='p-10'>
      <div className="search flex flex-col xs:w-full md:w-[33.3%] gap-1">
        <Link to="/products" state={{category : "Men's Fashion"}} className='font-[beatrice]'>MEN</Link>
        <Link to="/products" state={{category : "Women's Fashion"}} className='font-[beatrice]'>WOMEN</Link>
        <Link to="/products" state={{category : "Kids' Fashion"}} className='font-[beatrice]'>KIDS</Link>
        <form className="mb-6">
          <div className="flex">
            <div className="relative w-full">
              <input type="search" id="location-search" className="block p-2.5 w-full  text-sm text-gray-900 bg-[#D9D9D9]" placeholder="Search..." required />
              <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-black bg-[#D9D9D9]  hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>  
        </form>
        
      </div>
      <div className="grid grid-cols-12 mt-10 gap-14 ">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 h-96 flex flex-col justify-between ">
          <div>
            <p className='font-[beatrice] text-3xl'>NEW</p>
          <p className='font-[beatrice] text-3xl'>COLLECTION</p>
          <p className='text-sm'>summer</p>
          <p className='text-sm'>2025</p></div>
          <div className='self-end w-full flex justify-end mt-12' onClick={() => navigate("/products")}>
          <button className='font-[beatrice] cursor-pointer p-1 bg-[#8080808f] hover:bg-black hover:text-white'>go to shop <FaArrowRightLong className='inline ms-5'/></button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 h-96">
          <img src={img1} className='object-cover object-top w-full h-full' alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 h-96">
          <img src={img2} className='object-cover object-top w-full h-full' alt="" />
        </div>
      </div>
      <div className='grid mt-32'>
        <div className='flex justify-between items-center '>
          <h1 className='font-[beatrice] text-4xl '>new <br />this week</h1>
          <p onClick={() => navigate("/products")} className='cursor-pointer text-gray-700'>See All</p>
        </div>
        <div className='grid grid-cols-12 gap-14 mt-5'>
          {homeData?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}

          <div className='col-span-12 gap-2 flex justify-center mt-5 w-full'>
            <button><FaLongArrowAltLeft className='text-3xl border border-gray-500 cursor-pointer hover:bg-gray-300'/></button>
            <button><FaLongArrowAltRight className='text-3xl border border-gray-500 cursor-pointer hover:bg-gray-300'/></button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center mt-20 gap-5'>
      <h1 className='font-[beatrice] text-4xl'>Our Approach to fashion design </h1>
      <p className='font-[beatrice] text-center text-[15px] text-gray-800 w-[40%]'>
        at elegant vogue , we blend creativity with craftsmanship to create fashion that transcends trends and stands the test of time each design is meticulously crafted, ensuring the highest quelity exqulsite finish
      </p>
    </div>
    <div className='grid grid-cols-12 gap-10 mt-20 mb-3'>
      <div className="col-span-3 h-80 ">
        <img className='h-full w-full object-cover' src={img8} alt="" />
        </div>
      <div className="col-span-3 h-80 mt-12">
        <img className='h-full w-full object-cover' src={img9} alt="" />
        </div>
      <div className="col-span-3 h-80">
        <img className='h-full w-full object-cover' src={img7} alt="" />
        </div>
      <div className="col-span-3 h-80 mt-15">
        <img className='h-full w-full object-cover' src={img6} alt="" />
        </div>
    </div>
    </div>
    <div className="footer  font-[beatrice] bg-[#F5F5F5] mt-20">
      <div className='grid grid-cols-12  p-10'>
        <div className='col-span-4 flex flex-col'>
          <div className='mb-15'>
            <h2 className='text-stone-500 text-[20px]'>info</h2>
          <p className='text-[14px]'>pricing</p>
          <p className='text-[14px]'>about</p>
          <p className='text-[14px]'>contacts</p>
        </div>
          <div>
            <h2 className='text-stone-500 text-[20px]'>Languages</h2>
          <p className='text-[14px]'>English</p>
          <p className='text-[14px]'>Spanish</p>
          <p className='text-[14px]'>French</p>
        </div>
        </div>
        <div className='col-span-4 flex flex-col justify-center items-center'>
        <h2 className='text-stone-500 text-[20px] mb-4'>Technologies</h2>
         <div className="w-10 h-10 bg-gradient-to-br from-white to-black transform rotate-45 mb-2"></div>
          <div className='text-[80px] font-[inter] font-extrabold leading-[70px] text-gray-950'>XIV</div>
          <div className='text-[80px] font-[inter] font-extrabold leading-[60px] text-gray-950'>QR</div>
        </div>
      </div>
        
    </div>
  </>
}
