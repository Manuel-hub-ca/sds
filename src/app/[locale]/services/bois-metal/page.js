"use client";

import { useTranslations } from "@/components/LanguageProvider";
import RightSideUp from "@/src/components/RightSideUp";
import useIsMobile from "@/src/hooks/useIsMobile";
import Image from "next/image";

const BoisMetal = () => {
  const t = useTranslations();
  const isMobile = useIsMobile();
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-14 items-center text-white"
        style={{
          backgroundImage: `url(${isMobile ? "/woodPhone.png" : "/wood1.png"})`,
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <h1 className="absolute text-3xl md:text-5xl mx-auto my-6 max-w-5xl px-2 md:px-0 mb-16">
          {t("boisMetal.hero.title")}
        </h1>
        {/* <RightSideUp bgColor="#334155" /> */}
      </div>

      {/* MIDDLE SECTION */}

      <div
        className="relative flex flex-col items-center md:flex-row overflow-visible justify-center 2xl:py-16"
        style={{ backgroundImage: "url('bgServices.jpeg')" }}
      >
        {/* Text Block */}
        <div className="relative w-full md:w-[500px] h-fit md:h-[748px] md:translate-y-6 md:-mt-12 z-20 text-xl bg-white text-black p-10 md:border-r-4 md:border-r-yellow-300">
          <p className="text-justify w-full hyphens-auto">{t("woodMetal")}</p>
        </div>

        {/* Image Block */}
        <div
          className={`relative w-full md:w-[800px] ${
            isMobile ? "h-screen" : "h-[700px]"
          }`}
        >
          <Image
            src={isMobile ? "/metalPhone.png" : "/metal.png"}
            alt="img1 joint"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/*         
        <div className=" relative flex flex-col items-center md:flex-row  overflow-visible bg-neutral-800 md:bg-gray-800">
          <div className=" relative w-screen h-fit md:w-[500px] md:h-[748px]  md:translate-y-6 md:-mt-12 z-20 text-xl bg-white text-black p-10 md:border-r-4 md:border-r-yellow-300">
            <p className=" text-justify w-full hyphens-auto">
              {t("woodMetal")}
            </p>
          </div>
          {isMobile ? (
            <div className=" relative flex justify-center w-11/12 md:w-[800px] h-screen  md:h-[800px] border-l-4 border-l-yellow-300">
              <Image src={"/metalPhone.png"} alt="img1 joint" fill />
            </div>
          ) : (
            <div className=" relative w-screen md:w-[800px] h-[700px] ">
              <Image src={"/metal.png"} alt="img1 joint" fill />
            </div>
          )}
        </div> */}

      {/* FINAL SECTION */}
      <div
        className="relative h-screen w-screen bg-no-repeat bg-cover bg-center text-white text-2xl md:text-5xl flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/wood2.jpg')" }}
      >
        <RightSideUp bgColor="#6E6D50" />
        {/* <UpSideDown bgColor="#334155" /> */}
        <div className="absolute self-center w-full h-2/3 z-0 bg-[linear-gradient(to_bottom,_transparent_5%,_rgba(0,0,0,0.2)_20%,_rgba(0,0,0,0.2)_30%,_rgba(0,0,0,0.2)_50%,_rgba(0,0,0,0.2)_70%,_rgba(0,0,0,0.2)_88%,transparent_95%)]" />
        <div className="absolute max-w-5xl h-11/12 gap-9 flex flex-col justify-center items-center px-2 md:px-0">
          <span>{t("boisMetal.section2.p1")}</span>
          <span>{t("boisMetal.section2.p2")}</span>
          <span>{t("boisMetal.section2.p3")}</span>
        </div>
      </div>
    </>
  );
};

export default BoisMetal;
