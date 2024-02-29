import { ReactNode } from "react";

type customLinkProps = {
  link: string;
  label: string;
  content: string;
  icon: ReactNode;
};

const CustomLink = ({
  link,
  label,
  content,
  icon,
}: customLinkProps) => {


  const scroll = window.scrollY;
  console.log(scroll)

  return (
    <a
      href={link}
      aria-label={label}
      tabIndex={0}
      className="flex gap-2 items-center text-black
       rounded-md p-2 bg-NEUTRAL
       hover:text-MAIN hover:bg-transparent 
        hover:outline-MAIN outline-1 transition-colors duration-150"
    >
      {icon}
      <span className="hidden sm:inline">{content}</span>
    </a>
  );
};

export default CustomLink;
