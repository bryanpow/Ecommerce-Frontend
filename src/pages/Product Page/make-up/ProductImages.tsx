import React, { useState, useRef } from "react";
import { Product } from "../ProductPage";
export interface product {
  product: Product;
}
const ProductImages: React.FC<product> = ({ product }) => {
  const bigImgRef = useRef<HTMLDivElement | null>(null);
  const [photo, setPhoto] = useState(0);
  const handleImgChange = (percentage: number, img: number) => {
    setPhoto(img);
    if (bigImgRef.current) {
      const containerWidth = bigImgRef.current.scrollWidth;
      const scrollToX = (percentage / 100) * containerWidth;
      bigImgRef.current.scrollLeft = scrollToX;
    }
    setPhoto(img);
  };

  return (
    <div
      id="product-photos"
      className="w-[50%] md:w-[100%] sticky top-0 md:relative self-start"
    >
      <div
        id="big-product-photo"
        ref={bigImgRef}
        style={{ scrollBehavior: "smooth" }}
        className=" border-[1px]  overflow-scroll flex pointer-events-none md:pointer-events-auto  "
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
        className="hidden gap-5 md:flex font-light justify-center mt-3 w-[100%]"
        id="mobile-changeImg"
      >
        <div
          onClick={() =>
            handleImgChange(
              (100 / product.images.length) * (photo - 1),
              photo - 1 >= 0 ? photo - 1 : photo
            )
          }
          className="w-[30px] cursor-pointer "
        >
          <img src="/arrow-left.png"></img>
        </div>
        <p className="translate-y-[2px]">{`${photo + 1}/${
          product.images.length
        }`}</p>
        <div
          onClick={() =>
            handleImgChange(
              (100 / product.images.length) * (photo + 1),
              photo + 1 < product.images.length ? photo + 1 : photo
            )
          }
          className="w-[30px] cursor-pointer"
        >
          <img src="/arrow-right.png"></img>
        </div>
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
                    (100 / product.images.length) * product.images.indexOf(img),
                    product.images.indexOf(img)
                  )
                }
                src={img}
                className={
                  photo === product.images.indexOf(img)
                    ? " border-[1.5px] border-[black]  p-[15%] pt-[4%] md:pt-[2%] pb-[4%] transition-all ease-in-out hover:opacity-[80%] cursor-pointer "
                    : "  border  p-[15%] pt-[2%] pb-[2%] transition-all ease-in-out hover:opacity-[80%] cursor-pointer "
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
