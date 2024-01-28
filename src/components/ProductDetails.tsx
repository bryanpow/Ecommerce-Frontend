import React, { useState, useEffect } from "react";

interface detailsProps {
  name: string;
  text: string;
}
const ProductDetails: React.FC<detailsProps> = ({ name, text }) => {
  const [dropActive, setDropActive] = useState(false);
  const handleDropdown = () => {
    if (dropActive) setDropActive(false);
    else setDropActive(true);
  };
  return (
    <div>
      <div
        onClick={handleDropdown}
        className=" bg-white relative border-t-[1px]  w-[90%] flex cursor-pointer overflow-hidden   "
      >
        <div className="w-[100%] ">
          <div className="flex justify-between">
            <p
              className={
                " w-[80%] font-normal  truncate  pt-3 pl-0 justify-center h-[40px]"
              }
            >
              {name}
            </p>
            {/* <img src='/dropdownArrow.svg' onClick={handleDropdown} className={ dropActive? ' h-[35px] translate-y-[7px]  transition-all ease-in-out duration-[0.4s]  translate-x-[-12px] pt-3 rotate-180 ' : 'h-[35px]  translate-x-[-12px] pt-3 transition-all ease-in-out duration-[0.4s]  ' }></img> */}
          </div>
          <div
            style={dropActive ? { height: "10vh" } : {}}
            className={
              dropActive
                ? ` w-[110%] flex flex-col content-full  overflow-x-hidden  overflow-y-scroll transition-all duration-[0.2s] height[${12}px]`
                : "w-[110%] flex flex-col content-full  overflow-x-hidden  overflow-y-scroll transition-all duration-[0.2s] h-[0.1vh] "
            }
          >
            <p className="font-light text-[gray] text-[13px]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
