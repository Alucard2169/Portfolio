import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineApi } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";
import { DiBootstrap, DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaHtml5, FaLinux, FaNodeJs, FaReact, FaGitAlt, FaPython } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoDocker, IoLogoJavascript } from "react-icons/io5";
import { PiFileSqlBold } from "react-icons/pi";
import { SiChakraui, SiExpress, SiJsonwebtokens, SiMysql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import SectionHead from "./components/SectionHead";
import SkillCard from "./components/SkillCard";
import { TbBrandCpp } from "react-icons/tb";
import { SiFastapi } from "react-icons/si";

interface Skill {
  id: number;
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const categorizedSkills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { id: 1, name: "HTML5", icon: <FaHtml5 /> },
      { id: 2, name: "CSS3", icon: <FaCss3Alt /> },
      { id: 3, name: "JavaScript", icon: <IoLogoJavascript /> },
      { id: 4, name: "React.js", icon: <FaReact /> },
      { id: 5, name: "Next.js", icon: <TbBrandNextjs /> },
      { id: 6, name: "Sass", icon: <BsFiletypeScss /> },
      { id: 7, name: "Bootstrap", icon: <DiBootstrap /> },
      { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { id: 9, name: "Chakra UI", icon: <SiChakraui /> },
      { id: 10, name: "TypeScript", icon: <SiTypescript /> },
      { id: 11, name: "GraphQL", icon: <GrGraphQl /> },
      { id: 12, name: "RESTful API", icon: <AiOutlineApi /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { id: 13, name: "Node.js", icon: <FaNodeJs /> },
      { id: 14, name: "Express.js", icon: <SiExpress /> },
      { id: 15, name: "MongoDB", icon: <DiMongodb /> },
      { id: 16, name: "SQL", icon: <PiFileSqlBold /> },
      { id: 17, name: "MySQL", icon: <SiMysql /> },
      { id: 18, name: "PostgreSQL", icon: <BiLogoPostgresql /> },
      { id: 19, name: "JWT", icon: <SiJsonwebtokens /> },
      {id: 20, name: "FastAPI", icon: <SiFastapi/>}, 
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { id: 21, name: "Docker", icon: <IoLogoDocker /> },
      { id: 22, name: "Git", icon: <FaGitAlt /> },
      { id: 23, name: "Linux", icon: <FaLinux /> },
    ],
  },
  {
    title: "Programming Languages",
    skills: [{ id: 24, name: "Python", icon: <FaPython /> }, 
      {id: 25, name: "C++", icon: <TbBrandCpp/>}
    ],
  },
];

const Skills: React.FC = () => {

  return (
    <section id="skills" className="pt-14 sm:pt-24">
      <SectionHead />
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 w-full">
        {categorizedSkills.map((category) => (
          <SkillCard key={category.title} title={category.title} skills={category.skills} />
        ))}
      </section>
    </section>
  );
};

export default Skills;
