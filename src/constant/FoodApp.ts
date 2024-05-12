import { HiHome, HiMenu, HiOutlineMail, HiDownload } from "react-icons/hi";
import { BiFoodTag } from "react-icons/bi";

import Logo from "../../../../../app/assets/other/FoodLogo.png";

export const navigationLinks = [
  { id: 1, route: "/", label: "Home", icon: HiHome },
  { id: 2, route: "/pages/menu", label: "Menu", icon: HiMenu },
  { id: 3, route: "/pages/contact", label: "Contact", icon: HiOutlineMail },
  { id: 4, route: "/pages/food", label: "Food", icon: BiFoodTag },
];
import add_icon_white from "./media/FoodImages/others/add_icon_white.png";
import add_icon_green from "./media/FoodImages/others/add_icon_green.png";
import remove_icon_red from "./media/FoodImages/others/remove_icon_red.png";
import app_store from "./media/FoodImages/others/app_store.png";
import play_store from "./media/FoodImages/others/play_store.png";
import selector_icon from "./media/FoodImages/others/selector_icon.png";
import rating_starts from "./media/FoodImages/others/rating_starts.png";
import profile_icon from "./media/FoodImages/others/profile_icon.png";
import bag_icon from "./media/FoodImages/others/bag_icon.png";
import parcel_icon from "./media/FoodImages/others/parcel_icon.png";
import not_found from "./media/FoodImages/others/nothing_found.jpg";
import empty_basket from "./media/FoodImages/others/empty_basket.webp";
import HeroBg from "./media/FoodImages/others/HeroBg.png";

export const FoodImageData: FoodImagesData = {
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  selector_icon,
  rating_starts,
  profile_icon,
  bag_icon,
  parcel_icon,
  not_found,
  empty_basket,
  HeroBg,
};

interface FoodImagesData {
  add_icon_green: StaticImageData;
  add_icon_white: StaticImageData;
  remove_icon_red: StaticImageData;
  app_store: StaticImageData;
  play_store: StaticImageData;
  selector_icon: StaticImageData;
  rating_starts: StaticImageData;
  profile_icon: StaticImageData;
  bag_icon: StaticImageData;
  parcel_icon: StaticImageData;
  not_found: StaticImageData;
  empty_basket: StaticImageData;
  HeroBg: StaticImageData;
}

import menu_1 from "./media/FoodImages/MenuItem/menu_1.png";
import menu_2 from "./media/FoodImages/MenuItem/menu_2.png";
import menu_3 from "./media/FoodImages/MenuItem/menu_3.png";
import menu_4 from "./media/FoodImages/MenuItem/menu_4.png";
import menu_5 from "./media/FoodImages/MenuItem/menu_5.png";
import menu_6 from "./media/FoodImages/MenuItem/menu_6.png";
import menu_7 from "./media/FoodImages/MenuItem/menu_7.png";
import menu_8 from "./media/FoodImages/MenuItem/menu_8.png";
import food_1 from "./media/FoodImages/FoodItem/food_1.png";
import food_2 from "./media/FoodImages/FoodItem/food_2.png";
import food_3 from "./media/FoodImages/FoodItem/food_3.png";
import food_4 from "./media/FoodImages/FoodItem/food_4.png";
import food_5 from "./media/FoodImages/FoodItem/food_5.png";
import food_6 from "./media/FoodImages/FoodItem/food_6.png";
import food_7 from "./media/FoodImages/FoodItem/food_7.png";
import food_8 from "./media/FoodImages/FoodItem/food_8.png";
import food_9 from "./media/FoodImages/FoodItem/food_9.png";
import food_10 from "./media/FoodImages/FoodItem/food_10.png";
import food_11 from "./media/FoodImages/FoodItem/food_11.png";
import food_12 from "./media/FoodImages/FoodItem/food_12.png";
import food_13 from "./media/FoodImages/FoodItem/food_13.png";
import food_14 from "./media/FoodImages/FoodItem/food_14.png";
import food_15 from "./media/FoodImages/FoodItem/food_15.png";
import food_16 from "./media/FoodImages/FoodItem/food_16.png";
import food_17 from "./media/FoodImages/FoodItem/food_17.png";
import food_18 from "./media/FoodImages/FoodItem/food_18.png";
import food_19 from "./media/FoodImages/FoodItem/food_19.png";
import food_20 from "./media/FoodImages/FoodItem/food_20.png";
import food_21 from "./media/FoodImages/FoodItem/food_21.png";
import food_22 from "./media/FoodImages/FoodItem/food_22.png";
import food_23 from "./media/FoodImages/FoodItem/food_23.png";
import food_24 from "./media/FoodImages/FoodItem/food_24.png";
import food_25 from "./media/FoodImages/FoodItem/food_25.png";
import food_26 from "./media/FoodImages/FoodItem/food_26.png";
import food_27 from "./media/FoodImages/FoodItem/food_27.png";
import food_28 from "./media/FoodImages/FoodItem/food_28.png";
import food_29 from "./media/FoodImages/FoodItem/food_29.png";
import food_30 from "./media/FoodImages/FoodItem/food_30.png";
import food_31 from "./media/FoodImages/FoodItem/food_31.png";
import food_32 from "./media/FoodImages/FoodItem/food_32.png";

