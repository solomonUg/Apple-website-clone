import React from "react";
import {appleImg, bagImg, searchImg} from "../utils";
import {navLists} from "../constants"

export const NavBar = () => {
  return (
    <header className="w-full sm:px-10 px-5 flex justify-center items-center">
      <nav className="flex w-full screen-max-width py-2">
        <img src={appleImg} alt="Apple image" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav, i) => <div key={nav} className="px-5 cursor-pointer text-gray hover:text-white transition-all">{nav}</div>)}
        </div>

        <div className="flex items-baseline gap-7  max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search"  width={18} height={18}/>
            <img src={bagImg} alt="bag"  width={18} height={18}/>
        </div>
      </nav>
    </header>
  );
};
