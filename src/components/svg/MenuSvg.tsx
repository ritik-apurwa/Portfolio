// MenuSvg.tsx
import React from "react";

interface MenuSvgProps {
  openNavigation: boolean;
}

 export const MenuSvg: React.FC<MenuSvgProps> = ({ openNavigation }) => {
  return (
    <svg
      className="overflow-visible transition-transform duration-300"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-transform duration-300 origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "45" : "0"})`}
      />
      <rect
        className="transition-transform duration-300 origin-center"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${openNavigation ? "-45" : "0"})`}
      />
    </svg>
  );
};

// MenuSvg.tsx


export const MenuSvg2: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <svg
      className="overflow-visible transition-transform duration-300"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-transform duration-300 origin-center"
        y={isOpen ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${isOpen ? "45" : "0"})`}
      />
      <rect
        className="transition-transform duration-300 origin-center"
        y={isOpen ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="white"
        transform={`rotate(${isOpen ? "-45" : "0"})`}
      />
    </svg>
  );
};

