import React from "react";

const Tokenomics = () => {
  return (
    <section className="py-[50px] w-full ">
      <div className="container flex justify-center text-center items-center flex-col gap-5">
        <h1 className="font-primary text-4xl md:text-5xl text-center relative ">
          tokenomics
        </h1>
        <div className="flex mt-14 flex-col justify-center items-center gap-4">
          <article className="flex gap-4 items-center font-primary text-2xl tracking-wide">
            <div className="w-[40px] h-[40px] bg-white rounded-full"></div>
            <p>1million supply</p>
          </article>
          <article className="flex gap-4 items-center font-primary text-2xl tracking-wide">
            <div className="w-[40px] h-[40px] bg-transparent border-2 border-white rounded-full"></div>
            <p>name: black ether</p>
          </article>
          <article className="flex gap-4 items-center font-primary text-2xl tracking-wide">
            <div className="w-[40px] h-[40px] bg-white rounded-full"></div>
            <p>2%: max wallet</p>
          </article>
          <article className="flex gap-4 items-center font-primary text-2xl tracking-wide">
            <div className="w-[40px] h-[40px] bg-white rounded-full"></div>
            <p>ticker: #BEther</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
