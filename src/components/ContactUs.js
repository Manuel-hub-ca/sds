"use client";

import { useTranslations } from "@/components/LanguageProvider";
import {
  faEnvelope,
  faIdCard,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SocialMedia from "./SocialMedia";

export default function ContactUs() {
  const t = useTranslations();

  const socials = [
    {
      icon: faEnvelope,
      label: t("contact.email"),
      content: "s.d.srenovation2024@gmail.com",
      url: "mailto:s.d.srenovation2024@gmail.com",
    },
    {
      icon: faIdCard,
      label: t("contact.license"),
      content: "5841-3527-01",
    },
    {
      icon: faPhone,
      label: t("contact.phone1"),
      content: "(438)-836-5990",
      url: "tel:4388365990",
    },
    {
      icon: faPhone,
      label: t("contact.phone2"),
      content: "(514)-663-3138",
      url: "tel:5146633138",
    },
    {
      icon: faLocationDot,
      label: t("contact.address"),
      content: "714 75e Avenue, Laval, Quebec, H7V 2Y5",
      url: "https://www.google.com/maps/search/?api=1&query=714+75e+Avenue,+Laval,+Quebec,+H7V+2Y5",
    },
  ];

  return (
    <section
      id="contact"
      className="text-white contact-parent relative h-auto py-16 w-screen flex flex-col md:flex-row justify-evenly items-center bg-[#6E6D50]"
    >
      {/* Logo & SocialMedia */}
      <div className="flex flex-col items-center justify-center mb-8 md:mb-0">
        <Image
          src={"/img/logoFooter.png"}
          alt="Logo Contactus"
          width={200}
          height={100}
          className="object-contain mb-4"
          priority
        />
        <SocialMedia />
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-4 text-left">
        {socials.map((s, i) => {
          const InfoBlock = (
            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={s.icon} className="w-6 h-6 mt-1" />
              <div className="leading-tight">
                <p className="font-semibold">{s.label}</p>
                <p>{s.content}</p>
              </div>
            </div>
          );

          return s.url ? (
            <a
              key={i}
              href={s.url}
              target={s.icon === faLocationDot ? "_blank" : "_self"}
              rel={s.icon === faLocationDot ? "noopener noreferrer" : undefined}
              className="text-white hover:underline"
            >
              {InfoBlock}
            </a>
          ) : (
            <div key={i}>{InfoBlock}</div>
          );
        })}
      </div>
    </section>
  );
}
