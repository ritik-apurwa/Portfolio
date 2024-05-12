import React from "react";
import { HiHome } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { Duno } from "@/constant/Brainwave"; // Update path as necessary

interface NavProps {
  type: string;
}

const Nav: React.FC<NavProps> = ({ type }) => {
  const currentProject = Duno.find((p) => p.label === type);

  return (
    <header className="fixed top-0 left-0 w-full backdrop:blur-sm bg-black/80 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link
          href="/"
          className="flex flex-row items-center gap-x-2 w-[12rem] xl:mr-8"
        >
          <Image
              src={currentProject && currentProject.logo? currentProject.logo : "/default-logo.png"}
            alt={`${currentProject?.label || "Default"} Logo`}
            width={44}
            height={40}
            className="h-auto dark:invert-[2px] w-auto"
            priority
          />
          <h1 className="font-bold text-lg">{currentProject?.label}</h1>
        </Link>
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {currentProject?.projectlinks.map((link) => (
              <Link
                key={link.id}
                href={link.route}
                className="block relative font-lato text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
