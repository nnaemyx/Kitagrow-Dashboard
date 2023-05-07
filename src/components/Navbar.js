import Image from "next/image";
import React from "react";


import { 
  DropdownIcon,
  SearchIcon,
  NotificationIcon
} from "./Icon";





const Navbar = () => {
  return (
    <div className="mt-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-8  relative">
          <input
            type="text"
            placeholder="Search something..."
            className="border px-[12px] py-[10px] text-[14px] font-[400] rounded-[8px] w-[300px] focus:outline-none border-[#D0D5DD] border-solid"
          />
          <span className="absolute left-[17rem] w-[14.67px] text-[#667085] ">
            <span>
              <SearchIcon/>
            </span>
          </span>
        </div>

        <div>
          <div className="flex gap-3 items-center">
            <span>
              <NotificationIcon/>
            </span>
            <hr className="transform rotate-90 w-[30px] h-[10px]" />
            <div className="flex gap-3 items-center">
              <h1 className="bg-[#EEF4FF] rounded-[30px] text-[16px] px-2 py-1 text-[#2D31A6]">
                M
              </h1>
              <h1 className="text-[16px]">Maxwell Anderson</h1>
              <span>
              <DropdownIcon/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
