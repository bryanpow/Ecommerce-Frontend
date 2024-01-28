import React, { useState, useEffect } from "react";
import { Product } from "../pages/ProductPage";
interface SizeDropdownProps {
  product: Product;
}

const SizeDropdown: React.FC<SizeDropdownProps> = ({ product }) => {
  const [dropActive, setDropActive] = useState<boolean>(false);
  const [selectedSize, setSelectedSize] = useState<string>();
  const handleDropdown = () => {
    if (!dropActive) {
      setDropActive(true);
    } else {
      setDropActive(false);
    }
  };
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    setDropActive(false);
  };
  const height = 28 * product.sizes.length;
  console.log(height);
  return (
    <div
      onClick={handleDropdown}
      className=" bg-white z-[1000] relative border-[1px] w-[90%] flex cursor-pointer overflow-hidden   border-[black] "
    >
      <div className="w-[100%] ">
        <div className="">
          <p
            className={
              !selectedSize
                ? "text-[gray] pl-3 w-[80%]   truncate font-light p-2 justify-center h-[40px]"
                : " pl-3 w-[80%]   truncate font-light p-2 justify-center h-[40px]"
            }
          >
            {!selectedSize ? "Select size (Clothing Standard)" : selectedSize}
          </p>
          <div
            style={dropActive ? { height: `${height}px` } : {}}
            className={
              dropActive
                ? ` w-[110%] flex flex-col content-full  overflow-x-hidden  border-t overflow-y-scroll transition-all duration-[0.2s] height[${12}px]`
                : "w-[110%] flex flex-col content-full  overflow-x-hidden  border-t overflow-y-scroll transition-all duration-[0.2s] h-[0.1vh] "
            }
          >
            {product.sizes.map((size: string) => {
              console.log(size);
              return (
                <div>
                  <p
                    onClick={() => handleSizeChange(size)}
                    className={
                      size !== selectedSize
                        ? " hover:bg-[#F0F0F0] pl-3 p-[2px] font-semibold xs:p-[10px]"
                        : "xs:p-[10px] bg-[#D9D9D9] pl-3 p-[2px] font-semibold"
                    }
                  >
                    {size}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img
        src="/dropdownArrow.svg"
        onClick={handleDropdown}
        className={
          dropActive
            ? " h-[35px] translate-y-[7px]  transition-all ease-in-out duration-[0.4s]  translate-x-[-12px] pt-3 rotate-180 "
            : "h-[35px]  translate-x-[-12px] pt-3 transition-all ease-in-out duration-[0.4s]  "
        }
      ></img>
    </div>
  );
};

export default SizeDropdown;
