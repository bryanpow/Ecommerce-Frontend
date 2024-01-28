import React, { useState, useEffect } from "react";

function BagButton() {
  const [saved, setSaved] = useState(false);
  const handleSave = () => {
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  };
  return (
    <div className="flex w-[90%] gap-2">
      <button
        type="button"
        className="inline-block  hover:opacity-[0.8]   w-[70%] md:w-[80%] bg-[black]  pt-[8px] pb-[8px] leading-normal text-[white] font-[400] text-[17px] transition duration-150 ease-in-out  "
      >
        Add To Bag
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="  hover:bg-[#D9D9D9] flex justify-around  border-[1px] border-black  w-[30%] md:w-[20%] bg-[white] pt-[8px] pb-[8px]   font-[400] text-[17px] transition duration-150 ease-in-out  "
      >
        <p className="pl-2 semi-lg:hidden">Save</p>
        <img
          width="25px pr-1 "
          src={saved ? "/heart-red.png" : "/heart.png"}
        ></img>
      </button>
    </div>
  );
}

export default BagButton;
