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
        icon: <FaGithub/>,
      },
      {
        id: 2,
        link: "https://www.linkedin.com/in/deepanshu2169/",
        content: "LinkedIn",
        label: "Link to my LinkedIn profile",
        icon:<FaLinkedin/>,
      },
      {
        id: 3,
        link: "#",
        content: "Resume",
        label: "Get my Resume",
        icon: <IoDocumentText/>,
      },
      {
        id: 4,
        link: "mailto:deepanshu.devwork@gmail.com",
        content: "Email Me",
        label: "Email Me at - deepanshu.devwork@gmail.com",
        icon:<MdAlternateEmail/>,
      },
    ];
    return (
      <ul className="flex gap-6 ml-auto font-roboto justify-between">
        {mediaLinks.map((link) => (
          <li>
            <CustomLink {...link} key={link.id} />
          </li>
        ))}
      </ul>
    );
}
 
export default MediaLinks;