import axios from "axios";
import { getAuthToken } from "../utils/token-utils";

import { SERVICES } from "../constants/api";
// import { toast } from "react-toastify";
import { toast } from 'react-hot-toast';



export const getCartItems = async () => {
  const token = getAuthToken();
if (token) {
  try {
    const res = await axios.get(SERVICES.CART_ENDPOINT, {
      headers: {
        token,
      },
    });
    if (res.status === 200) {
      const data = await res.data;
      return data;
    } else {
      console.error("Failed to fetch cart data:", res.status);
    }
  } catch (error) {
    console.error("Error fetching cart data:", error);
    toast.error("Error fetching cart data");
  }
} else {
  return
}
  
};

export const addToCart = async (productId) => {
  const token = getAuthToken();
if (token) {
   try {
    const res = await axios.post(
      SERVICES.CART_ENDPOINT,
      {
        productId,
      },
      {
        headers: {
          token,
        },
      }
    );
    if (res.status === 200) {
      const data = await res.data?.data;
      toast.success("Product added to cart successfully.");
      return data;
    } else {
      console.error("Failed to add product to cart:", res.status);
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
    toast.error(error?.response?.data?.message);
  }
} else {
  toast.error("Login First")
}
 
};

export const updateCartItem = async (productId, body) => {
  const token = getAuthToken();

  try {
    const res = await axios.put(
      `${SERVICES.CART_ENDPOINT}/${productId}`,
      body,
      {
        headers: {
          token,
        },
      }
    );
    if (res.status === 200) {
      const data = await res.data?.data;
      // toast.success("Product count updated in cart successfully.");
      return data;
    } else {
      console.error("Failed to updated product in cart:", res.status);
    }
  } catch (error) {
    console.error("Error updating product in cart:", error);
    toast.error(error?.response?.data?.message);
  }
};

export const removeCartItem = async (productId) => {
  const token = getAuthToken();

  try {
    const res = await axios.delete(`${SERVICES.CART_ENDPOINT}/${productId}`, {
      headers: {
        token,
      },
    });
    if (res.status === 200) {
      const data = await res.data?.data;
      toast.success("Product remove from cart successfully.");
      return data;
    } else {
      console.error("Failed to remove product from cart:", res.status);
    }
  } catch (error) {
    console.error("Error removing product from cart:", error);
    toast.error(error?.response?.data?.message);
  }
};

export const clearCart = async () => {
  const token = getAuthToken();

  try {
    const res = await axios.delete(SERVICES.CART_ENDPOINT, {
      headers: {
        token,
      },
    });
    if (res.status === 200) {
      const data = await res.data?.data;
      toast.success("Order completed successfully.");
      return data;
    } else {
      console.error("Order failed:", res.status);
    }
  } catch (error) {
    console.error("Error Ordering:", error);
    toast.error(error?.response?.data?.message);
  }
};
