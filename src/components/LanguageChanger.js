"use client";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function LanguageChanger({ isMobile }) {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Extract the current locale from the URL
  const currentLocale = pathname.split("/")[1]; // ex: 'en' from /en/about

  const changeLocale = (newLocale) => {
    // Build new pathname with new locale
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/") || `/${newLocale}`;

    // Push to new locale
    router.push(newPath);
    router.refresh();
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const locales = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
  ];

  const current = locales.find((l) => l.code === currentLocale);
  const otherLocales = locales.filter((l) => l.code !== currentLocale);
  console.log(isMobile)
  return (
    <div
      ref={dropdownRef}
      className={`rounded-md shadow-lg w-24 h-fit ${
        isMobile ? "fixed bottom-2 right-1.5" : "relative"
      }`}
    >
      <div
        className="flex items-center justify-between bg-black/50 text-white px-3 py-2 rounded-md [cursor:url('/olive-pointer.svg')_4_4,auto]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{current?.label ?? "Language"}</span>
        <ChevronDown
          className={`w-4 h-4 text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <ul
          className={`
    absolute ${
      isMobile ? "bottom-full mb-1" : "top-full mt-0 w-24"
    }  bg-white rounded-md overflow-hidden shadow-md`}
        >
          {otherLocales.map((locale) => (
            <li
              key={locale.code}
              onClick={() => changeLocale(locale.code)}
              className="px-4 py-2 hover:bg-yellow-200 text-gray-800 cursor-pointer"
            >
              {locale.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
