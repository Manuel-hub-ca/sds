"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "./LanguageProvider";
import { FlyoutLink, PricingContent } from "./NavBar";
import SocialMedia from "./SocialMedia";
const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [browserClass, setBrowserClass] = useState("");
  const [mounted, setMounted] = useState(false); // ✅ Prevent hydration mismatch
  const pathname = usePathname();

  const locale = pathname.split("/")[1]; // extract 'fr', 'en', etc.
  const localeHome = `/${locale}`;
  const r = useRouter();
  const t = useTranslations();
  const handleScroll = (id) => {
    setIsOpen(false);
    r.push("/#" + id);
  };

  // ✅ Detect browser after mount
  useEffect(() => {
    setMounted(true);
    const ua = navigator.userAgent;
    if (ua.includes("Safari") && !ua.includes("Chrome")) {
      console.log("Safari detected");
      setBrowserClass("justify-center");
    } else if (ua.includes("Chrome")) {
      console.log("Chrome detected");
      setBrowserClass("justify-around");
    } else {
      console.log("Other browser");
      setBrowserClass("justify-around"); // fallback
    }
  }, []);

  if (!mounted) return null; // ✅ Wait until browser is known

  return (
    <>
      <button
        className="flex flex-col gap-1 transition-transform hover:scale-125 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block w-8 h-1.5 bg-white rounded-full ${
            isOpen ? "hidden" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1.5 bg-white rounded-full ${
            isOpen ? "-rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block w-8 h-1.5 bg-white rounded-full ${
            isOpen ? "rotate-45" : ""
          }`}
        ></span>
      </button>

      <div
        className={`w-full h-screen flex flex-col items-center bg-[#6E6D50] text-2xl absolute right-0 top-0 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`h-10/12 flex flex-col text-white items-center justify-start gap-4 ${browserClass}`}
        >
          <div className="relative w-1/3 h-1/4 md:w-40">
            <Link href={localeHome} onClick={() => setIsOpen(!isOpen)}>
              <Image
                src="/img/logoFooter.png"
                alt="Company Logo"
                fill
                priority
                className="object-contain transition-transform duration-300 hover:scale-110 hover:opacity-75"
              />
            </Link>
          </div>

          <Link
            href={localeHome + "/projects"}
            className="transform hover:scale-110 hover:text-[#4D5C5A]"
            onClick={() => setIsOpen(false)}
          >
            {t("projects")}
          </Link>

          <div>
            <FlyoutLink
              href="#"
              FlyoutContent={PricingContent}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            >
              {t("services")}
            </FlyoutLink>
          </div>

          <button onClick={() => handleScroll("aboutUs")}>{t("about")}</button>
          <button onClick={() => handleScroll("contact")} className=" mb-5">
            {t("contact")}
          </button>
          <SocialMedia />
          <div className=" flex flex-row w-fit gap-2.5 mt-12">
            <h1 className="text-4xl font-bold w-fit h-fit text-amber-300">SDS</h1>
            <h1 className=" text-4xl font-bold w-fit">CONTRUCTION</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
