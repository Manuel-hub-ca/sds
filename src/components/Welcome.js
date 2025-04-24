"use client";

import { useTranslations } from "@/components/LanguageProvider";
import useIsMobile from "../hooks/useIsMobile";
import RightSideUp from "./RightSideUp";

const Welcome = () => {
  const t = useTranslations();
  const isMobile = useIsMobile();

  return (
    <div className="relative" id="home">
      <div
        className="text-white relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: isMobile
            ? "url('/back_mobile.PNG')"
            : "url('/back.jpeg')",
        }}
      >
        {/* Dark fade overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* Text content */}
        <div className="absolute inset-0 z-10 flex flex-col md:items-start w-full justify-between md:justify-end pb-28 md:pb-36 p-2.5 md:px-8">
          <div>
            {" "}
            <h1 className="text-3xl md:text-6xl w-fit font-bold mt-24">
              SDS CONSTRUCTION
            </h1>
            {/* <h1 className="text-2xl md:text-6xl w-11/12 font-bold">
              9486-3669 QUEBEC INC
            </h1> */}
          </div>

          <h1 className="text-2xl md:text-5xl font-bold mb-3 w-11/12 mt-6">
            {t("welcome.title")}
          </h1>
          {!isMobile ? (
            <>
              <h2 className="text-xl md:text-3xl font-bold mb-2 w-11/12">
                {t("welcome.subtitle")}
              </h2>
              <h3 className="text-xl md:text-lg font-bold w-11/12">
                {t("welcome.tagline")}
              </h3>
            </>
          ) : null}
        </div>
      </div>

      <RightSideUp bgColor="#6E6D50" />
    </div>
  );
};

export default Welcome;
