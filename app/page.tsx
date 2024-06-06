"use client";

import { useRouter } from "next/navigation";
import Poppins from "next/font/local";
import React, { useEffect, useRef, useState } from "react";

const poppinsBold = Poppins({
  src: "../public/fonts/Poppins-ExtraBold.ttf",
  display: "swap",
  weight: "800",
});

const poppins = Poppins({
  src: "../public/fonts/Poppins-Bold.ttf",
  display: "swap",
  weight: "800",
});

const poppinsLight = Poppins({
  src: "../public/fonts/Poppins-Regular.ttf",
  display: "swap",
});

const Page = () => {
  const router = useRouter();
  return (
    <div className="absolute bg-white h-[80vh] w-full mt-0 pt-0 top-0 overflow-hidden">
      <div className="bg-black h-full w-full flex flex-col items-center justify-center gap-8 ">
        <h1
          className={
            poppins.className +
            " " +
            "cursor-default text-primary text-7xl tracking-[.2em] "
          }
        >
          AGE <div className="text-white">CALCULATOR</div>TOOL
        </h1>
        <div className="flex w-3/4 justify-around text-2xl cursor-default">
          <div className=" text-white">Acurate</div>
          <div className=" text-white">Fast</div>
          <div className=" text-white">Easy</div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => router.replace("/Calculator")}
            className=" bg-primary text-white
            active:bg-secondary active:border-[1px] active:border-primary active:text-primary rounded-md p-3 px-5
        hover:bg-[#420987] hover:text-white
        "
          >
            Try it Now
          </button>
        </div>

        <div
          className={
            poppinsBold.className +
            " " +
            "leading-[120px] cursor-default text-[8rem] absolute top-[10%] -right-[16%] -rotate-[13deg] opacity-5 sm:text-5xl"
          }
        >
          <div className="flex ">
            <div className="text-primary pr-2">{"--"}</div>
            <h1 className="text-white">years</h1>
          </div>
          <div className="flex ">
            <div className="text-primary pr-2">{"--"}</div>
            <h1 className="text-white">months</h1>
          </div>
          <div className="flex ">
            <div className="text-primary pr-2">{"--"}</div>
            <h1 className="text-white">days</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
