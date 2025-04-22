"use client";

import "./AboutUs.css";
import RightSideUp from "./RightSideUp";
import UpSideDown from "./UpSideDown";
import { useTranslations } from "@/components/LanguageProvider";

const AboutUs = () => {
  const t = useTranslations();

  const carouselItems = [
    t("about.carousel.item1"),
    t("about.carousel.item2"),
    t("about.carousel.item3"),
    t("about.carousel.item4"),
    t("about.carousel.item5"),
  ];

  return (
    <div className="about-us" id="aboutUs">
      <UpSideDown bgColor="#6E6D50" />
      <RightSideUp bgColor="#6E6D50" />
      <div className="overlay" />

      <div className="carousel-wrapper">
        <div className="carousel-track">
          {carouselItems.map((text, index) => (
            <div className="card" key={`carousel-${index}`}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
