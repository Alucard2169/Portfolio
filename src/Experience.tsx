import { CiLink } from "react-icons/ci";
import SectionHead from "./components/SectionHead";

type ExperienceItemProps = {
  id: number;
  dateRange: string;
  companyName: string;
  points: string[];
  position: string;
  homepage: string;
}

const ExperienceItem = ({
  dateRange,
  companyName,
  points,
  position,
  homepage,
}: ExperienceItemProps) => (
  <a href={homepage} target="_blank" className="appearance-none min-h-full">
    <section className="outline outline-MAIN outline-1 h-full rounded-md p-4 flex sm:flex-row flex-col gap-6 items-start w-full hover:bg-GRAY transition-color duration-100">
      <aside className="w-[10%] flex flex-col gap-4">
        <span className="text-MAIN text-md">{dateRange}</span>
        <hr />
        <span className="text-MAIN font-black font-roboto">{position}</span>
      </aside>
      <article className="h-full font-roboto sm:pl-6 w-[90%]">
        <h3 className="text-NEUTRAL text-2xl font-bold inline-flex gap-4 items-center">
          {companyName}
          <CiLink className="text-2xl" />
        </h3>
        <ul className="mt-6 list-disc flex flex-col gap-6 pl-6 sm:pl-0">
          {points.map((point, i) => (
            <li className="text-white text-[.9rem]" key={i}>
              {point}
            </li>
          ))}
        </ul>
      </article>
    </section>
  </a>
);

const Experience = () => {


  const experienceData = [
    {
      id: 1,
      dateRange: "Sep.2022 - Oct.2022",
      companyName: "The Sparks Foundation",
      points: [
        "Designed and built the backend RESTful API with NodeJS and ExpressJS for seamless data interactions for a fully functional CRUD application, ensuring proper error handling.",
        "Designed and implemented user interfaces using ReactJS, focusing on user experience.",
        "Collaborated with team members, contributing to a cooperative and productive development environment.",
      ],
      position: "Intern",
      homepage: "https://www.thesparksfoundationsingapore.org/",
    },
    {
      id: 2,
      dateRange: "Aug.2022 - Sep.2022",
      companyName: "Maruti Suzuki India Ltd.",
      points: [
        "Established collaborative development of a comprehensive CRUD application, and emphasized security through authentication mechanisms",
        "Self-directed the design and implementation of the responsive frontend, focusing on enhancing accessibility.",
        "Optimized database performance by creating appropriate indexes.",
      ],
      position: "Intern",
      homepage: "https://www.marutisuzuki.com/",
    },
  ];
    
    return (
      <section id="experience" className="pt-14 sm:pt-24">
    <SectionHead />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6 w-full">
          {experienceData.map((obj)=><ExperienceItem {...obj} key={obj.id}/>)}
    </div>
  </section> 
    )
    };

export default Experience;
