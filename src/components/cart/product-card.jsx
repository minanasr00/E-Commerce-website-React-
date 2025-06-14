import { useCallback, useState } from "react";

import { useCart } from "../../contexts/CartContext";

export const ProductCard = ({ data }) => {
  const { count: productCount, price, product } = data;

  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(productCount ?? 1);

  const { removeCartProduct, updateCartProductCount } = useCart();

  const handleUpdateCount = useCallback(
    async (type) => {
      const newCount = (prevCount) => {
        if (type === "increase") {
          return prevCount + 1;
        } else if (type === "decrease") {
          return Math.max(1, prevCount - 1);
        }
        return prevCount;
      };

      setCount((prev) => {
        const updatedCount = newCount(prev);
        if (
          updatedCount !== prev ||
          type === "increase" ||
          (type === "decrease" && updatedCount >= 1)
        ) {
          setLoading(true);
          try {
            updateCartProductCount(product.id, updatedCount);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        }
        return updatedCount;
      });
    },
    [product.id, loading]
  );

  const handleRemoveFromCart = () => removeCartProduct(product.id);

  return (
    <div className="w-fit">
      <div className="flex gap-2">
        <div className="h-[350px] w-[300px] max-w-[100%]">
          <img src={product?.imageCover} alt="" className="w-full h-full" />
        </div>
        <div>
          <div className="flex flex-col justify-between h-[200px]">
            <div>
              <button
                className="text-2xl cursor-pointer"
                onClick={handleRemoveFromCart}
              >
                ×
              </button>
            </div>
            <p className="mb-[10px]">L</p>
            <div className="h-[20px] w-[20px] bg-black"></div>
            <div className="flex flex-col">
              <button
                className="border-1 cursor-pointer"
                disabled={loading}
                onClick={() => !loading && handleUpdateCount("increase")}
              >
                +
              </button>
              <span className="border-x-1 text-center">{count}</span>
              <button
                className="border-1 cursor-pointer"
                disabled={loading}
                onClick={() =>
                  !loading && count > 1 && handleUpdateCount("decrease")
                }
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h3 className="text-[#a7a7a7]">{product?.category?.name}</h3>
        <div className="w-[300px] flex justify-between">
          <h2 className="font-semibold">{product?.title}</h2>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};
