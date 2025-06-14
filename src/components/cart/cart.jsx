import Navbar from "../Navbar/Navbar";
import { ProductCard } from "./product-card";
import { Summary } from "./summary";
import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { products } = useCart();

  return (
    <div className="px-[24px]">
      {!products?.length ? (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-6">
          <p className="text-4xl font-bold text-center text-black-600 tracking-tight mt-20 mb-20">
            Your Cart is Empty...
          </p>
          <Link
            to="/products"
            className="bg-neutral-300 text-black font-semibold px-6 py-2 text-3xl hover:bg-black hover:text-white transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="max-w-screen-xl mx-auto mt-[90px] flex">
            <h2 className="font-semibold mb-[20px] mr-[20px]">Shopping Bag</h2>
            <Link to="/wishlist" className="flex items-start cursor-pointer">
              <svg
                className="rotate-315"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#333"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
              Favorites
            </Link>
          </div>
          <div className="max-w-screen-xl mx-auto items-center flex flex-wrap gap-5 justify-between">
            <div className="flex flex-wrap gap-7 border-y-1 border-[#C9C9C9] py-3">
              {products?.map((product) => (
                <ProductCard key={product._id} data={product} />
              ))}
            </div>
            <Summary />
          </div>
        </>
      )}
    </div>
  );
};
