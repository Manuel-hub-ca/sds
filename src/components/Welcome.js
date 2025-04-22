"use client";

import { useTranslations } from "@/components/LanguageProvider";
import RightSideUp from "./RightSideUp";

const Welcome = () => {
  const t = useTranslations();

  return (
    <div className="relative" id="home">
      <div
        className="text-white relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/back.jpg')" }}
      >
        {/* Dark fade overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Text content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center md:items-end w-full justify-end pb-28 md:pb-36 sm:p-2.5">
          <h1 className="text-2xl md:text-6xl font-bold mb-3 w-11/12">
            {t("welcome.title")}
          </h1>
          <h1>heyyy may dear</h1>
          <h2 className="text-xl md:text-3xl font-bold mb-2 w-11/12">
            {t("welcome.subtitle")}
          </h2>
          <h3 className="text-xl md:text-lg font-bold w-11/12">
            {t("welcome.tagline")}
          </h3>
        </div>
      </div>

      <RightSideUp bgColor="#6E6D50" />
    </div>
  );
};

export default Welcome;
