"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FoodList, FoodListInterface } from "@/constant/FoodApp";
import { motion } from "framer-motion";
import { FaArrowRight, FaStar } from "react-icons/fa";
import FoodItemCard from "@/components/FoodShow/FoodItemCard";

interface FoodItem extends FoodListInterface {}

const SearchResultPage = ({ params }: { params: { id: string } }) => {
  const selectedFoodItem = FoodList.find((item) => item._id === params.id);
  const [randomFoodItems, setRandomFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    const getRandomFoodItems = () => {
      const randomIndices: number[] = []; // Explicitly define the type as number[]
      while (randomIndices.length < 8) {
        const randomIndex = Math.floor(Math.random() * FoodList.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }
      return randomIndices.map((index) => FoodList[index]);
    };

    setRandomFoodItems(getRandomFoodItems());
  }, [params.id]);

  const [showFullDescription, setShowFullDescription] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = (id: string) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section>
      {selectedFoodItem && (
        <div className=" flex flex-col container w-full ">
          <div className="flex flex-col p-6">
            <h2 className="h3 text-center py-2 underline text-gray-400/80">{selectedFoodItem.name}</h2>
            <FoodItemCard key={selectedFoodItem._id} food={selectedFoodItem} />
          </div>
          <div>
            <div className="flex flex-row items-center w-full px-8 justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                Other Special Items
              </h2>
              <FaArrowRight className="text-gray-600 dark:text-gray-400" />
            </div>
          </div>
          <div className=" px-2 pb-20 grid  md:grid-cols-2 lg:grid-cols-3 gap-4 xl:grid-cols-4">
            {randomFoodItems.map((food) => (
              <FoodItemCard key={food._id} food={food} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchResultPage;
