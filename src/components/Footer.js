"use client"
import Link from "next/link";
import { useTranslations } from "./LanguageProvider";

export default function Footer() {
  const t = useTranslations();
  //bg-[linear-gradient(to_left,_black_0%,_black_20%,_transparent_50%,_transparent_100%)]
  return (
    <>
      <div className="footer flex flex-col md:flex-row bg-black/20 justify-center items-center  gap-3  h-30 md:h-16 md:text-lg">
        <p>S.D.S Construction Inc</p>
        <p className="">{t("copyright")} </p>
        <Link href="/fr/policy" className=" hover:text-white text-yellow-500">
          {t("privacypolicy")}
        </Link>
      </div>
    </>
  );
}
