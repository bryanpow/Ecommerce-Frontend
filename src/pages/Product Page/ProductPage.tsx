import {useEffect} from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import ProductImages from "./make-up/ProductImages";
import ProductOptions from "./make-up/ProductOptions";

export interface Product {
  brand: string;
  name: string;
  price: string;
  sizes: Array<string>;
  images: Array<string>;
}
const product: Product = {
  brand: "AMIRI",
  name: "logo-embellished cotton hoodie",
  price: "$1,490",
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [
    "/amrii1.png",
    "/amiri2-PhotoRoom.png-PhotoRoom.png",
    "https://cdn-images.farfetch-contents.com/20/80/22/13/20802213_50824716_1000.jpg",
    "https://cdn-images.farfetch-contents.com/20/80/22/13/20802213_50824711_1000.jpg",
  ],
};

function ProductPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  

  return (
    <div className="">
      <div
        
        id="product-basic"
        className=" mt-[20px] flex w-[90%] xs:w-[100%] md:flex-col justify-between p-10 overflow-visible  border md:border-[0px]  m-auto  "
      >
        <ProductImages product={product} />
       <ProductOptions product={product} />
       
      </div>
    </div>
  );
}

export default ProductPage;
