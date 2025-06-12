import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const navigate = useNavigate();
    return <>
        <div onClick={() => { navigate(`/products/${product.id}`) }} className='sm:mb-10 font-[beatrice] col-span-12 md:col-span-4 lg:col-span-3 h-96 hover:scale-105 transition-all duration-300 ease-in-out shadow-sky-100 shadow-md '>
            <img src={product.imageCover} className='cursor-pointer object-cover object-center w-full h-full' alt={product.title} />
            <div className=''>
                <p className='text-gray-700 font-sans text-[16px]'>{product.category.name}</p>
                <div className='flex items-center justify-between'>
                    <p className='text-[20px] font-semibold'>
                        {product.title}
                    </p>
                    <p>
                        {product.price}$
                    </p>
                </div>
            </div>
        </div>
    </>
}
