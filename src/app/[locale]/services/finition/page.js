"use client";

import RightSideUp from "@/src/components/RightSideUp";
import UpSideDown from "@/src/components/UpSideDown";
import { useTranslations } from "@/components/LanguageProvider";

const Finition = () => {
  const t = useTranslations();

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative w-screen h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-14 items-center text-white"
        style={{ backgroundImage: "url('/finition1.jpg')" }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <h1 className="absolute text-3xl md:text-5xl mx-auto my-6 max-w-5xl px-2 md:px-0 mb-16">
          {t("finition.hero.title")}
        </h1>
        <RightSideUp bgColor="#345C5A" />
      </div>

      {/* MIDDLE SECTION */}
      <div className="h-screen w-screen bg-[#345C5A] flex flex-col justify-center items-center text-white">
        <div className="max-w-5xl h-11/12 flex flex-col justify-around text-xl md:text-3xl px-3 md:px-0">
          <h1>{t("finition.section1.title")}</h1>
          <p className="text-2xl">{t("finition.section1.p1")}</p>
          <p>{t("finition.section1.p2")}</p>
          <p>{t("finition.section1.p3")}</p>
        </div>
      </div>

      {/* FINAL SECTION */}
      <div
        className="relative h-screen w-screen bg-no-repeat bg-cover bg-center text-white text-2xl md:text-5xl flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/finition2.jpg')" }}
      >
        <RightSideUp bgColor="#6E6D50" />
        <UpSideDown bgColor="#345C5A" />
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
