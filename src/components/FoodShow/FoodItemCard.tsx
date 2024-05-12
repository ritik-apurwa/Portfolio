import React, { useContext } from "react";
import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { FoodListInterface } from "@/constant/FoodApp";
import { StarDiv } from "./RandomStar";

interface FoodItemCardProps {
  food: FoodListInterface;
  height?: number;
  width?: number;
}

const useFoodItemCardState = () => {
  const [showFullDescription, setShowFullDescription] = React.useState<{
    [key: string]: boolean;
  }>({});

  const toggleDescription = (id: string) => {
    setShowFullDescription((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return { showFullDescription, toggleDescription };
};

const FoodItemCard: React.FC<FoodItemCardProps> = ({ food, height, width }) => {
  const { showFullDescription, toggleDescription } = useFoodItemCardState();

  return (
    <AnimatePresence>
      <motion.div
        key={food._id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col p-4 lg:max-w-80 bg-gray-800/20 border border-gray-500/40 rounded-lg"
      >
        <div id="food_image_container">
          <Image
            src={food.image}
            alt={food.name}
            height={150}
            width={150}
            className="rounded-lg overflow-hidden object-center w-full h-full"
          />
        </div>

        <div className="prose-sm pt-2">
          <h3 className={` font-bold text-teal-500/60`}>{food.name}</h3>
          <p className="text-sm leading-5 line-clamp-2 text-gray-300/80 ">
            {food.description.slice(0, 100)}
          </p>
          <div className="flex flex-row p-0 justify-between w-full">
            <p className={`font-semibold col-span-4 tracking-widest text-orange-600`}>
              ${food.price}
            </p>
            <div className="flex justify-center items-center">
              <StarDiv />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FoodItemCard;