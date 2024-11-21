import React from "react";
import Dextool from "../assets/dextool.svg";
import Telegram from "../assets/telegram.svg";
import Twitter from "../assets/twitter.svg";

const Header = () => {
  return (
    <header className="py-3 w-full bg-white text-black absolute top-0 z-50">
      <nav className="container flex justify-between items-center">
        <a href="" className="font-primary capitalize text-3xl">
          ZoZo
        </a>
        <div className="flex gap-3 items-center ">
          <a href="" className=" ">
            <img src={Dextool} alt="" className="w-[2rem] transition " />
          </a>
          <a href="https://x.com/ZozoZozoBNB" target="_blank" className=" ">
            <img src={Telegram} alt="" className="w-[2rem] transition " />
          </a>
          <a
            href="http://x.com/ZozoBNB"
            target="_blank"
            className=" "
          >
            <img src={Twitter} alt="" className="w-[2rem] transition " />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
