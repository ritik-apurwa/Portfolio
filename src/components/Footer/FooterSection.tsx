import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the prop types for FooterSection
interface FooterSectionProps {
  title: string;
  items: Array<{
    id: number;
    label: string;
    route?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  useIcons?: boolean;
  closeFooter: () => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  items,
  useIcons = false,
  closeFooter,
}) => {

  const pathname = usePathname();
  return (
    <div className="bg-black  flex-start md:flex-center flex-col prose-sm py-2 px-4">
      <h4 className="text-gray-400 text-start h6 w-full pl-4">{title}</h4>
      <div className=" p-2 w-full">
        {items.map((item) => {
         
          const isActive = item.route === pathname;
          return (
            <ul
              className="border-l pl-6 py-[2px] border-transparent hover:border-lime-400 transition-colors duration-300 font-normal  mb-2"
              key={item.id}
            >
              <li
                className={`text-sm text-gray-200 antialiased lg:text-lg md:text-base hover:text-lime-500 transition-colors duration-200 flex items-center ${
                  isActive ? "text-lime-500" : ""
                }`}
              >
                {useIcons && item.icon ? <item.icon className="mr-2" /> : null}
                {item.route ? (
                  <Link onClick={closeFooter} href={item.route}>
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default FooterSection;
