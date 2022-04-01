import React from "react";

import HeaderIcon from "../assets/svg/Header.svg";
import Moon from "../assets/svg/Moon";
import Avatar from "../assets/img/avatar.jpg";

function Header() {
  return (
    <div className="fixed h-17.5 w-full z-10 bg-draftWidget flex justify-between items-center md:h-20 xl:w-[6.4375rem] xl:h-screen xl:flex-col xl:rounded-r-[1.75rem]">
      <div className="h-full xl:w-full xl:h-auto">
        <img src={HeaderIcon} className="h-full xl:w-full" alt="icon" />
      </div>
      <div className="flex items-center h-full xl:flex-col xl:h-auto">
        <button className="px-6 border-r border-headerBorder h-full xl:border-none xl:h-auto xl:py-8">
          <Moon />
        </button>
        <div className="px-6 xl:px-8 xl:py-6 xl:border-t border-headerBorder">
          <img src={Avatar} alt="avatar" className="rounded-full w-8 xl:w-10" />
        </div>
      </div>
    </div>
  );
}

export default Header;
