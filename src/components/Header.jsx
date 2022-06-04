import React from "react";

import HeaderIcon from "../assets/svg/Header.svg";
import Moon from "../assets/svg/Moon";
import Avatar from "../assets/img/mushroom.jpeg";

function Header() {
  return (
    <div className="fixed z-50 flex justify-between items-center bg-draftWidget h-17.5 w-full md:h-20 xl:w-[6.4375rem] xl:flex-col xl:rounded-r-[1.75rem] xl:h-screen">
      <div className="h-full xl:h-auto xl:w-full">
        <img src={HeaderIcon} className="h-full xl:w-full" alt="icon" />
      </div>
      <div className="flex items-center h-full xl:flex-col xl:h-auto">
        <button className="border-r border-headerBorder h-full px-6 xl:border-none xl:h-auto xl:py-8">
          <Moon />
        </button>
        <div className="px-6 xl:px-8 xl:py-6 xl:border-t xl:border-headerBorder">
          <img src={Avatar} alt="avatar" className="rounded-full w-8 xl:w-10" />
        </div>
      </div>
    </div>
  );
}

export default Header;
