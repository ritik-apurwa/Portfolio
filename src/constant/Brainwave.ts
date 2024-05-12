import { IconType } from "react-icons";
import {
  HiHome,
  HiMenu,
  HiOutlineInformationCircle,
  HiOutlineMail,
} from "react-icons/hi";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaProjectDiagram,
  FaPrescription,
} from "react-icons/fa";
import {
  BiBookContent,
  BiCalculator,
  BiCart,
  BiFoodMenu,
  BiFoodTag,
} from "react-icons/bi";
import { CiBurger, CiClock2 } from "react-icons/ci";
import { HiColorSwatch } from "react-icons/hi";
import { FaRandom } from "react-icons/fa";
import brainwave from "./media/other/brainwave.svg";
import check from "./media/other/check-02.svg";
import brainwaveSymbol from "./media/other/brainwave-symbol.svg";
import brainwaveWhiteSymbol from "./media/other/brainwave-symbol-white.svg";
import play from "./media/other/play.svg";
import smallSphere from "./media/other/4-small.png";
import grid from "./media/other/grid.png";
import check2 from "./media/other/check-02.svg";
import loading from "./media/other/loading-01.svg";
import yourlogo from "./media/other/yourlogo.svg";
import homeSmile from "./media/other/home-smile.svg";
import file02 from "./media/other/file-02.svg";
import searchMd from "./media/other/search-md.svg";
import plusSquare from "./media/other/plus-square.svg";
import recording03 from "./media/other/recording-03.svg";
import recording01 from "./media/other/recording-01.svg";
import disc02 from "./media/other/disc-02.svg";
import chromecast from "./media/other/chrome-cast.svg";
import sliders04 from "./media/other/sliders-04.svg";
import background from "./media/other/background.jpg";
import loading1 from "./media/other/loading-01.svg";
import curve from "./media/hero/curve.png";
import robot from "./media/hero/robot.jpg";
import heroBackground from "./media/hero/hero-background.jpg";
import benefitCard1 from "./media/benefits/card-1.svg";
import benefitCard2 from "./media/benefits/card-2.svg";
import benefitCard3 from "./media/benefits/card-3.svg";
import benefitCard4 from "./media/benefits/card-4.svg";
import benefitCard5 from "./media/benefits/card-5.svg";
import benefitCard6 from "./media/benefits/card-6.svg";
import benefitIcon1 from "./media/benefits/icon-1.svg";
import benefitIcon2 from "./media/benefits/icon-2.svg";
import benefitIcon3 from "./media/benefits/icon-3.svg";
import benefitIcon4 from "./media/benefits/icon-4.svg";
import discordBlack from "./media/socials/discord.svg";
import facebook from "./media/socials/facebook.svg";
import instagram from "./media/socials/instagram.svg";
import telegram from "./media/socials/telegram.svg";
import twitter from "./media/socials/twitter.svg";
import curve1 from "./media/collaboration/curve-1.svg";
import curve2 from "./media/collaboration/curve-2.svg";
import benefitImage2 from "./media/benefits/image-2.png";
import stars from "./media/pricing/stars.svg";
import lines from "./media/pricing/lines.svg";
import coins from "./media/roadmap/coins.png";
import done from "./media/roadmap/done.svg";
import discord from "./media/socials/discord.svg";
import undone from "./media/roadmap/undone.svg";
import figma from "./media/collaboration/figma.png";
import framer from "./media/collaboration/framer.png";
import notion from "./media/collaboration/notion.png";
import photoshop from "./media/collaboration/photoshop.png";
import protopie from "./media/collaboration/protopie.png";
import raindrop from "./media/collaboration/raindrop.png";
import slack from "./media/collaboration/slack.png";
import service1 from "./media/services/service-1.png";
import service2 from "./media/services/service-2.png";
import service3 from "./media/services/service-3.png";
import hero from "./media/roadmap/hero.png";
import roadmap1 from "./media/roadmap/image-1.png";
import roadmap2 from "./media/roadmap/image-2.png";
import roadmap3 from "./media/roadmap/image-3.png";
import roadmap4 from "./media/roadmap/image-4.png";
import notification1 from "./media/notification/image-1.png";
import notification2 from "./media/notification/image-2.png";
import notification3 from "./media/notification/image-3.png";
import notification4 from "./media/notification/image-4.png";
import anime1 from "./media/animebackground/animebg1.jpg";
import anime2 from "./media/animebackground/animebg2.jpg";
import anime3 from "./media/animebackground/animesunsetbg4.jpg";
import anime4 from "./media/animebackground/naturebg3.jpg";
import gradient from "./media/other/gradient.png";
import { StaticImageData } from "next/image";
import BrainLogo from "./media/other/BrainPng.png";
import EduLogo from "./media/other/EduLogo.png";
import ProjectLogo from "./media/other/ProjectPNG.png";
import FoodLogo from "./media/other/FoodLogo.png";

