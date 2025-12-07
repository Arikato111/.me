import Head from "next/head";
import ButtonContact from "@/components/ButtonContact";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Link from "next/link";
import ProjectData from "../Data/ProjectsData.json";
import ProjectCard from "@/components/ProjectCard";
import { DefaultMetaTag } from "@/components/MetaTag";

export default function Projects() {
  return (
    <>
      <Head>
        <DefaultMetaTag />
        <title>Projects | ZocketZero</title>
      </Head>
      <main className="main">
        <div className="inline-block">
          <Link href="/">
            <ButtonContact Icon={ArrowIcon} title="back" />
          </Link>
        </div>
        <h1 className="dark:text-white text-2xl font-bold text-center">
          My open source projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 text-center p-3 justify-items-center">
          {ProjectData.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              descript={project.descript}
              src={project.img}
              link={project.link}
              source={project.source}
            />
          ))}
        </div>
        <br />
      </main>
    </>
  );
}
