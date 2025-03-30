import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface Skill {
    id: number;
    name: string;
    icon: JSX.Element;
  }
  
  interface SkillCardProps {
    title: string;
    skills: Skill[];
  }
  

    
        
  const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
    useEffect(() => {
        AOS.init();
      }, []);
      
    return ( 
      <section className="p-4 border border-white-1 rounded-md" data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay="50">
        <h2 className="font-bold text-2xl">{title}</h2>
        <hr className="my-4"/>
        <ul className="flex gap-6 items-center flex-wrap">
          {skills.map(skill => (
            <li key={skill.id} className="flex items-center text-4xl" title={skill.name}>
              {skill.icon}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default SkillCard;
  