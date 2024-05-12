"use client";
// AnimatedMotionContainer.tsx
import { MenuSvg2 } from "../svg/MenuSvg";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import SearchPage from "../Seachbar/Searchbar";

export interface AnimatedMotionContainerProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export interface ToggleButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MotionFooterContent: React.FC<AnimatedMotionContainerProps> = ({
  isOpen,
  children,
}) => {
  return (
    <section className=" w-full px-2 flex-center">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, width: 0, height: 0 }}
            animate={{
              opacity: 1,
              width: "100%", // Full width first
              height: "100%",
              transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
                ease: [0.87, 0, 0.13, 1],
                staggerDirections: -1, // Reverse staggering for child components
              },
            }}
            exit={{
              opacity: 0,
              width: "100%", // Start by reducing height
              height: 0,
              transition: {
                duration: 0.5,
                when: "afterChildren",
                staggerChildren: 0.2,
                height: { delay: 0.1 },
                width: { delay: 0.1 },
                opacity: { delay: 0.1 },

                ease: "easeInOut",
              },
            }}
            className="min-w-32 mb-2 max-w-5xl min-h-full h-[80vh] overflow max-h-[80vh] overflow-y-auto w-full bg-gray-400/20 p-2 rounded-md"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const MotionFooterButton: React.FC<ToggleButtonProps> = ({
  isOpen,
  toggle,
}) => {
  const pathname = usePathname();
  return (
    <section className="flex w-full px-2 flex-center ">
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{
            width: isOpen ? "100%" : "fit-content",
            justifyContent: isOpen ? "center" : "space-between",
          }}
          exit={{
            width: "fit-content",
            transition: { duration: 0.3 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gray-400/20 rounded-md max-w-6xl  text-white p-1 grid grid-cols-2"
        >
          <div
            className={`w-full flex ${
              isOpen ? "pl-8" : "pl-2"
            } bg-black py-2  rounded-l-md justify-start`}
          >
            <p>w.</p>
            <p>
              <span className="text-green-400">
                {pathname === "/" ? "home" : `${pathname.replace(/\//g, "")}`}
              </span>
            </p>
          </div>

          <button
            onClick={toggle}
            className={`flex bg-black ${
              isOpen ? "pr-8 justify-end" : "pr-2 justify-center"
            } py-2 w-full rounded-r-md  items-center`}
          >
            <MenuSvg2 isOpen={isOpen} />{" "}
            {/* Adjusted for corrected component name */}
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
