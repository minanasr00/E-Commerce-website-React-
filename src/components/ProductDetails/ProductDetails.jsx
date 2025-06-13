import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext.jsx';
import axios from 'axios';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist } from "../../contexts/WishlistContext";

const colors = ['#d1d1d1', '#3b3b3b', '#1a1a1a', '#a7f3d0', '#f5f5f5', '#c7d2fe'];
const sizes = ['XS', 'S', 'M', 'L', 'XL', '1XL'];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProducts();
const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
 
  const [selectedColor, setSelectedColor] = useState(colors[2]);
  const [selectedSize, setSelectedSize] = useState('XS');

  


  useEffect(() => {
    const loadProduct = async () => {
      const found = products.find(p => p.id === id);

      if (found?.images) {
        setProduct(found);
        setMainImage(found.thumbnail);
        return;
      }

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
          images: p.images || [],
        };
        setProduct(formatted);
        setMainImage(formatted.thumbnail);
      } catch (err) {
        console.error("Error loading product:", err);
      }
    };

    loadProduct();
  }, [id, products]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  const thumbnails = product.images?.length
    ? [product.thumbnail, ...product.images.filter(img => img !== product.thumbnail)]
    : [product.thumbnail];

  return (
    <div className="font-[beatrice] min-h-screen bg-[#f7f7f7] py-12 px-4 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate('/products')}
        className="absolute top-10 left-4 text-2xl text-gray-700 hover:text-black cursor-pointer"
      >
        <FaArrowLeft />
      </button>

     <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 mt-10">
  {/* Images Section */}
  <div className="flex flex-col md:flex-row gap-6 w-full">
    {/* Main Image */}
    <div className="w-full md:w-[400px] h-[400px] md:h-[550px] self-center">
      <img
        src={mainImage}
        alt="Main"
        className="w-full h-full object-cover "
      />
    </div>
    <div className="flex flex-row md:flex-col gap-3 mt-4 md:mt-0 overflow-x-auto md:overflow-visible items-center ml-20">
  {thumbnails.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`Thumbnail ${i + 1}`}
      onClick={() => setMainImage(img)}
      className={`w-32 h-28 object-cover cursor-pointer border ${
        mainImage === img ? 'border-black' : 'border-transparent'
      } opacity-60 hover:opacity-100 transition`}
    />
  ))}
</div>
  </div>



        {/* Product Details */}
        <div className="relative w-full max-w-sm bg-white p-10 flex flex-col justify-between mx-auto">
          <button
           onClick={() => toggleWishlist(product)}
           className="absolute top-2 right-2 text-xl"
         >
           {isInWishlist(product.id) ? (
             <FaHeart className="text-black-500 " />
           ) : (
             <FaRegHeart className="text-black-400" />
           )}
         </button>

          <div >
            <h1 className="text-lg font-mono mb-5">{product.title}</h1>
            <p className="text-xl mt-2 font-mono mb-5">${product.price}</p>
            <p className="text-[15px] text-gray-500 mt-1 mb-5">MRP incl. of all taxes</p>
            <p className="mt-6 text-gray-800 text-[17px] leading-6 font-sans mb-30">{product.description}</p>

            {/* Color Picker */}
            <div className="mb-5">
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex gap-2">
                {colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    } cursor-pointer`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Picker */}
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Size</p>
              <div className="flex flex-wrap gap-2  mb-10">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 border text-sm ${
                      selectedSize === size
                        ? 'bg-neutral-300'
                        : 'bg-white text-black border-gray-300'
                    } cursor-pointer`}
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

          {/* Add to Cart Button */}
          <button className="w-full bg-neutral-300 text-black py-3 text-sm font-semibold hover:bg-black hover:text-white transition cursor-pointer">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

