"use client";
import React, { Suspense, useState } from "react";
import { FoodList } from "@/constant/FoodApp";
import { motion, AnimatePresence } from "framer-motion";
import { FoodItemList, MenuItemList } from "./FoodItem";
import { StarDiv } from "./RandomStar";

const FoodDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const matchCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="bg-gray-800/20 w-full container text-white p-4">
      <h1 className="h2 py-6">Explore Food Near you</h1>
      <MenuItemList
        selectedCategory={selectedCategory}
        matchCategory={matchCategory}
      />
      <div className="w-full flex flex-col justify-center mt-8">
        <div className="flex flex-row items-center justify-between px-4">
          <h1 className="md:h4 text-base py-5">
            {selectedCategory === "All"
              ? "All Food Item"
              : `Selected Category : ${selectedCategory}`}
          </h1>
          <button
            onClick={() => {
              setSelectedCategory("All");
            }}
            className=" border border-gray-500/60 flex-center px-4 py-2 rounded-md h-1/2 "
          >
            Reset
          </button>
        </div>
        <div className="w-full flex-center">
          <AnimatePresence>
            <motion.div className="grid md:grid-cols-2 gap-8 mx-auto  lg:grid-cols-4 xl:grid-cols-5">
              {FoodList.filter((selectedFoodItem) =>
                selectedCategory === "All"
                  ? true
                  : selectedFoodItem.category === selectedCategory
              ).map((fooditem) => (
                <div className="max-w-sm w-full" key={fooditem._id}>
                  <FoodItemList selectedFoodItem={fooditem} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FoodDisplay;
