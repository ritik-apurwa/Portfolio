import FoodHero from "@/components/FoodHero/FoodHero";
import FoodDisplay from "@/components/FoodShow/FoodDisplay";
import Searchbar from "@/components/Seachbar/Searchbar";
import React from "react";

const page = () => {
  return (
    <section>
      <Searchbar/>
      <FoodHero />
      <FoodDisplay />
    </section>
  );
};

export default page;
