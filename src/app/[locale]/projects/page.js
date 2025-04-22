"use client";

import { useTranslations } from "@/components/LanguageProvider";
import Card from "../../../components/Card";
import RightSideUp from "../../../components/RightSideUp";

const Projects = () => {
  const t = useTranslations();

  // Generate 27 project entries dynamically
  const imgProject = Array.from({ length: 25 }, (_, i) => {
    const index = i + 1;
    return {
      imgUrl: `/img/projects/p${index}.jpg`,
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
        <h1 className=" text-neutral-900 mr-8 md:mr-96">
          {t("project")}
        </h1>
        <RightSideUp bgColor="#4D5C5A" />
      </header>

      <div className="flex flex-col py-14">
        {imgProject.map((project, index) => (
          <Card key={index} imgUrl={project.imgUrl}>
            {/* <h3 className="mb-3 text-xl">{project.title}</h3>
            <p>{project.description}</p> */}
          </Card>
        ))}
      </div>

      <RightSideUp bgColor="#6E6D50" />
    </div>
  );
};

export default Projects;
