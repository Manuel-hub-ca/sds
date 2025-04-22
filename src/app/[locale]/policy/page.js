"use client";

import { useTranslations } from "@/components/LanguageProvider";
import React from "react";

const Policy = () => {
  const t = useTranslations();

  return (
    <div className="min-h-screen w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-neutral-900 flex flex-col items-start justify-center bg-red-200">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        {t("policy.title")}
      </h2>
      <p className="text-base sm:text-lg mb-8">{t("policy.intro")}</p>
      <ul className="list-disc pl-5 sm:pl-6 space-y-4 text-sm sm:text-base">
        <li>{t("policy.points.1")}</li>
        <li>{t("policy.points.2")}</li>
        <li>{t("policy.points.3")}</li>
      </ul>
    </div>
  );
};

export default Policy;
