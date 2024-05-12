"use client"

import React from "react";
import Nav from "./NavForm";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  // Function to determine the type based on the pathname
  const getTypeFromPathname = (pathname: string): string => {
    if (pathname === "/" || pathname.startsWith("/home")) {
      return "Brainwave";
    } else if (pathname.startsWith("/foodapp")) {
      return "FoodApp";
    } else if (pathname.startsWith("/projects")) {
      return "ProjectApp"; // Ensuring this matches the expected label from your data array
    } else if (pathname.startsWith("/onlineedu")) {
      return "OnlineEdu";
    } else {
      // Default type in case pathname doesn't match any specific route
      return "Brainwave";
    }
  };

  // Get the type based on the current pathname
  const type = getTypeFromPathname(pathname);

  return (
    <section>
      <Nav type={type} />
    </section>
  );
};

export default Header;
