import React from "react";
import Logo from "../assets/logo1.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-white text-black">
      <div className="container flex justify-center text-center items-center flex-col gap-5">
        <h1 className="font-primary text-4xl md:text-5xl text-center relative ">
          about ZoZo
        </h1>
        <img src={Logo} alt="" className="md:w-[30rem]" />
        <p className="max-w-[600px] ">
          ZOZO: Binance's Adorable Crypto Monster 🐸

ZOZO is on the Binance Smart Chain network, exploring lightning-fast transactions and low fees with endless curiosity. Once a resident of Monstropolis, he is now shaping the future of crypto, leaving his days of hoovering up behind him.


        </p>{" "}
        <p className="max-w-[600px] ">
          ZOZO is growing as a beloved mascot in the crypto world, always keeping fans excited for his next big move.


        </p>{" "}
      </div>
    </section>
  );
};

export default About;
