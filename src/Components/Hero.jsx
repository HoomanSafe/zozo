import React from "react";
import Logo from "../assets/logo3.png";

const Hero = () => {
  return (
    <section className="py-[100px]">
      <div className="container grid gap-5 text-center justify-center items-center">
        <img src={Logo} alt="" className="md:w-[30rem]" />
        <h1 className="font-bold text-5xl capitalize font-primary">
          Black Ether's mascot
        </h1>
        <p className="max-w-[600px] ">
          A mischievous little black sheep named Ethel, leads the charge in
          bringing humor and fun to the world of crypto. Ethel is known for her
          misadventures, constantly getting into hilarious situations while
          navigating the blockchain. From accidentally stumbling upon hidden
          treasure troves of tokens to playfully pranking unsuspecting users
          with harmless jokes, Ethel's antics inject a sense of joy and
          amusement into the crypto space.
        </p>

        <div className=" flex justify-center items-center">
          <article className="min-w-10/12 py-5 px-3 border-2 border-white">
            0x0000000000000000000000000000
          </article>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
          <a
            href="https://t.me/BlackEtherportal" target="_blank"
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
