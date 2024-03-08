import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { CiLink } from "react-icons/ci";

type ExperienceItemProps = {
  id: number;
  dateRange: string;
  companyName: string;
  points: string[];
  position: string;
  homepage: string;
};

const ExperienceItem = ({
  dateRange,
  companyName,
  points,
  position,
  homepage,
}: ExperienceItemProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <a
      href={homepage}
      target="_blank"
      className="appearance-none min-h-full"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay="50"
    >
      <section className="outline outline-MAIN outline-1 h-full rounded-md p-4 flex md:flex-row flex-col gap-6 items-start w-full hover:bg-GRAY transition-color duration-100">
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
};

export default ExperienceItem;
