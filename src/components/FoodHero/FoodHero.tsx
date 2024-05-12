"use client";
import React, { useRef, useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FoodImageData, FoodImages } from "@/constant/FoodApp";

interface Square {
  id: string;
  alt: string;
  src: StaticImageData;
}

const Content: React.FC = () => {
  return (
    <div>
      <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
        Delicious Creations
      </span>
      <h3 className="text-4xl md:text-6xl font-semibold">
        Explore Culinary Delights
      </h3>
      <p className="text-base md:text-lg my-4 md:my-6">
        Life is uncertain. Eat dessert first Ernestine Ulmer
      </p>
      <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
        Find a class
      </button>
    </div>
  );
};

const Imagedata = () => {
  const sliced = FoodImages.slice(0, 9);
  return (
    <AnimatePresence>
      <div className="grid grid-cols-3 w-full max-w-xl grid-rows-3 h-auto gap-y-2 items-center justify-center gap-x-1">
        {sliced.map((square) => (
          <motion.div key={square.id} className="w-full h-full">
            <AnimatePresence>
              <motion.div transition={{ duration: 2 }}>
                <Image
                  height={300}
                  width={400}
                  alt={square.alt}
                  className="bg-cover w-auto h-auto border rounded-md overflow-hidden"
                  src={square.src}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export const FoodHero = () => {
  return (
    <section className="w-full px-8 pb-10 gap-6 h-full grid grid-cols-1 md:grid-cols-2 items-center  mx-auto">
      <Content />
      <Imagedata />
    </section>
  );
};

export default FoodHero;
