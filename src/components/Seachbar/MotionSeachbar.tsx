"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";

export interface AnimatedMotionContainerProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export interface ToggleButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

export const SearchContent: React.FC<AnimatedMotionContainerProps> = ({
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
              width: "100%",
              height: "100%",
              transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
                ease: [0.87, 0, 0.13, 1],
                staggerDirections: -1,
              },
            }}
            exit={{
              opacity: 0,
              width: "100%",
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

export const SeachbarButton: React.FC<ToggleButtonProps> = ({
  isOpen,
  toggle,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setSearchValue(value);
    // Perform search logic here if needed
  };

  const handleClose = () => {
    setSearchValue("");
    toggle();
  };

  return (
    <section className="flex w-full px-2 flex-center ">
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{
            width: isOpen ? "100%" : "fit-content",
            justifyContent: isOpen ? "space-between" : "flex-start",
          }}
          exit={{ width: "fit-content", transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`bg-gray-400/20 rounded-md max-w-6xl text-white p-1 flex items-center px-3 py-2`}
        >
          <SearchInput
            value={searchValue}
            onChange={handleInputChange}
            onClose={handleClose}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
