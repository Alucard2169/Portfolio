import { forwardRef, useContext, useEffect, useRef } from "react";
import "./App.css";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Homepage from "./components/Homepage";
import { SectionCont } from "./context/SectionContext";

const SectionWrapper = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; id: number }
>(({ children, id }, ref) => (
  <section ref={ref} data-section={id} className="min-h-[100vh]">
    {children}
  </section>
));

function App() {
  const { setSection } = useContext(SectionCont)!;
  const refs = {
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement)
            setSection(Number(entry.target.dataset.section));
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    Object.values(refs).forEach((ref) => observer.observe(ref.current!));

    return () =>
      Object.values(refs).forEach((ref) => observer.unobserve(ref.current!));
  }, []);

  return (
    <main className="h-auto">
      <section className="min-h-[100vh] pt-24">
        <Homepage />
      </section>
      <SectionWrapper ref={refs.experience} id={1}>
        <Experience />
      </SectionWrapper>
      <SectionWrapper ref={refs.projects} id={2}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper ref={refs.skills} id={3}>
        <Skills />
      </SectionWrapper>
    </main>
  );
}

export default App;
