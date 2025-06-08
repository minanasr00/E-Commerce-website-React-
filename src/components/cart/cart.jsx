import { ProductCard } from "./product-card";
import { Summary } from "./summary";

export const Cart = () => {
  return (
    <div className="px-[24px]">
      <div>navbar</div>
      <div>
        <h2>Shopping Bag</h2>
      </div>
      <div className="flex gap-2.5 justify-between">
        <div className="flex gap-2.5 border-y-1 py-3">
          <ProductCard />
          <ProductCard />
        </div>
        <Summary />
      </div>
    </div>
  );
};
