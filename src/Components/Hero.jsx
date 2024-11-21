import React from "react";
import Logo from "../assets/banner.jpeg";

const Hero = () => {
  return (
    <section className="py-[100px]">
      <div className="container grid gap-5 text-center justify-center items-center">
        <img src={Logo} alt="" className="md:w-[30rem]" />
        <h1 className="font-bold text-5xl capitalize font-primary">
          ZoZo

        </h1>
        <p className="max-w-[600px] ">
          Once a resident of Monstropolis, he is now shaping the future of crypto, leaving his days of hoovering up behind him.


        </p>

        <div className=" flex justify-center items-center">
          <article className="min-w-10/12 py-5 px-3 border-2 border-white">
            0x0000000000000000000000000000
          </article>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
          <a
            href="https://t.me/ZozoBNB" target="_blank"
            className="px-10 py-4 bg-white text-black font-primary cap border-black border-2 uppercase"
          >
            telegram
          </a>
          <a
            href=""
            className="px-10 py-4 bg-transparent text-white font-primary cap border-white border-2 uppercase"
          >
            chart
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
