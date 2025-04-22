"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
        className={`w-full h-screen flex flex-col items-center bg-[#6E6D50] absolute right-0 top-0 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`h-10/12 flex flex-col items-center gap-4 ${browserClass}`}
        >
          <div className="relative w-1/3 h-1/4 md:w-40">
            <Link href={localeHome} onClick={() => setIsOpen(!isOpen)}>
              <Image
                src="/img/logo.png"
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
            Projects
          </Link>

          <div>
            <FlyoutLink href="#" FlyoutContent={PricingContent}>
              Services
            </FlyoutLink>
          </div>

          <button onClick={() => handleScroll("aboutUs")}>About</button>
          <button onClick={() => handleScroll("contact")}>Contact Us</button>
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Hamburger;
