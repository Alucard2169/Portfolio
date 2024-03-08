import { AiOutlineApi } from "react-icons/ai";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";
import { SiChakraui, SiSupabase, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import ProjectsItem from "./components/ProjectCard";
import SectionHead from "./components/SectionHead";



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
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full">
        {projectData.map((obj) => (
          <ProjectsItem {...obj} key={obj.id}/>
        ))}
      </div>
    </section>
  );
};

export default Projects;
