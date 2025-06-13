import { useEffect, useState } from "react";
import { getCartItems } from "../../services/cart-service";

export const useCartData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const fetchCartData = async () => {
    try {
      setIsLoading(true);
      const cartData = await getCartItems();
      setData(cartData.products);
      setTotalPrice(cartData.totalCartPrice);
      console.log("Cart data fetched successfully:", cartData);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  const removeCartItem = () => {};

  const clearCart = () => {
    setData([]);
  };

  return {
    isLoading,
    data,
    totalPrice,
    error,
    removeCartItem,
    clearCart,
  };
};
