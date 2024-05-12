"use client";
import { FoodList, MenuList } from "@/constant/FoodApp";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { StarDiv } from "./RandomStar";
import FoodItemCard from "./FoodItemCard";

interface MenuListProps {
  selectedCategory: string;
  matchCategory: (category: string) => void;
}

export const MenuItemList: React.FC<MenuListProps> = ({
  selectedCategory,
  matchCategory,
}) => {
  return (
    <section>
      <div className="grid grid-cols-4 lg:grid-cols-8 w-full p-2 gap-y-2 gap-x-3 grid-rows-2">
        {MenuList.map((item) => (
          <div
            onClick={() => matchCategory(item.menu_name)} // Pass the category instead of menu_name
            className="flexc-center"
            key={item.id}
          >
            <div id="image_container">
              <Image
                src={item.menu_image}
                height={150}
                width={150}
                className={`${
                  selectedCategory === item.menu_name
                    ? "border-2 border-teal-600/90"
                    : ""
                } rounded-full max-w-28 max-h-28 flex-center w-full overflow-hidden h-full`}
                alt={item.menu_name}
              />
            </div>
            <p className="text-sm">{item.menu_name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

interface FoodItemProps {
  selectedFoodItem: (typeof FoodList)[number];
}

export const FoodItemList: React.FC<FoodItemProps> = ({ selectedFoodItem }) => {
  return (
    <section>
      <FoodItemCard key={selectedFoodItem._id} food={selectedFoodItem} />
    </section>
  );
};
