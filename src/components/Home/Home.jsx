import React from 'react'

export default function Home() {
  return <>
    <div className='p-5'>
      <div className="search flex flex-col xs:w-full md:w-[33.3%] gap-1">
        <a href="">MEN</a>
        <a href="">WOMEN</a>
        <a href="">KIDS</a>        
        <form class="mb-4">          
          <div class="flex">           
            <div class="relative w-full">              
              <input type="search" id="location-search" class="block p-2.5 w-full  text-sm text-gray-900 bg-[#D9D9D9]" placeholder="Search..." required />
              <button type="submit" class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-black bg-[#D9D9D9]  hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">               
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />                 
                </svg>
                <span class="sr-only">Search</span>
              </button>             
            </div>
          </div>  
        </form>
        
      </div>
      <div className="grid grid-cols-12 mt-10">
        <div className="col-span-4">
          <p className='font-[beatrice] text-3xl'>NEW</p>
          <p className='font-[beatrice] text-3xl'>COLLECTION</p>
          <p className='text-sm'>summer</p>
          <p className='text-sm'>2025</p>
        </div>
        <div className="col-span-4">
          
        </div>
      </div>
    </div>

  </>
}
