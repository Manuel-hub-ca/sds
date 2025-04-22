"use client";
import AboutUs from "../../components/AboutUs";
import { useTranslations } from "../../components/LanguageProvider";
import Service from "../../components/Service";
import Welcome from "../../components/Welcome";

// git push --set-upstream origin feature/somerespo
export default function Home() {
  const t = useTranslations();
  return (
    <div className="">
      <main className="relative">
        <Welcome />
        <Service />
        <AboutUs />
      </main>
    </div>
  );
}
