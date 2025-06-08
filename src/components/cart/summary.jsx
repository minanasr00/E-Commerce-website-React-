export const Summary = () => {
  return (
    <div className="p-[20px] border-1 border-[#D9D9D9] m-3">
      <h3>Order Summary</h3>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>$180</p>
      </div>
      <div className="flex justify-between">
        <p>Shipping</p>
        <p>$10</p>
      </div>
      <hr />
      <div className="flex justify-between">
        <h2>
          Total <span>( TAX INCL. )</span>
        </h2>
        <p>$190</p>
      </div>
      <div>
        <input type="checkbox" name="" id="terms" />
        <label htmlFor="terms" className="text-[#aeaeae]">
          I agree to the Terms and Conditions
        </label>
      </div>
      <div>
        <button className="px-[24px] py-[16px] bg-[#D9D9D9] rounded-[8px]">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
