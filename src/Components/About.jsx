import React from "react";
import Logo from "../assets/logo2.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-white text-black">
      <div className="container flex justify-center text-center items-center flex-col gap-5">
        <h1 className="font-primary text-4xl md:text-5xl text-center relative ">
          about black ether
        </h1>
        <img src={Logo} alt="" className="md:w-[30rem]" />
        <p className="max-w-[600px] ">
          A mischievous little black sheep named Black Ether, leads the charge in
          bringing humor and fun to the world of crypto. Black Ether is known for her
          misadventures, constantly getting into hilarious situations while
          navigating the blockchain. From accidentally stumbling upon hidden
          treasure troves of tokens to playfully pranking unsuspecting users
          with harmless jokes, Black Ether's antics inject a sense of joy and
          amusement into the crypto space.
        </p>{" "}
        <p className="max-w-[600px] ">
          Black Ether's community is a lively bunch, with members engaging in
          playful banter and sharing funny memes on the project's dedicated
          social media channels. Regular "Crypto Comedy Nights" are organized,
          featuring stand-up performances from blockchain enthusiasts and
          comedians who tickle everyone's funny bones with witty jokes and
          hilarious anecdotes about the crypto world.
        </p>{" "}
      </div>
    </section>
  );
};

export default About;
