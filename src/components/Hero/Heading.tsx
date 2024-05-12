import Brackets from "../svg/Brackets";
import { ReactNode } from "react";

interface TagLineProps {
  className?: string;
  children: ReactNode;
}

interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}

const Heading: React.FC<HeadingProps> = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 w-full text-center">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;




 export const TagLine: React.FC<TagLineProps> = ({ className, children }) => {
  return (
    <div className={`tagline flex-center w-full  ${className || ""}`}>
      <Brackets position="left" />
      <div className="mx-3 text-n-3 ">{children}</div>
      <Brackets position="right" />
    </div>
  );
};
