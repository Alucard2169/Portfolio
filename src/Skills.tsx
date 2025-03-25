import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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





const Skills = () => {

 const skillsArray = [
   { id: 1, name: "HTML5", icon: <FaHtml5/>},
   { id: 2, name: "CSS3", icon: <FaCss3Alt/>},
   { id: 3, name: "JavaScript", icon: <IoLogoJavascript/> },
   { id: 4, name: "React.js", icon: <FaReact/> },
   { id: 5, name: "Next.js", icon: <TbBrandNextjs/> },
   { id: 6, name: "Node.js", icon: <FaNodeJs/>},
   { id: 7, name: "Express.js", icon:<SiExpress/> },
   { id: 8, name: "Sass", icon: <BsFiletypeScss/>},
   { id: 9, name: "Bootstrap", icon: <DiBootstrap/> },
   { id: 10, name: "Tailwind CSS", icon: <SiTailwindcss/>},
   { id: 12, name: "Chakra UI", icon: <SiChakraui/>},
   { id: 13, name: "TypeScript", icon: <SiTypescript/>},
   { id: 14, name: "GraphQL", icon: <GrGraphQl/> },
   { id: 15, name: "RESTful API", icon: <AiOutlineApi/> },
   { id: 16, name: "MongoDB", icon: <DiMongodb/> },
   { id: 17, name: "SQL", icon: <PiFileSqlBold/> },
   { id: 18, name: "MySQL", icon:<SiMysql/> },
   { id: 19, name: "PostgreSQL", icon: <BiLogoPostgresql/>},
   { id: 20, name: "Docker", icon: <IoLogoDocker/> },
   { id: 21, name: "Git", icon: <FaGitAlt/> },
   { id: 22, name: "JWT", icon: <SiJsonwebtokens/> },
   { id: 23, name: "Linux", icon: <FaLinux/> },
   { id: 24, name: "Python", icon: <FaPython/> }
 ];


  
  useEffect(() => {
   AOS.init()
 },[])

  return (
    <section id="skills" className="pt-14 sm:pt-24">
      <SectionHead />
      <section className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4" >
        {skillsArray.map((skill) =>
          <p key={skill.id} className="flex gap-2 sm:gap-4 text-md sm:text-lg font-roboto text-white items-center mb-6"><span className="text-2xl text-MAIN">{skill.icon}</span> {skill.name}</p>
        )}
      </section>
    </section>
  );
};

export default Skills;