import { StaticImageData } from "next/image";

interface FoodImage {
  id: number;
  src: StaticImageData;
  alt: string;
}

export const FoodImages: FoodImage[] = [
  { id: 1, src: food_1, alt: "food_image" },
  { id: 2, src: food_2, alt: "food_image" },
  { id: 3, src: food_3, alt: "food_image" },
  { id: 4, src: food_4, alt: "food_image" },
  { id: 5, src: food_5, alt: "food_image" },
  { id: 6, src: food_6, alt: "food_image" },
  { id: 7, src: food_7, alt: "food_image" },
  { id: 8, src: food_8, alt: "food_image" },
  { id: 9, src: food_9, alt: "food_image" },
  { id: 10, src: food_10, alt: "food_image" },
  { id: 11, src: food_11, alt: "food_image" },
  { id: 12, src: food_12, alt: "food_image" },
  { id: 13, src: food_13, alt: "food_image" },
  { id: 14, src: food_14, alt: "food_image" },
  { id: 15, src: food_15, alt: "food_image" },
  { id: 16, src: food_16, alt: "food_image" },
  { id: 17, src: food_17, alt: "food_image" },
  { id: 18, src: food_18, alt: "food_image" },
  { id: 19, src: food_19, alt: "food_image" },
  { id: 20, src: food_20, alt: "food_image" },
  { id: 21, src: food_21, alt: "food_image" },
  { id: 22, src: food_22, alt: "food_image" },
  { id: 23, src: food_23, alt: "food_image" },
  { id: 24, src: food_24, alt: "food_image" },
  { id: 25, src: food_25, alt: "food_image" },
  { id: 26, src: food_26, alt: "food_image" },
  { id: 27, src: food_27, alt: "food_image" },
  { id: 28, src: food_28, alt: "food_image" },
  { id: 29, src: food_29, alt: "food_image" },
  { id: 30, src: food_30, alt: "food_image" },
  { id: 31, src: food_31, alt: "food_image" },
  { id: 32, src: food_32, alt: "food_image" },
];

export interface MenuListInterface {
  id: string;
  menu_name: string;
  menu_image: StaticImageData;
}

export const MenuList: MenuListInterface[] = [
  { id: "1", menu_name: "Salad", menu_image: menu_1 },
  { id: "2", menu_name: "Rolls", menu_image: menu_2 },
  { id: "3", menu_name: "Desserts", menu_image: menu_3 },
  { id: "4", menu_name: "Sandwich", menu_image: menu_4 },
  { id: "5", menu_name: "Cake", menu_image: menu_5 },
  { id: "6", menu_name: "Pure Veg", menu_image: menu_6 },
  { id: "7", menu_name: "Pasta", menu_image: menu_7 },
  { id: "8", menu_name: "Noodles", menu_image: menu_8 },
];

