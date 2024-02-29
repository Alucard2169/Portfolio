import { ReactNode } from "react";
import { AiOutlineApi } from "react-icons/ai";
import { BsFiletypeScss } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiChakraui, SiSupabase, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SectionHead from "./components/SectionHead";


type ProjectsItemProps = {
  id: number;
  title: string;
  points: string[];
  stack: ReactNode[];
  homepage: string;
  github: string;
};

const ProjectsItem = ({
  title,
  points,
  stack,
  homepage,
  github,
}: ProjectsItemProps) => (
  <section className="outline outline-MAIN outline-1 h-full rounded-md p-4 w-full">
    <section className="flex sm:flex-row flex-col gap-4 sm:gap-0 items-center justify-between font-roboto">
      <h3 className="text-NEUTRAL text-2xl font-bold self-start inline-flex gap-2">
        {title}
      </h3>
      <aside className="flex gap-2 self-end">
        <a
          href={github}
          target="_blank"
          className=" bg-NEUTRAL p-2 rounded-md hover:outline-MAIN outline outline-1 hover:bg-transparent hover:text-NEUTRAL transition-all duration-75"
        >
          <span className="flex items-center gap-2 text-sm sm:text-lg">
            <FaGithub />
            Github
          </span>
        </a>
        <a
          href={homepage}
          className="ml-6 bg-NEUTRAL p-2 rounded-md flex items-center hover:outline-MAIN outline outline-1 hover:bg-transparent hover:text-NEUTRAL transition-all duration-75"
        >
          <span className="flex items-center gap-2 text-sm sm:text-lg">
            <CgWebsite />
            Homepage
          </span>
        </a>
      </aside>
    </section>
    <article className="mt-6 w-full pl-6">
      <ul className="list-disc flex flex-col gap-4 sm:pl-0">
        {points.map((point, i) => (
          <li className="text-white text-[.9rem]" key={i}>
            {point}
          </li>
        ))}
      </ul>
    </article>
    <hr className="my-6" />
    <aside className="flex gap-4">{stack.map((tech: ReactNode) => tech)}</aside>
  </section>
);

const Projects = () => {

  const projectData = [
    {
      id: 1,
      title: "Anime Cards",
      points: [
        "Fetches data from the a RESTful API to provide comprehensive information about various show.",
        "Presents data in a visually appealing design with a search and sort functionality, ensuring easy navigation for users to explore and discover their favorite anime.",
      ],
      stack: [
        <TbBrandNextjs
          aria-label="NextJS"
          title="NextJS"
          className="text-NEUTRAL text-3xl"
        />,
        <SiTailwindcss
          aria-label="TailwindCSS"
          title="tailwindCSS"
          className="text-NEUTRAL text-3xl"
        />,
        <AiOutlineApi
          aria-label="RestfulAPI"
          title="RestfulAPI"
          className="text-NEUTRAL text-3xl"
        />,
        <IoLogoVercel
          aria-label="Vercel"
          title="Vercel"
          className="text-NEUTRAL text-3xl"
        />,
      ],
      homepage: "https://anime-cards-alpha.vercel.app/",
      github: "https://github.com/Alucard2169/anime_cards",
    },
    {
      id: 2,
      title: "Notify",
      points: [
        "A project/library database search application built with NextJS, Supabase, TypeScript, TailwindCSS, and ChakraUI.",
        "Utilizes libraries.io API for real-time project updates, allowing users to explore, subscribe to projects, and maintain personalized profiles highlighting the latest developments.",
      ],
      stack: [
        <TbBrandNextjs
          aria-label="NextJS"
          title="NextJS"
          className="text-NEUTRAL text-3xl"
        />,
        <SiTailwindcss
          aria-label="TailwindCSS"
          title="tailwindCSS"
          className="text-NEUTRAL text-3xl"
        />,
        <SiSupabase
          aria-label="Supabase"
          title="Supabase"
          className="text-NEUTRAL text-3xl"
        />,
        <AiOutlineApi
          aria-label="RestfulAPI"
          title="RestfulAPI"
          className="text-NEUTRAL text-3xl"
        />,
        <IoLogoVercel
          aria-label="Vercel"
          title="Vercel"
          className="text-NEUTRAL text-3xl"
        />,
        <SiChakraui
          aria-label="ChakraUI"
          title="ChakraUI"
          className="text-NEUTRAL text-3xl"
        />,
      ],
      homepage: "https://notify-brown.vercel.app/",
      github: "https://github.com/Alucard2169/notify",
    },
    {
      id: 3,
      title: "Movie Database",
      points: [
        "A movie database searcher built with NextJS, Supabase, TypeScript, and SCSS.",
        "Taps into movie database API, providing detailed information on a diverse range of films.",
        "Features user-friendly profiles, enabling movie fans to track their favorite films effortlessly.",
      ],
      stack: [
        <TbBrandNextjs
          aria-label="NextJS"
          title="NextJS"
          className="text-NEUTRAL text-3xl"
        />,
        <AiOutlineApi
          aria-label="RestfulAPI"
          title="RestfulAPI"
          className="text-NEUTRAL text-3xl"
        />,
        <SiSupabase
          aria-label="Supabase"
          title="Supabase"
          className="text-NEUTRAL text-3xl"
        />,
        <BsFiletypeScss
          aria-label="SCSS"
          title="SCSS"
          className="text-NEUTRAL text-3xl"
        />,
        <IoLogoVercel
          aria-label="Vercel"
          title="Vercel"
          className="text-NEUTRAL text-3xl"
        />,
      ],
      homepage: "https://movie-database-alpha.vercel.app/",
      github: "https://github.com/Alucard2169/Movie-Database",
    },
  ];

  return (
    <section id="projects" className="pt-14 sm:pt-24">
      <SectionHead />
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 w-full">
        {projectData.map((obj) => (
          <ProjectsItem {...obj} key={obj.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
