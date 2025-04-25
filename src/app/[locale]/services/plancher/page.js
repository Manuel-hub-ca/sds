"use client";

import { useTranslations } from "@/components/LanguageProvider";
import RightSideUp from "@/src/components/RightSideUp";
import UpSideDown from "@/src/components/UpSideDown";
import Image from "next/image";
import useIsMobile from "@/src/hooks/useIsMobile";
const Plancher = () => {
  const t = useTranslations();
  const isMobile = useIsMobile()
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-14 items-center text-white"
        style={{ backgroundImage: "url('/floor1.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <h1 className="absolute text-3xl md:text-5xl mx-auto my-0 max-w-5xl leading-snug text-left px-4 mb-16">
          {t("plancher.hero.title")}
        </h1>
        {/* <RightSideUp bgColor="#7B4B3A" /> */}
      </div>

      {/* Problem Awareness */}
      <div className=" relative flex flex-col md:flex-row  overflow-visible bg-amber-50">
        {isMobile ? (
          <div className=" relative w-screen md:w-[800px] h-screen md:h-[800px] ">
            <Image src={"/plancherPhone.png"} alt="img1 joint" fill />
          </div>
        ) : (
          <div className=" relative w-screen md:w-[800px] h-screen md:h-[700px] ">
            <Image src={"/plancher.png"} alt="img1 joint" fill />
          </div>
        )}

        <div className=" relative w-screen h-fit md:w-[500px] md:h-[748px] md:mr-3 md:translate-y-6 md:-mt-12 z-20 text-xl bg-amber-50 p-10">
          <p className=" text-justify w-full">{t("flooring")}</p>
        </div>
      </div>
      {/* <div className="h-screen w-screen bg-[#7B4B3A] flex flex-col justify-center items-center text-white">
        <div className="max-w-5xl h-10/12 flex flex-col justify-around text-2xl md:text-3xl px-4">
          <h1>{t("plancher.section1.title")}</h1>
          <p className="text-2xl">{t("plancher.section1.p1")}</p>
          <p>{t("plancher.section1.p2")}</p>
          <p>{t("plancher.section1.p3")}</p>
        </div>
      </div> */}

      {/* Value Proposition */}
      <div
        className="relative h-screen w-screen bg-no-repeat bg-cover bg-center text-white text-5xl flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/floor2.jpg')" }}
      >
        <RightSideUp bgColor="#6E6D50" />
        {/* <UpSideDown bgColor="#7B4B3A" /> */}
        <div className="absolute self-center w-full h-2/3 z-0 bg-[linear-gradient(to_bottom,_transparent_5%,_rgba(0,0,0,0.2)_20%,_rgba(0,0,0,0.6)_30%,_rgba(0,0,0,0.6)_50%,_rgba(0,0,0,0.6)_70%,_rgba(0,0,0,0.6)_88%,transparent_95%)]" />
        <div className="absolute z-10 max-w-5xl h-11/12 gap-9 flex flex-col justify-center items-start px-4 text-left leading-normal text-white text-3xl">
          <span>{t("plancher.section2.p1")}</span>
          <span>{t("plancher.section2.p2")}</span>
          <span>{t("plancher.section2.p3")}</span>
        </div>
      </div>
    </>
  );
};

export default Plancher;
