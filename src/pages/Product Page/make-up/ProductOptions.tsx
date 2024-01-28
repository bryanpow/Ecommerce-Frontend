import ProductDetail from "./ProductDetail";
import { product } from "./ProductImages";
import SizeDropdown from "./SizeDropdown";
import BagButton from "./BagButton";
const ProductOptions: React.FC<product> = ({ product }) => {
  return (
    <div
      id="product-options"
      className=" sticky top-0 w-[40%] md:w-[100%]  md:relative  self-start  pt-[5%]"
    >
      <div id="product-name">
        <h1>{product.brand}</h1>
        <h2 className="">{product.name}</h2>
      </div>
      <div id="price" className="border-b  mb-10 pb-5 pt-10 xs:pt-2 xs:mb-5 ">
        <h1 className="font-light text-[25px] pt-[px]">{product.price}</h1>
      </div>
      <div id="select-size" className=" absolute w-[100%]">
        <div className="flex pb-5">
          <p className="underline font-[400] cursor-pointer"> Size Guide</p>
        </div>

        <SizeDropdown product={product} />
      </div>
      <div className="  mt-[150px] xs:mt-[130px]  " id="cart-favorite">
        <BagButton />
      </div>
      <div id="productDetails" className="pt-10 ">
        <ProductDetail name="Product Details" text="Loren Epsum" />
        <ProductDetail name="Material" text="Loren Epsum" />
        <ProductDetail name="Return Policy" text="Loren Epsum" />
        <div className="border-b w-[90%]"></div>
      </div>
    </div>
  );
};

export default ProductOptions;
