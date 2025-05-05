"use client";

import { useTranslations } from "@/components/LanguageProvider";
import Card from "../../../components/Card";
import RightSideUp from "../../../components/RightSideUp";
import React from "react";

const Projects = () => {
  const t = useTranslations();

  // Generate 27 project entries dynamically
  const imgProject = Array.from({ length: 10 }, (_, i) => {
    const index = i + 1;
    return {
      imgUrl: `/img/projects/p${index}.jpeg`,
      title: t(`projects.items.p${index}.title`),
      description: "", // Placeholder
    };
  });

  return (
    <div className="relative min-h-screen bg-[#4D5C5A]">
      <header
        className="relative flex justify-end items-center text-5xl w-screen h-96 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/header.jpg')" }}
      >
        <h1 className=" text-neutral-900 mr-8 md:mr-96 font-bold">{t("project")}</h1>
        <RightSideUp bgColor="#4D5C5A" />
      </header>

      <div className="flex flex-col py-28">
        <h1 className=" self-center text-3xl md:text-6xl text-white">{ t("before")}</h1>
        {imgProject.map((project, index) => (
          <React.Fragment key={index}>
            {index === 4 && <h1 className="self-center text-3xl md:text-6xl mb-3 mt-6 text-white">{t("after")}</h1>}
            <Card imgUrl={project.imgUrl}>
              <h3 className="mb-3 text-xl">{project.title}</h3>
              <p>{project.description}</p>
            </Card>
          </React.Fragment>
        ))}
      </div>

      <RightSideUp bgColor="#6E6D50" />
    </div>
  );
};

export default Projects;