export interface FoodListInterface {
  _id: string;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  category: string;
}
export const FoodList: FoodListInterface[] = [
  {
    _id: "1",
    name: "Greek salad",
    image: food_1,
    price: 12,
    description:
      "A classNameic Greek salad with fresh lettuce, juicy tomatoes, crisp cucumbers, tangy olives, and creamy feta cheese, tossed in a light vinaigrette dressing.",
    category: "Salad",
  },
  {
    _id: "2",
    name: "Veg salad",
    image: food_2,
    price: 18,
    description:
      "A colorful and nutritious veggie salad featuring an assortment of fresh vegetables like bell peppers, carrots, broccoli, and cherry tomatoes, topped with a zesty lemon dressing.",
    category: "Salad",
  },
  {
    _id: "3",
    name: "Clover Salad",
    image: food_3,
    price: 16,
    description:
      "A delightful clover salad made with tender clover leaves, crunchy almonds, sweet cranberries, and creamy goat cheese, drizzled with a balsamic glaze.",
    category: "Salad",
  },
  {
    _id: "4",
    name: "Chicken Salad",
    image: food_4,
    price: 24,
    description:
      "A protein-packed chicken salad featuring grilled chicken breast slices, crisp lettuce, ripe avocado, juicy cherry tomatoes, and hard-boiled eggs, served with a tangy honey mustard dressing.",
    category: "Salad",
  },
  {
    _id: "5",
    name: "Lasagna Rolls",
    image: food_5,
    price: 14,
    description:
      "Delicious lasagna rolls stuffed with layers of seasoned ground beef, creamy ricotta cheese, and marinara sauce, baked to perfection and topped with melted mozzarella cheese.",
    category: "Rolls",
  },
  {
    _id: "6",
    name: "Peri Peri Rolls",
    image: food_6,
    price: 12,
    description:
      "Spicy peri peri chicken rolls made with tender chicken strips marinated in a fiery peri peri sauce, wrapped in soft tortillas with crunchy lettuce and tangy mayo.",
    category: "Rolls",
  },
  {
    _id: "7",
    name: "Chicken Rolls",
    image: food_7,
    price: 20,
    description:
      "Savory chicken rolls filled with shredded chicken, sautéed onions, bell peppers, and melted cheese, rolled up in soft dough and baked until golden brown.",
    category: "Rolls",
  },
  {
    _id: "8",
    name: "Veg Rolls",
    image: food_8,
    price: 15,
    description:
      "Vegetarian rolls packed with a colorful mix of stir-fried vegetables like cabbage, carrots, and bell peppers, seasoned with soy sauce and wrapped in crispy spring roll wrappers.",
    category: "Rolls",
  },
  {
    _id: "9",
    name: "Ripple Ice Cream",
    image: food_9,
    price: 14,
    description:
      "Smooth and creamy ripple ice cream swirled with ribbons of rich chocolate sauce, creating a delightful combination of sweet and indulgent flavors.",
    category: "Desserts",
  },
  {
    _id: "10",
    name: "Fruit Ice Cream",
    image: food_10,
    price: 22,
    description:
      "Refreshing fruit ice cream made with ripe seasonal fruits like strawberries, mangoes, and peaches, blended into a creamy frozen dessert that's bursting with fruity goodness.",
    category: "Desserts",
  },
  {
    _id: "11",
    name: "Jar Ice Cream",
    image: food_11,
    price: 10,
    description:
      "Creamy jar ice cream served in individual portions, with layers of velvety vanilla and rich chocolate ice cream, topped with crunchy nuts and chocolate shavings.",
    category: "Desserts",
  },
  {
    _id: "12",
    name: "Vanilla Ice Cream",
    image: food_12,
    price: 12,
    description:
      "classNameic vanilla ice cream made with real vanilla beans and fresh cream, creating a smooth and creamy dessert that's perfect for any occasion.",
    category: "Desserts",
  },
  {
    _id: "13",
    name: "Chicken Sandwich",
    image: food_13,
    price: 12,
    description:
      "Grilled chicken sandwich with juicy chicken breast, crispy lettuce, ripe tomatoes, and creamy mayo, served on toasted whole grain bread for a wholesome and satisfying meal.",
    category: "Sandwich",
  },
  {
    _id: "14",
    name: "Vegan Sandwich",
    image: food_14,
    price: 18,
    description:
      "A hearty vegan sandwich filled with grilled vegetables like eggplant, zucchini, and bell peppers, layered with hummus and fresh greens, served on artisanal multigrain bread.",
    category: "Sandwich",
  },
  {
    _id: "15",
    name: "Grilled Sandwich",
    image: food_15,
    price: 16,
    description:
      "Delicious grilled sandwich with melted cheese, sliced ham, and tangy pickles, pressed between slices of buttery toasted bread until golden and crispy.",
    category: "Sandwich",
  },
  {
    _id: "16",
    name: "Bread Sandwich",
    image: food_16,
    price: 24,
    description:
      "Simple yet satisfying bread sandwich with a choice of fillings like egg salad, tuna, or turkey, served with lettuce, tomato, and a dollop of mayo.",
    category: "Sandwich",
  },
  {
    _id: "17",
    name: "Cup Cake",
    image: food_17,
    price: 14,
    description:
      "Moist and fluffy cupcake topped with smooth buttercream frosting, available in a variety of flavors like chocolate, vanilla, red velvet, and more.",
    category: "Cake",
  },
  {
    _id: "18",
    name: "Vegan Cake",
    image: food_18,
    price: 12,
    description:
      "Decadent vegan cake made without any animal products, but still bursting with flavor and moistness, available in options like chocolate, carrot, and lemon.",
    category: "Cake",
  },
  {
    _id: "19",
    name: "Butterscotch Cake",
    image: food_19,
    price: 20,
    description:
      "Rich and buttery butterscotch cake with layers of moist sponge cake, creamy butterscotch frosting, and crunchy toffee bits, a perfect indulgence for any occasion.",
    category: "Cake",
  },
  {
    _id: "20",
    name: "Sliced Cake",
    image: food_20,
    price: 15,
    description:
      "Delightful sliced cake with layers of light sponge cake and fruity jam, covered in a sweet glaze and garnished with fresh berries for a burst of flavor.",
    category: "Cake",
  },
  {
    _id: "21",
    name: "Garlic Mushroom",
    image: food_21,
    price: 14,
    description:
      "Sautéed garlic mushrooms cooked to perfection in a savory butter sauce, seasoned with herbs and spices for an irresistible appetizer or side dish.",
    category: "Pure Veg",
  },
  {
    _id: "22",
    name: "Fried Cauliflower",
    image: food_22,
    price: 22,
    description:
      "Crispy fried cauliflower florets tossed in a tangy and spicy sauce, served with a side of creamy dipping sauce for a tasty and satisfying vegetarian dish.",
    category: "Pure Veg",
  },
  {
    _id: "23",
    name: "Mix Veg Pulao",
    image: food_23,
    price: 10,
    description:
      "Flavorful mix veg pulao made with fragrant basmati rice, mixed vegetables like carrots, peas, and beans, and a blend of aromatic spices, perfect as a main course or side dish.",
    category: "Pure Veg",
  },
  {
    _id: "24",
    name: "Rice Zucchini",
    image: food_24,
    price: 12,
    description:
      "Healthy and delicious rice with zucchini cooked in a creamy coconut milk sauce, seasoned with garlic, ginger, and spices for a comforting and nutritious meal.",
    category: "Pure Veg",
  },
  {
    _id: "25",
    name: "Cheese Pasta",
    image: food_25,
    price: 12,
    description:
      "Cheesy pasta with al dente noodles coated in a rich and creamy cheese sauce, made with a blend of cheddar, mozzarella, and parmesan cheese for a comforting and indulgent dish.",
    category: "Pasta",
  },
  {
    _id: "26",
    name: "Tomato Pasta",
    image: food_26,
    price: 18,
    description:
      "Fresh tomato pasta with tangy tomato sauce made from ripe tomatoes, garlic, and herbs, tossed with cooked spaghetti and garnished with grated parmesan cheese and fresh basil.",
    category: "Pasta",
  },
  {
    _id: "27",
    name: "Creamy Pasta",
    image: food_27,
    price: 16,
    description:
      "Creamy pasta with a velvety sauce made from heavy cream, garlic, and parmesan cheese, tossed with your choice of pasta and garnished with chopped parsley for a luxurious and satisfying meal.",
    category: "Pasta",
  },
  {
    _id: "28",
    name: "Chicken Pasta",
    image: food_28,
    price: 24,
    description:
      "Savory chicken pasta with tender chicken pieces sautéed with garlic, onions, and bell peppers, tossed in a creamy Alfredo sauce and served over your favorite pasta.",
    category: "Pasta",
  },
  {
    _id: "29",
    name: "Butter Noodles",
    image: food_29,
    price: 14,
    description:
      "Buttery noodles cooked al dente and seasoned with garlic, herbs, and parmesan cheese, a simple yet satisfying dish that's perfect for a quick and easy meal.",
    category: "Noodles",
  },
  {
    _id: "30",
    name: "Veg Noodles",
    image: food_30,
    price: 12,
    description:
      "Stir-fried veggie noodles with an assortment of colorful vegetables like carrots, bell peppers, and broccoli, tossed in a savory soy sauce and sesame oil dressing.",
    category: "Noodles",
  },
  {
    _id: "31",
    name: "Somen Noodles",
    image: food_31,
    price: 20,
    description:
      "Light and refreshing somen noodles served cold with a dipping sauce made from soy sauce, mirin, and dashi, garnished with green onions and sesame seeds for added flavor.",
    category: "Noodles",
  },
  {
    _id: "32",
    name: "Cooked Noodles",
    image: food_32,
    price: 15,
    description:
      "Simple and satisfying cooked noodles with a choice of protein like chicken, beef, or tofu, tossed with stir-fried vegetables and a savory sauce for a filling and delicious meal.",
    category: "Noodles",
  },
];
