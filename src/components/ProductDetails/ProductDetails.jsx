import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext.jsx';
import axios from 'axios';

const colors = ['#d1d1d1', '#3b3b3b', '#1a1a1a', '#a7f3d0', '#f5f5f5', '#c7d2fe'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', '1XL'];

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();

  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[2]);
  const [selectedSize, setSelectedSize] = useState('XS');

  useEffect(() => {
    const found = products.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setMainImage(found.thumbnail);
    } else {
      // fetch from API if not found
      const fetchProduct = async () => {
        try {
          const res = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
          const p = res.data.data;
          const formatted = {
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            category: p.category.name,
            brand: p.brand.name,
            stock: p.quantity,
            rating: p.ratingsAverage,
            thumbnail: p.imageCover,
            images: p.images, 
          };
          console.log("Images from API:", p.images); 
          setProduct(formatted);
          setMainImage(formatted.thumbnail);
        } catch (err) {
          console.error("Error loading product:", err);
        }
      };
      fetchProduct();
    }
  }, [id, products]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="font-[beatrice] min-h-screen bg-[#f7f7f7] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Thumbnails + Main Image */}
        <div className="flex gap-4">
          {/* Main Image */}
          <div className="w-[400px] h-[550px] mt-8">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

   {/* Thumbnails */}
<div className="flex md:flex-col justify-center gap-2 md:gap-4 overflow-x-auto md:overflow-visible mt-4 md:mt-0">
  {(
    product.images?.length > 0 
      ? [product.thumbnail, ...product.images.filter(img => img !== product.thumbnail)]
      : [product.thumbnail]
  ).map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`Thumbnail ${i + 1}`}
      onClick={() => setMainImage(img)}
      className={`w-20 h-28 object-cover cursor-pointer opacity-60 hover:opacity-100 transition border ${
        mainImage === img ? 'opacity-100 border-black' : 'border-transparent'
      }`}
    />
  ))}
</div>



        {/* Right: Details */}
        <div className="relative w-full max-w-sm bg-white p-10 flex flex-col justify-between mx-auto">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`absolute top-4 right-4 text-3xl transition ${
              isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
            }`}
          >
            ♥
          </button>

          <div className="w-full">
            <h1 className="text-lg font-mono">{product.title}</h1>
            <p className="text-xl mt-2 font-mono">${product.price}</p>
            <p className="text-[15px] text-gray-500 mt-1">MRP incl. of all taxes</p>
            <p className="mt-10 text-gray-950 text-[17px] leading-6 mb-10 font-sans">
              {product.description}
            </p>

            {/* Color Picker */}
            <div className="mt-20 w-full">
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex gap-2">
                {colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`cursor-pointer w-10 h-10 border ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Picker */}
            <div className="mt-6 w-full">
              <p className="text-sm font-medium mb-2">Size</p>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`cursor-pointer w-10 h-10 border text-sm ${
                      selectedSize === size
                        ? 'bg-neutral-300'
                        : 'bg-white text-black border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-[15px] text-gray-500">
                FIND YOUR SIZE | MEASUREMENT GUIDE
              </div>
            </div>
          </div>

          {/* Add Button */}
          <button className="w-full mt-5 bg-neutral-300 text-black py-3 text-sm font-semibold cursor-pointer hover:bg-black hover:text-white">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
