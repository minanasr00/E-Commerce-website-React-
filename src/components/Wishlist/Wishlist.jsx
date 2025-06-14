import { Link } from "react-router-dom";
import { useWishlist } from "../../contexts/WishlistContext.jsx"; 

import { useEffect } from "react";

const Wishlist = () => {
  const { wishlist,deleteFromWish } = useWishlist();

  useEffect(() => {
    
  }, [])
  
  
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee]">
      {wishlist?.length === 0 ? (
  <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
    <p className="text-6xl font-bold text-center text-black-600 tracking-tight mt-20 mb-20">
      Your Wishlist is Empty...
    </p>
    <Link
      to="/products"
      className="bg-neutral-300 text-black font-semibold px-6 py-2 text-3xl hover:bg-black hover:text-white transition"
    >
      Browse Products
    </Link>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-bold mt-20 mb-10 text-center text-black-600 tracking-tight">
            Your Wishlist
          </h2>

<div className="flex flex-wrap justify-center gap-4">
  {wishlist?.map((product) => (
    <div
      key={product.id}
      className="w-[240px] bg-white shadow-md hover:shadow-lg transition duration-300 overflow-hidden relative "
    >
      {/*(X) */}
      <button
        
        onClick={() => deleteFromWish(product.id)}
        className="absolute top-2 right-2 text-gray-500 text-xl hover:text-black cursor-pointer font-bold"
        aria-label="Remove from wishlist"
      >
        &times;
      </button>

      <img
        src={product.imageCover}
        alt={product.title}
        className="w-full h-36 object-contain"
      />

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-600 text-xs line-clamp-2 mb-2">
          {product.description}
        </p>

        <p className="text-base font-bold text-green-600 mb-3">
          ${product.price}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="block bg-neutral-300 text-black text-sm font-medium text-center py-1 hover:bg-black hover:text-white transition"
        >
          View Details
        </Link>
      </div>
    </div>
  ))}
</div>


        </div>
      )}
    </div>
  );
};

export default Wishlist;
