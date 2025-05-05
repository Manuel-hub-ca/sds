"use client";

import { useTranslations } from "@/components/LanguageProvider";
import RightSideUp from "@/src/components/RightSideUp";
import useIsMobile from "@/src/hooks/useIsMobile";
import Image from "next/image";
const Finition = () => {
  const t = useTranslations();
  const isMobile = useIsMobile();
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-14 items-center text-white"
        style={{
          backgroundImage: `url(${
            isMobile ? "/finition1Phone.png" : "/finition1.png"
          })`,
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <h1 className="absolute text-3xl md:text-5xl mx-auto my-6 max-w-5xl px-2 md:px-0 mb-16">
          {t("finition.hero.title")}
        </h1>
      </div>

      {/* MIDDLE SECTION */}
      {/* <div className=" relative flex flex-col md:flex-row  overflow-visible bg-gray-200">
        <div className=" relative w-screen h-fit md:w-[500px] md:h-[748px] border-r-4 border-r-yellow-300 md:translate-y-6 md:-mt-12 z-20 text-xl bg-amber-50 p-10">
          <p className=" text-justify hyphens-auto w-full">
            {t("finishingWork")}
          </p>
        </div>
        {isMobile ? (
          <div className=" relative w-screen md:w-[800px] h-screen md:h-[800px] ">
            <Image src={"/finitionPhone.png"} alt="img1 joint" fill />
          </div>
        ) : (
          <div className=" relative w-screen md:w-[800px] h-screen md:h-[700px] ">
            <Image src={"/finition.png"} alt="img1 joint" fill />
          </div>
        )}
        
        
      </div> */}

      <div
        className="relative flex flex-col md:flex-row overflow-visible justify-center 2xl:py-16"
        style={{ backgroundImage: "url('bgServices.jpeg')" }}
      >
        {/* Text Block */}
        <div className="relative w-full md:w-[500px] h-fit md:h-[748px] border-r-4 border-r-yellow-300 md:translate-y-6 md:-mt-12 z-20 text-xl bg-amber-50 p-10">
          <p className="text-justify hyphens-auto w-full">
            {t("finishingWork")}
          </p>
        </div>

        {/* Image Block */}
        <div
          className={`relative w-full md:w-[800px] ${
            isMobile ? "h-screen" : "h-[700px]"
          }`}
        >
          <Image
            src={isMobile ? "/finitionPhone.png" : "/finition.png"}
            alt="img1 joint"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* FINAL SECTION */}
      <div
        className="relative h-screen w-screen bg-no-repeat bg-cover bg-center text-white text-2xl md:text-5xl flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${
            isMobile ? "/finition3Phone.png" : "/finition3.png"
          })`,
        }}
      >
        <RightSideUp bgColor="#6E6D50" />
        {/* <UpSideDown bgColor="#345C5A" /> */}
        <div className="absolute self-center w-full h-2/3 z-0 bg-[linear-gradient(to_bottom,_transparent_5%,_rgba(0,0,0,0.2)_20%,_rgba(0,0,0,0.2)_30%,_rgba(0,0,0,0.2)_50%,_rgba(0,0,0,0.2)_70%,_rgba(0,0,0,0.2)_88%,transparent_95%)]" />
        <div className="absolute max-w-5xl h-11/12 gap-9 flex flex-col justify-center items-center px-2 md:px-0">
          <span>{t("finition.section2.p1")}</span>
          <span>{t("finition.section2.p2")}</span>
          <span>{t("finition.section2.p3")}</span>
        </div>
      </div>
    </>
  );
};

export default Finition;
