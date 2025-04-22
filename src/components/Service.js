"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/components/LanguageProvider";

const Service = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "fr"; // fallback if needed

  const services = [
    {
      slug: "bois-metal",
      key: "boisMetal",
    },
    {
      slug: "finition",
      key: "finition",
    },
    {
      slug: "gypse",
      key: "gypse",
    },
    {
      slug: "carrelage",
      key: "carrelage",
    },
    {
      slug: "plancher",
      key: "plancher",
    },
    {
      slug: "peinture",
      key: "peinture",
    },
    {
      slug: "tireur-joints",
      key: "tireurJoints",
    },
    {
      slug: "demolition",
      key: "demolition",
    },
  ];

  return (
    <section className="min-h-screen bg-[#6E6D50] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <div className="grid md:grid-cols-3 gap-10 text-left">
          {services.map(({ slug, key }, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 transform transition-transform duration-300 hover:scale-110"
            >
              <Link href={`/${locale}/services/${slug}`}>
                <h3 className="text-2xl font-semibold mb-4">
                  {t(`services.items.${key}.title`)}
                </h3>
                <p>{t(`services.items.${key}.description`)}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
