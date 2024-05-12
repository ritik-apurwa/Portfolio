import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

export const StarDiv = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const generateRandomRating = () => {
      const randomNumber = Math.floor(Math.random() * 3) + 3; // Generate a random number between 3 and 5
      const randomDecimal = Math.floor(Math.random() * 9) + 1; // Generate a random decimal point between 1 and 9

      let newRating = randomNumber + randomDecimal / 10; // Combine the random number and decimal to form the rating

      if (newRating > 5) {
        newRating = 5; // Ensure the maximum rating is 5
      }

      setRating(newRating);
    };

    generateRandomRating();
  }, []); // Run the effect only once on initial render

  return (
    <div className="w-full flex-center gap-x-2 px-2 items-center text-xs">
      <div className="flex-center">
        <FaStar className="text-orange-600 text-sm" />
      </div>
      {rating !== 0 ? rating : '...'}
    </div>
  );
};