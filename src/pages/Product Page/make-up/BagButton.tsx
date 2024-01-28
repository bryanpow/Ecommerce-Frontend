import  { useEffect, useState} from "react";
import { Button } from "@material-tailwind/react";

function BagButton() {
  const [saved, setSaved] = useState<null | Boolean>(null);
  const handleSave = () => {
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  };

 
  return (
    <div className="flex w-[90%] gap-2">
      <Button
        
        type="button"
        className=" hover:bg-[#2b2b2b] b-shadow capitalize inline-block  rounded-[8px]   w-[70%] md:w-[80%] bg-[black]  pt-[8px] pb-[8px] leading-normal text-[white]  text-[17px]   font-light  "  placeholder={undefined}      >
        Add To Bag
      </Button>

      <Button
        
        type="button"
        onClick={handleSave}
        
        className=" b-shadow  capitalize hover:bg-[#D9D9D9] rounded-[8px] flex justify-around  border-[1px] border-black  w-[30%] md:w-[20%] bg-[white] pt-[8px] pb-[8px]   font-[400] text-[17px] text-black    " placeholder={undefined}      >
        <p  className="pl-2 font-light semi-lg:hidden">Save</p>
       
        <img
          key={Math.random()}
         className={saved != null? "pop": ''}
          width="25px pr-1 "
          src={saved ? "/heart-red.png" : "/heart.png"}
        ></img>
      </Button>
    </div>
  );
}

export default BagButton;
