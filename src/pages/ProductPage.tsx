import React, { useState, useEffect, useRef } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import SizeDropdown from "../components/SizeDropdown";
import BagButton from "../components/BagButton";
import ProductDetails from "../components/ProductDetails";

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
  const bigImgRef = useRef<HTMLDivElement | null>(null);
  const [photo, setPhoto] = useState(product.images[0]);

  const handleImgChange = (percentage: number, img: string) => {
    if (bigImgRef.current) {
      const containerWidth = bigImgRef.current.scrollWidth;
      const scrollToX = (percentage / 100) * containerWidth;
      bigImgRef.current.scrollLeft = scrollToX;
    }
    setPhoto(img);
  };

  return (
    <div className="">
      <div
        id="product-basic"
        className=" flex w-[90%] xs:w-[100%] md:flex-col justify-between p-10 overflow-visible  border md:border-[0px]  m-auto  "
      >
        <div
          id="product-photos"
          className="w-[50%] md:w-[100%] sticky top-0 md:relative self-start"
        >
          <div
            id="big-product-photo"
            ref={bigImgRef}
            style={{ scrollBehavior: "smooth" }}
            className=" border-[1px]  overflow-scroll flex pointer-events-none  "
          >
            {/* Image will be fetched */}
            {product.images.map((img) => {
              return (
                <img
                  className=" bg-[#F5F5F5] p-[15%] pt-[2%] pb-[2%]  transition-all ease-in-out"
                  src={img}
                ></img>
              );
            })}
          </div>
          <div
            id="changeImg"
            className="w-[80%] flex overflow-scroll  gap-[1%] mt-5 md:hidden "
          >
            {product.images.map((img) => {
              return (
                <div className="w-[15%]">
                  <img
                    onClick={() =>
                      handleImgChange(
                        (100 / product.images.length) *
                          product.images.indexOf(img),
                        img
                      )
                    }
                    src={img}
                    className={
                      photo === img
                        ? " border-[1.5px] border-[black] p-[15%] pt-[4%] md:pt-[2%] pb-[4%] transition-all ease-in-out hover:opacity-[80%] cursor-pointer "
                        : "  border  p-[15%] pt-[2%] pb-[2%] transition-all ease-in-out hover:opacity-[80%] cursor-pointer "
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div
          id="product-options"
          className=" sticky top-0 w-[40%] md:w-[100%] md:relative  self-start  pt-[5%]"
        >
          <div id="product-name">
            <h1>{product.brand}</h1>
            <h2 className="font-light">{product.name}</h2>
          </div>
          <div
            id="price"
            className="border-b  mb-10 pb-5 pt-10 xs:pt-2 xs:mb-5 "
          >
            <h1 className="font-light text-[25px] pt-[px]">{product.price}</h1>
          </div>
          <div id="select-size" className=" absolute w-[100%]">
            <div className="flex pb-5">
              <p className="underline  cursor-pointer"> Size Guide</p>
            </div>

            <SizeDropdown product={product} />
          </div>
          <div className="  mt-[150px] xs:mt-[130px]  " id="cart-favorite">
            <BagButton />
          </div>
          <div className="flex pt-[20px] justify-between w-[90%]   semi-lg:hidden font-light md:!flex 3xs:!hidden ">
            <div>
              <p>CONDITION</p>
              <p>New</p>
            </div>
            <div>
              <p>ESTIMATED DELIVERY</p>
              <p>Determined At Checkout</p>
            </div>
          </div>
          <div id="productDetails" className="pt-10 border-b">
            <ProductDetails name="Product Details" text="Loren Epsum" />
            <ProductDetails name="Fabric" text="Loren Epsum" />
            <ProductDetails name="Return Policy" text="Loren Epsum" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
