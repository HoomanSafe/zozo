import React from "react";

const Map = () => {
  return (
    <section className="py-[50px] w-full bg-white text-black">
      <div className="container flex justify-center text-center items-center flex-col gap-5">
        <h1 className="font-primary text-4xl md:text-5xl text-center relative ">
          roadmap
        </h1>

        <div className="flex flex-col w-full md:flex-row justify-between items-center gap-6 md:flex-wrap">
          <article className="min-h-[200px] text-white rounded-bl-3xl rounded-se-3xl p-4 w-full md:w-[500px] bg-black">
            <h1 className="font-primary text-2xl text-start">phase 1</h1>
            <ul className="flex flex-col text-start font-primary list-disc list-inside gap-2 mt-4">
              <li>stealth launch on eth</li>
              <li>community & socials growth</li>
              <li>website launch</li>
              <li>marketing map</li>
              <li>eth trending</li>
              <li>listing on dextool</li>
            </ul>
          </article>
          <article className="min-h-[200px] text-white rounded-bl-3xl rounded-se-3xl p-4 w-full md:w-[500px] bg-black">
            <h1 className="font-primary text-2xl text-start">phase 2</h1>
            <ul className="flex flex-col text-start font-primary list-disc list-inside gap-2 mt-4">
              <li>renounce ownership</li>
              <li>listing on cmc</li>
              <li>listing on coingecko</li>
              <li>1million market cap</li>
              <li>heavy marketing push</li>
              <li>eth trending </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Map;
