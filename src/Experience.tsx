import ExperienceItem from "./components/ExperienceCard";
import SectionHead from "./components/SectionHead";



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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 w-full">
          {experienceData.map((obj)=><ExperienceItem {...obj} key={obj.id}/>)}
    </div>
  </section> 
    )
    };

export default Experience;