interface ProjectLink {
  id: string;
  label: string;
  route: string;
  icon: IconType;
}

// Interface for the project
interface Project {
  id: number;
  label: string;
  logo: StaticImageData;
  projectlinks: ProjectLink[];
}
interface FooterLinksInterface {
  id: number;
  label: string;
  route: string;
  icon: IconType;
}

export const FooterNavLinks: FooterLinksInterface[] = [
  { id: 1, label: "Home", route: "/", icon: HiHome },
  { id: 2, label: "Projects", route: "/projects", icon: GiSkills },
  { id: 3, label: "FoodApp", route: "/foodapp", icon: CiBurger },
  { id: 4, label: "onlineedu", route: "/onlineedu", icon: GiOpenBook },
  { id: 5, label: "About", route: "/about", icon: IoPersonOutline },
];
export const FooterFoodLinks: FooterLinksInterface[] = [
  { id: 1, label: "Home", route: "/foodapp", icon: HiHome },
  {
    id: 2,
    label: "Menu",
    route: "/foodapp/menu",
    icon: MdOutlineFoodBank,
  },
  {
    id: 3,
    label: "Order",
    route: "/foodapp/order",
    icon: FaProjectDiagram,
  },
  {
    id: 4,
    label: "Deals",
    route: "/foodapp/deals",
    icon: MdOutlineSchool,
  },
  {
    id: 5,
    label: "Contact Us",
    route: "/foodapp/contact",
    icon: AiOutlineInfoCircle,
  },
];
export const FooterProjectLinks: FooterLinksInterface[] = [
  { id: 1, label: "Home", route: "/projects", icon: HiHome },
  {
    id: 2,
    label: "Projects",
    route: "/projects/projects",
    icon: FaProjectDiagram,
  },
  {
    id: 3,
    label: "Team",
    route: "/projects/team",
    icon: MdOutlineFoodBank,
  },
  {
    id: 4,
    label: "Tasks",
    route: "/projects/tasks",
    icon: MdOutlineSchool,
  },
  {
    id: 5,
    label: "Reports",
    route: "/projects/reports",
    icon: AiOutlineInfoCircle,
  },
];
export const FooterEduLinks: FooterLinksInterface[] = [
  { id: 1, label: "Home", route: "/onlineedu", icon: HiHome },
  {
    id: 2,
    label: "Courses",
    route: "/onlineedu/courses",
    icon: MdOutlineSchool,
  },
  {
    id: 3,
    label: "Schedule",
    route: "/onlineedu/schedule",
    icon: FaProjectDiagram,
  },
  {
    id: 4,
    label: "Assignments",
    route: "/onlineedu/assignments",
    icon: MdOutlineFoodBank,
  },
  {
    id: 5,
    label: "Support",
    route: "/onlineedu/support",
    icon: AiOutlineInfoCircle,
  },
];

export const Duno: Project[] = [
  {
    id: 1,
    label: "Brainwave",
    logo: BrainLogo,
    projectlinks: [
      { id: "1", label: "Home", route: "/", icon: HiHome },
      { id: "2", label: "Projects", route: "/projects", icon: HiHome },
      { id: "3", label: "FoodApp", route: "/foodapp", icon: HiHome },
      { id: "4", label: "onlineedu", route: "/onlineedu", icon: HiHome },
      { id: "5", label: "About", route: "/about", icon: HiHome },
    ],
  },
  {
    id: 2,
    label: "FoodApp",
    logo: FoodLogo,
    projectlinks: [
      { id: "1", label: "Home", route: "/", icon: HiHome },
      {
        id: "2",
        label: "Menu",
        route: "/foodapp/menu",
        icon: MdOutlineFoodBank,
      },
      {
        id: "3",
        label: "Order",
        route: "/foodapp/order",
        icon: FaProjectDiagram,
      },
      {
        id: "4",
        label: "Deals",
        route: "/foodapp/deals",
        icon: MdOutlineSchool,
      },
      {
        id: "5",
        label: "Contact Us",
        route: "/foodapp/contact",
        icon: AiOutlineInfoCircle,
      },
    ],
  },
  {
    id: 3,
    label: "ProjectApp",
    logo: ProjectLogo,
    projectlinks: [
      { id: "1", label: "Home", route: "/", icon: HiHome },
      {
        id: "2",
        label: "Projects",
        route: "/projects/projects",
        icon: FaProjectDiagram,
      },
      {
        id: "3",
        label: "Team",
        route: "/projects/team",
        icon: MdOutlineFoodBank,
      },
      {
        id: "4",
        label: "Tasks",
        route: "/projects/tasks",
        icon: MdOutlineSchool,
      },
      {
        id: "5",
        label: "Reports",
        route: "/projects/reports",
        icon: AiOutlineInfoCircle,
      },
    ],
  },
  {
    id: 4,
    label: "OnlineEdu",
    logo: EduLogo,
    projectlinks: [
      { id: "1", label: "Home", route: "/", icon: HiHome },
      {
        id: "2",
        label: "Courses",
        route: "/onlineedu/courses",
        icon: MdOutlineSchool,
      },
      {
        id: "3",
        label: "Schedule",
        route: "/onlineedu/schedule",
        icon: FaProjectDiagram,
      },
      {
        id: "4",
        label: "Assignments",
        route: "/onlineedu/assignments",
        icon: MdOutlineFoodBank,
      },
      {
        id: "5",
        label: "Support",
        route: "/onlineedu/support",
        icon: AiOutlineInfoCircle,
      },
    ],
  },
];

