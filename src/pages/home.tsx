import { ProductCart } from "../components/productCart";
import { products } from "../products";

export const Home = () => {
  return (
    <div>
      <h2 className="font-bold text-[42px] text-[#274C5B]">Shop</h2>
      <div className="grid grid-cols-4 gap-x-5 gap-y-10">
        {products.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};
