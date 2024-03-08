import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { CiLink } from "react-icons/ci";
import { SectionCont } from "../context/SectionContext";
import MediaLinks from "./MediaLinks";

const Homepage = () => {
  const { setSection } = useContext(SectionCont)!;

  const sectionLinks = [
    {
      id: 1,
      link: "#experience",
      content: "Experience",
      label: "Link to my experience section",
      background: null,
      icon: <CiLink />,
    },
    {
      id: 2,
      link: "#projects",
      content: "Projects",
      label: "Link to my project section",
      background: null,
      icon: <CiLink />,
    },
    {
      id: 3,
      link: "#skills",
      content: "Skills",
      label: "Link to my skills section",
      background: null,
      icon: <CiLink />,
    },
  ];

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <section data-aos="fade-in" data-aos-delay="100">
      <h1 className="text-5xl font-roboto leading-relaxed text-NEUTRAL font-normal">
        Hi,
        <br />I am{" "}
        <span className="font-bold sm:font-extrabold text-MAIN">Deepanshu</span>
      </h1>
      <article className="mt-6 text-lg sm:text-xl text-MAIN font-bold">
        I'm a Fullstack Web developer from New Delhi, India.
      </article>
      <nav className="mt-16 sm:mt-12 flex flex-col gap-12">
        <aside className="sm:hidden w-[90%] self-center">
          <MediaLinks />
        </aside>
        <ul className="ml-auto sm:ml-0 flex flex-col sm:flex-row items-end gap-8 flex-wrap">
          {sectionLinks.map((obj) => (
            <li key={obj.id}>
              <a
                onClick={() => setSection(obj.id)}
                href={obj.link}
                aria-label={obj.label}
                tabIndex={0}
                className="flex gap-2 items-center text-NEUTRAL
                  underline
                  underline-offset-2
                  rounded-md p-2
       hover:text-MAIN hover:bg-transparent 
        hover:outline-MAIN outline-1 hover:scale-110 transition-all duration-150"
              >
                {obj.icon}
                {obj.content}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Homepage;
