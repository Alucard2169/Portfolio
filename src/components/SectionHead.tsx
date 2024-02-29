import { useContext } from "react";
import { SectionCont } from "../context/SectionContext";

const SectionHead = () => {
  const { section, setSection } = useContext(SectionCont)!;

  const getClassName = (currentSection: number) =>
    section === currentSection
      ? "text-MAIN font-black text-2xl"
      : "text-NEUTRAL underline";

  return (
    <h2 className="text-MAIN">
      <a
        href="#experience"
        aria-label="Link to my experience section"
        onClick={() => {
         setSection(1);
        }}
      >
        <span className={getClassName(1)}>Experience</span>
      </a>
      /
      <a
        href="#projects"
        aria-label="Link to my projects section"
        onClick={() => {
          setSection(2);
        }}
      >
        <span className={getClassName(2)}>Projects</span>
      </a>
      /
      <a
        href="#skills"
        aria-label="Link to my skills section"
        onClick={() => {
          setSection(3);
        }}
      >
        <span className={getClassName(3)}>Skills</span>
      </a>
    </h2>
  );
};

export default SectionHead;
