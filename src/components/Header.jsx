import React from "react";

import HeaderIcon from "../assets/svg/Header.svg";
import Moon from "../assets/svg/Moon";
import Avatar from "../assets/img/avatar.jpg";

function Header() {
  return (
    <div className="fixed h-17.5 w-full z-10 bg-draftWidget flex justify-between items-center sm:h-20 lg:w-[6.4375rem] lg:h-screen lg:flex-col lg:rounded-r-[28px]">
      <div className="h-full lg:w-full lg:h-auto">
        <img src={HeaderIcon} className="h-full lg:w-full" alt="icon" />
      </div>
      <div className="flex items-center h-full  lg:flex-col lg:h-auto">
        <button className="px-6 border-r border-headerBorder h-full lg:border-none lg:h-auto lg:py-8">
          <Moon />
        </button>
        <div className="px-6 lg:px-8 lg:py-6 lg:border-t border-headerBorder">
          <img src={Avatar} alt="avatar" className="rounded-full w-8 lg:w-10" />
        </div>
      </div>
    </div>
  );
}

export default Header;