interface ImagesInterface {
  brainwave: string;
  check: string;
  check2: string;
  loading1: string;
  brainwaveSymbol: string;
  brainwaveWhiteSymbol: string;
  play: string;
  gradient: StaticImageData;
  smallSphere: StaticImageData;
  grid: StaticImageData;
  yourlogo: string;
  homeSmile: string;
  file02: string;
  searchMd: string;
  plusSquare: string;
  recording03: string;
  recording01: string;
  disc02: string;
  chromecast: string;
  sliders04: string;
  loading: string;
  background: StaticImageData;
  curve: StaticImageData;
  robot: StaticImageData;
  heroBackground: StaticImageData;
  curve1: string;
  curve2: string;
  discord: string;
  figma: StaticImageData;
  framer: StaticImageData;
  notion: StaticImageData;
  photoshop: StaticImageData;
  protopie: StaticImageData;
  raindrop: StaticImageData;
  slack: StaticImageData;
  service1: StaticImageData;
  service2: StaticImageData;
  service3: StaticImageData;
  lines: string;
  stars: string;
  coins: StaticImageData;
  done: string;
  hero: StaticImageData;
  roadmap1: StaticImageData;
  roadmap2: StaticImageData;
  roadmap3: StaticImageData;
  roadmap4: StaticImageData;
  undone: string;
  notification1: StaticImageData;
  notification2: StaticImageData;
  notification3: StaticImageData;
  notification4: StaticImageData;
  benefitCard1: string;
  benefitCard2: string;
  benefitCard3: string;
  benefitCard4: string;
  benefitCard5: string;
  benefitCard6: string;
  benefitIcon1: string;
  benefitIcon2: string;
  benefitIcon3: string;
  benefitIcon4: string;
  benefitImage2: StaticImageData;
  discordBlack: string;
  facebook: string;
  instagram: string;
  telegram: string;
  twitter: string;
  BrainLogo: StaticImageData;
  EduLogo: StaticImageData;
  ProjectLogo: StaticImageData;
  FoodLogo: StaticImageData;
}
// Images with Interface Exported
export const Images: ImagesInterface = {
  brainwave,
  check,
  check2,
  loading1,
  brainwaveSymbol,
  brainwaveWhiteSymbol,
  play,
  gradient,
  smallSphere,
  grid,
  yourlogo,
  homeSmile,
  file02,
  searchMd,
  plusSquare,
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
  loading,
  background,
  curve,
  robot,
  heroBackground,
  curve1,
  curve2,
  discord,
  figma,
  framer,
  notion,
  photoshop,
  protopie,
  raindrop,
  slack,
  service1,
  service2,
  service3,
  lines,
  stars,
  coins,
  done,
  hero,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  undone,
  notification1,
  notification2,
  notification3,
  notification4,
  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5,
  benefitCard6,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discordBlack,
  facebook,
  instagram,
  telegram,
  twitter,
  BrainLogo,
  EduLogo,
  ProjectLogo,
  FoodLogo,
};

interface IconsSVG {
  id: number;
  alt: string;
  imgUrl: string;
}

