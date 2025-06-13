import { useCartData } from "./useCartData";

export const Summary = () => {
  const { totalPrice } = useCartData();

  return (
    <div className="p-[20px] border-1 border-[#D9D9D9] m-3">
      <h3 className="font-semibold mb-[20px]">Order Summary</h3>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>
      <div className="flex justify-between mb-[20px]">
        <p>Shipping</p>
        <p>$10</p>
      </div>
      <hr className="border-[#c9c9c9] mb-[10px]" />
      <div className="flex justify-between mb-[20px]">
        <h2>
          Total <span className="text-xs text-[#949494]">( TAX INCL. )</span>
        </h2>
        <p>$190</p>
      </div>
      <div className="mb-[20px]">
        <input
          type="checkbox"
          name=""
          id="terms"
          className="mr-[10px] cursor-pointer"
        />
        <label htmlFor="terms" className="text-[#aeaeae] cursor-pointer">
          I agree to the Terms and Conditions
        </label>
      </div>
      <div className="flex justify-center">
        <button className="px-[24px] py-[12px] bg-[#D9D9D9] rounded-[8px] cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
