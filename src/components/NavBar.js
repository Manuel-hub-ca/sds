"use client";
import { useTranslations } from "@/components/LanguageProvider";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import handleNavigation from "../hooks/useScrollElement";
import Hamburger from "./Hamburger";
import LanguageChanger from "./LanguageChanger";

const NavBar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const r = useRouter();
  const isMobile = useIsMobile();

  const locale = pathname.split("/")[1]; // extract 'fr', 'en', etc.
  const localeHome = `/${locale}`;

  const handleAboutClick = (id) => {
    if (pathname === localeHome) {
      // Already on homepage → just scroll
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      if (id === "aboutUs") {
        // Navigate to home with anchor
        r.push(`${localeHome}#aboutUs`);
      } else {
        r.push("/");
      }
    }
  };

  useEffect(() => {
    console.log("isMobile changed:", isMobile);
  }, [isMobile]);
  const isActive = (href) => pathname === href;
  return (
    <div className="flex fixed top-0 z-50 left-0 w-screen h-20 bg-black/10 justify-between md:justify-around px-3 py-0">
      <div className="relative w-32 h-full md:w-40">
        <Link
          href={localeHome}
          className="flex justify-center"
        >
          <Image
            src="/img/logo.png"
            alt="Company Logo"
            fill
            priority
            className="object-contain transition-transform duration-300 hover:scale-110 hover:opacity-75"
          />
        </Link>
      </div>

      {!isMobile ? (
        <>
          <div className="flex w-1/2 justify-center items-center">
            <div className="flex flex-row gap w-full justify-around items-center">
              <Link
                href={localeHome + "/projects"}
                className={`hover:text-neutral-800 transition-colors duration-200 ${
                  isActive("/projects")
                    ? "text-neutral- font-semibold"
                    : "text-white"
                }`}
              >
                {t("navbar.projects")}
              </Link>

              <FlyoutLink href="#" FlyoutContent={PricingContent}>
                {t("navbar.services")}
              </FlyoutLink>
              <button
                className={`hover:text-neutral-800 transition-colors duration-200 ${
                  isActive("") ? "text-neutral- font-semibold" : "text-white"
                }`}
                onClick={() => handleAboutClick("aboutUs")}
              >
                {t("navbar.about")}
              </button>

              <button
                className={`hover:text-neutral-800 transition-colors duration-200 mr-1 ${
                  isActive(false) ? "text-neutral- font-semibold" : "text-white"
                }`}
                onClick={() => handleNavigation("contact")}
              >
                {t("navbar.contact")}
              </button>
            </div>
            <LanguageChanger isMobile={isMobile} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center">
            <Hamburger />
          </div>
          <LanguageChanger isMobile={isMobile} />
        </>
      )}
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-[2px] origin-left rounded-full bg-white transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ translateX: "-50%" }}
            className="absolute left-1/2 top-12 bg-black/75 md:bg-white/30 rounded-md"
          >
            <div className="absolute bg-transparent -top-6 left-0 right-0 h-6" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 [background:linear-gradient(315deg,_transparent_50%,_rgba(0,0,0,0.75)_50%)] md:[background:linear-gradient(315deg,_transparent_50%,_rgba(255,255,255,0.3)_50%)]" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "fr";
const [hoveredSlug, setHoveredSlug] = useState(null);

  const services = [
    { slug: "bois-metal", key: "boisMetal" },
    { slug: "finition", key: "finition" },
    { slug: "gypse", key: "gypse" },
    { slug: "carrelage", key: "carrelage" },
    { slug: "plancher", key: "plancher" },
    { slug: "peinture", key: "peinture" },
    { slug: "tireur-joints", key: "tireurJoints" },
    { slug: "demolition", key: "demolition" },
  ];

  return (
    <div className="relative h-fit p-4 w-72 gap-2 flex flex-col justify-center items-start shadow-xl text-amber-50 md:text-neutral-900">
      {services.map(({ slug, key }) => (
        <div key={slug} className="md:w-full h-fit">
          <Link
            href={`/${locale}/services/${slug}`}
            className="relative hover:text-[#4D5C5A] text-[1.1rem] md:text-[1rem] md:w-full h-fit"
            onMouseEnter={() => setHoveredSlug(slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            {t(`services.items.${key}.title`)}

            <span
              style={{
                transform: hoveredSlug === slug ? "scaleX(1)" : "scaleX(0)",
              }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-1/2 origin-center rounded-full bg-white transition-transform duration-300 ease-out"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};


export { FlyoutLink, PricingContent };
export default NavBar;
