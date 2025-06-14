export const ProductCard = ({ data }) => {
  const { count, price, product } = data;

  console.log("product", data);

  return (
    <div className="w-fit">
      <div className="flex gap-2">
        <div className="h-[350px] w-[300px] max-w-[100%] relative">
          <img src={product?.imageCover} alt="" className="w-full h-full" />
          <button className=" absolute bottom-0 right-0 p-[4px] bg-[#fafafa] cursor-pointer">
            <svg
              className="rotate-315 "
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z" />
            </svg>
          </button>
        </div>
        <div>
          <div className="flex flex-col justify-between h-[200px]">
            <div>
              <button className="text-2xl cursor-pointer">×</button>
            </div>
            <p className="mb-[10px]">L</p>
            <div className="h-[20px] w-[20px] bg-black"></div>
            <div className="flex flex-col">
              <button className="border-1 cursor-pointer">+</button>
              <span className="border-x-1 text-center">{count}</span>
              <button className="border-1 cursor-pointer">-</button>
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
