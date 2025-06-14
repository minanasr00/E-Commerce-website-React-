import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  addToCart,
  clearCart,
  getCartItems,
  removeCartItem,
  updateCartItem,
} from "../services/cart-service";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [error, setError] = useState(null);

  const fetchCartData = async () => {
    try {
      // setIsLoading(true);
      const cartData = await getCartItems();
      setData(cartData);
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

  const products = useMemo(
    () => data?.data?.products ?? [],
    [data?.data?.products]
  );
  const numOfCartItems = useMemo(() => data?.numOfCartItems, [data]);
  const totalPrice = useMemo(() => data?.data?.totalCartPrice, [data]);

  const handleAddToCart = async (id) => {
    try {
      await addToCart(id);
      await fetchCartData();
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartProductCount = async (id, count) => {
    try {
      await updateCartItem(id, {
        count,
      });
      await fetchCartData();
    } catch (error) {
      console.error(error);
    }
  };

  const removeCartProduct = async (id) => {
    try {
      await removeCartItem(id);

      await fetchCartData();
    } catch (error) {
      console.error(error);
    }
  };

  const clearCartProducts = async () => {
    try {
      await clearCart();
      setData([]);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    isLoading,
    products,
    numOfCartItems,
    totalPrice,
    error,
    handleAddToCart,
    removeCartProduct,
    updateCartProductCount,
    clearCartProducts,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
