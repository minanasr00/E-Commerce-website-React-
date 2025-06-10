import React from "react";
import { useProducts } from "../../contexts/ProductsContext";

const Products = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <div className="text-center text-xl py-10">Loading products...</div>;
  }

  return (
    <div className="bg-[#f2f2f2] min-h-screen p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-72 object-contain"
            />
            <h3 className="text-sm font-medium mb-1">{product.title}</h3>
            <p className="text-base font-bold text-gray-700 mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-black-600 font-bold mb-4">${product.price}</p>
            <div className="flex justify-between">
              <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800">
                View Details
              </button>
              <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