export const heroIcons: IconsSVG[] = [
  { id: 1, alt: homeSmile, imgUrl: homeSmile },
  { id: 2, alt: file02, imgUrl: file02 },
  { id: 3, alt: searchMd, imgUrl: searchMd },
  { id: 4, alt: plusSquare, imgUrl: plusSquare },
];
interface ImagePNG {
  id: number;
  alt: string;
  imgUrl: StaticImageData;
}
export const notificationImages: ImagePNG[] = [
  { id: 1, alt: "Notification 1", imgUrl: notification1 },
  { id: 2, alt: "Notification 2", imgUrl: notification2 },
  { id: 3, alt: "Notification 3", imgUrl: notification3 },
  { id: 4, alt: "Notification 4", imgUrl: notification4 },
];
interface companyLogos {
  id: number;
  alt: string;
  imgUrl: string;
}
export const companyLogos: companyLogos[] = [
  { id: 1, alt: "Notification 1", imgUrl: yourlogo },
  { id: 2, alt: "Notification 2", imgUrl: yourlogo },
  { id: 3, alt: "Notification 3", imgUrl: yourlogo },
  { id: 4, alt: "Notification 4", imgUrl: yourlogo },
];

interface PricingFeature {
  id: string;
  data: string;
}
interface Pricing {
  id: string;
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
}
export const pricing: Pricing[] = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      { id: "1", data: "An AI chatbot that can understand your queries" },
      {
        id: "2",
        data: "Personalized recommendations based on your preferences",
      },
      {
        id: "3",
        data: "Ability to explore the app and its features without any cost",
      },
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      {
        id: "1",
        data: "An advanced AI chatbot that can understand complex queries",
      },
      { id: "2", data: "An analytics dashboard to track your conversations" },
      { id: "3", data: "Priority support to solve issues quickly" },
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "19.99",

    features: [
      { id: "1", data: "An AI chatbot that can understand your queries" },
      {
        id: "2",
        data: "Personalized recommendations based on your preferences",
      },
      {
        id: "3",
        data: "Ability to explore the app and its features without any cost",
      },
    ],
  },
];

interface Social {
  id: string;
  title: string;
  iconUrl: IconType;
  url: string;
}

export const socials: Social[] = [
  {
    id: "0",
    title: "Discord",
    iconUrl: FaDiscord,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: FaTwitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: FaInstagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: FaTelegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: FaFacebook,
    url: "#",
  },
];

interface navlinks {
  id: number;
  route: string;
  label: string;
  icon: IconType;
}
export const navlinks: navlinks[] = [
  { id: 1, route: "/", label: "Home", icon: HiHome },
  { id: 2, route: "/onlineedu", label: "OnlineEdu", icon: BiBookContent },
  { id: 3, route: "/contact", label: "Contact", icon: HiOutlineMail },
  { id: 4, route: "/projects", label: "Projects", icon: FaProjectDiagram },
  { id: 4, route: "/foodapp", label: "FoodApp", icon: CiBurger },
];

export const projectlinks: navlinks[] = [
  {
    id: 1,
    route: "/project-app/calcultor",
    label: "Calculator",
    icon: BiCalculator,
  },
  { id: 2, route: "/project-app/clock", label: "Clock", icon: CiClock2 },
  { id: 3, route: "/project-app/colors", label: "Colors", icon: HiColorSwatch },
  {
    id: 4,
    route: "/project-app/random-number",
    label: "Random Number",
    icon: FaRandom,
  },
];

export const foodapplinks: navlinks[] = [
  {
    id: 1,
    route: "/food-app",
    label: "About",
    icon: HiOutlineInformationCircle,
  },
  { id: 2, route: "/food-app/menu", label: "Contact", icon: HiOutlineMail },
  { id: 3, route: "/food-app/cart", label: "Privacy", icon: BiCart },
  { id: 4, route: "/food-app/profile", label: "Privacy", icon: FaPrescription },
];

import { z } from "zod";
import { Label } from "@radix-ui/react-label";
import { MdOutlineFoodBank, MdOutlineSchool } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiOpenBook, GiSkills } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";

export const authFormSchema = (type: string) =>
  z.object({
    // sign up
    firstName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    lastName: type === "sign-in" ? z.string().optional() : z.string().min(3),
    address1: type === "sign-in" ? z.string().optional() : z.string().max(50),
    city: type === "sign-in" ? z.string().optional() : z.string().max(50),
    state:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(2),
    postalCode:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(6),
    dateOfBirth: type === "sign-in" ? z.string().optional() : z.string().min(3),
    ssn: type === "sign-in" ? z.string().optional() : z.string().min(3),
    // both
    email: z.string().email(),
    password: z.string().min(8),
  });
