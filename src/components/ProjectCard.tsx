import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";


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
}: ProjectsItemProps) => {



     useEffect(() => {
       AOS.init();
     }, []);
    
    
    
    return (
      <section
        className="outline outline-MAIN outline-1 h-full rounded-md p-4 w-full"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
            data-aos-delay="50"
      >
        <section className="flex sm:flex-row flex-col gap-4 sm:gap-0 items-center justify-between font-roboto">
          <h3 className="text-NEUTRAL text-2xl font-bold self-start inline-flex gap-2">
            {title}
          </h3>
          <aside className="flex gap-2 self-end">
            <a
              href={github}
              aria-label="project github repo link"
              target="_blank"
              className=" bg-NEUTRAL h-fit p-2 rounded-md hover:outline-MAIN outline outline-1 hover:bg-transparent hover:text-NEUTRAL transition-all duration-75"
            >
              <span className="flex items-center gap-2 text-sm sm:text-md">
                <FaGithub />
                Github
              </span>
            </a>
            <a
              href={homepage}
              aria-label="project homepage link"
              target="_blank"
              className="ml-6 bg-NEUTRAL  h-fit p-2 rounded-md flex items-center hover:outline-MAIN outline outline-1 hover:bg-transparent hover:text-NEUTRAL transition-all duration-75"
            >
              <span className="flex items-center gap-2 text-sm sm:text-md">
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
        <aside className="flex gap-4">
          {stack.map((tech: ReactNode) => tech)}
        </aside>
      </section>
    );
};

export default ProjectsItem;
