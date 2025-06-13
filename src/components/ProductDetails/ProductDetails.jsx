import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductsContext.jsx';
import axios from 'axios';
import { FaArrowLeft, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist } from '../../contexts/WishlistContext';

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

const isClothing = ['clothing', 'apparel', 'fashion', 't-shirts', 'shirts', 'pants'].some(cat =>
  product.category?.toLowerCase().includes(cat)
);
  return (
    <div className="relative max-w-6xl mx-auto mt-30">
      {/* Back Button */}
      <button
        onClick={() => navigate('/products')}
        className="absolute top-0 left-0 text-2xl text-gray-700 hover:text-black cursor-pointer"
      >
        <FaArrowLeft />
      </button>

      <div className="flex flex-col md:flex-row gap-12 mt-8">
        {/* Images Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="w-full md:w-[400px] h-[400px] md:h-[550px] self-center">
            <img
              src={mainImage}
              alt="Main"
              className="w-full h-full object-cover "
            />
          </div>
          <div className="flex flex-row md:flex-col gap-3 mt-4 md:mt-0 overflow-x-auto md:overflow-visible items-center ml-4">
            {thumbnails.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                onClick={() => setMainImage(img)}
                className={`w-32 h-28 object-cover cursor-pointer border ml-20 ${
                  mainImage === img ? 'border-black' : 'border-transparent'
                } opacity-60 hover:opacity-100 transition`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="relative w-full max-w-sm bg-white p-6 flex flex-col justify-between h-[550px] shadow-sm border self-center">
          {/* Wishlist Button */}
          <button
            onClick={() => toggleWishlist(product)}
            className="absolute top-6 right-6 text-xl"
          >
            {isInWishlist(product.id) ? (
              <FaHeart className="text-black" />
            ) : (
              <FaRegHeart className="text-gray-400" />
            )}
          </button>

          <div className="overflow-y-auto pr-2">
            <h1 className="text-xl font-semibold mb-2">{product.title}</h1>
            <p className="text-lg mb-2">${product.price}</p>
            <p className="text-sm text-gray-500 mb-4">MRP incl. of all taxes</p>
            <p className="text-sm text-gray-700 mb-5">{product.description}</p>

            {/* Color Picker */}
            <div className="mb-5">
              <p className="text-sm font-medium mb-2">Color</p>
              <div className="flex gap-2">
                {colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectedColor === color ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
{isClothing && (
 <div className="mb-6">
  <p className="text-sm font-medium mb-2">Size</p>
  <div className="flex flex-wrap gap-2">
    {sizes.map(size => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`w-10 h-10 border text-sm cursor-pointer ${
          selectedSize === size
            ? 'bg-neutral-300'
            : 'bg-white text-black border-gray-300'
        }`}
      >
        {size}
      </button>
    ))}
  </div>
  <div className="mt-3 text-xs text-gray-500">
    FIND YOUR SIZE | MEASUREMENT GUIDE
  </div>
</div>
)}
           {/* Size Picker */}


           
          </div>

          {/* Add to Cart Button */}
          <button className="mt-4 w-full bg-neutral-300 text-black py-3 text-sm font-semibold hover:bg-black hover:text-white transition cursor-pointer">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
