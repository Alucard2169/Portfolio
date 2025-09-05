import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import CustomLink from "./CustomLink";

const MediaLinks = () => {
  const mediaLinks = [
    {
      id: 1,
      link: "https://github.com/Alucard2169",
      content: "Github",
      label: "Link to my github profile",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/deepanshu2169/",
      content: "LinkedIn",
      label: "Link to my LinkedIn profile",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "https://github.com/Alucard2169/Portfolio/raw/main/documents/Deepanshu_Resume.pdf",
      content: "Resume",
      label: "Get my Resume",
      icon: <IoDocumentText />,
    },
    {
      id: 4,
      link: "mailto:deepanshu.devwork@gmail.com",
      content: "Email Me",
      label: "Email Me at - deepanshu.devwork@gmail.com",
      icon: <MdAlternateEmail />,
    },
  ];


  useEffect(() => {
    AOS.init()
  },[])

  return (
    <ul className="flex gap-6 ml-auto font-roboto justify-between">
      {mediaLinks.map((link) => (
        <li data-aos="fade-left" data-aos-delay="100" data-aos-easing="ease-in">
          <CustomLink {...link} key={link.id} />
        </li>
      ))}
    </ul>
  );
};

export default MediaLinks;
