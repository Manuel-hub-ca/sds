"use client";

import { useTranslations } from "@/components/LanguageProvider";
import RightSideUp from "@/src/components/RightSideUp";
import UpSideDown from "@/src/components/UpSideDown";
import React from "react";
import Image from "next/image";
import useIsMobile from "@/src/hooks/useIsMobile";

const Demolition = () => {
  const t = useTranslations();
  const isMobile = useIsMobile()
  return (
    <>
      <div
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-14 items-center text-white"
        style={{ backgroundImage: "url('/demolition1.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <h1 className="absolute text-3xl md:text-5xl mx-auto my-0 max-w-5xl leading-snug text-left px-4 mb-16">
          {t("demolition.hero.title")}
        </h1>
      </div>

      {/* 
      <div className=" relative flex flex-col md:flex-row  overflow-visible bg-amber-50">
        {isMoblie ? (
          <div className=" relative w-screen md:w-[800px] h-screen md:h-[800px] ">
            <Image src={"/demolition.png"} alt="img1 joint" fill />
          </div>
        ) : (
          <div className=" relative w-screen md:w-[800px] h-screen md:h-[700px] ">
            <Image src={"/demolition2.png"} alt="img1 joint" fill />
          </div>
        )}

        <div className=" relative w-screen h-fit md:w-[500px] md:h-[748px] border-l-4 border-l-yellow-300 md:translate-y-6 md:-mt-12 z-20 text-xl bg-amber-50 p-10">
          <p className=" text-justify w-full hyphens-auto">{t("demolition")}</p>
        </div>
      </div> */}

      <div
        className="relative flex flex-col md:flex-row overflow-visible justify-center 2xl:py-16 bg-no-repeat bg-center bg-cover bg-neutral-800"
        style={{ backgroundImage: "url('/bgServices copy.jpeg')" }}
      >
        {/* Image Block */}
        <div
          className={`relative w-full md:w-[800px] ${
            isMobile ? "h-screen" : "h-[700px]"
          }`}
        >
          <Image
            src={isMobile ? "/demolition.png" : "/demolition2.png"}
            alt="img1 joint"
            fill
            className="object-cover"
          />
        </div>

        {/* Text Block */}
        <div className="relative w-full md:w-[500px] h-fit md:h-[748px] border-l-4 border-l-yellow-300 md:translate-y-6 md:-mt-12 z-20 text-xl bg-amber-50 p-10">
          <p className="text-justify w-full hyphens-auto">{t("demolition")}</p>
        </div>
      </div>

      <div
        className="relative h-screen w-screen bg-no-repeat bg-cover bg-center text-white text-5xl flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/demolition2.jpg')" }}
      >
        <RightSideUp bgColor="#6E6D50" />
        {/* <UpSideDown bgColor="#581C1C" /> */}
        <div className="absolute self-center w-full h-2/3 z-0 bg-[linear-gradient(to_bottom,_transparent_5%,_rgba(0,0,0,0.2)_20%,_rgba(0,0,0,0.6)_30%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0.6)_70%,_rgba(0,0,0,0.6)_88%,transparent_95%)]" />
        <div className="absolute z-10 max-w-5xl h-11/12 gap-9 flex flex-col justify-center items-start px-4 text-left leading-normal text-white text-3xl">
          <span>{t("demolition.section2.p1")}</span>
          <span>{t("demolition.section2.p2")}</span>
          <span>{t("demolition.section2.p3")}</span>
        </div>
      </div>
    </>
  );
};

export default Demolition;
