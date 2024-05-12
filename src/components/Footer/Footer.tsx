"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MotionFooterButton, MotionFooterContent } from "./FooterMotion";
import FooterSection from "./FooterSection";
import {
  Duno,
  FooterEduLinks,
  FooterFoodLinks,
  FooterNavLinks,
} from "@/constant/Brainwave";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => {
      console.log("Toggling isOpen from:", prev, "to:", !prev); // Check state toggle
      return !prev;
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isOpen]);

  return (
    <div className="z-50 w-full my-4   container justify-center overflow-hidden  flex flex-col-reverse fixed bottom-0">
      <MotionFooterButton isOpen={isOpen} toggle={toggle} />
      <MotionFooterContent isOpen={isOpen}>
        <section className="grid relative grid-flow-row">
          <FooterSection
            title="Navigation"
            useIcons={true}
            items={FooterNavLinks}
            closeFooter={toggle}
          />
          <FooterSection
            title="Online Edu"
            items={FooterEduLinks}
            useIcons={true}
            closeFooter={toggle}
          />
          <FooterSection
            title="Food App"
            items={FooterFoodLinks}
            closeFooter={toggle}
            useIcons={true}
          />
          <FooterSection
            title="Education App"
            items={FooterEduLinks}
            closeFooter={toggle}
            useIcons={true}
          />
          <div className="sticky bg-black z-10 w-full bottom-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, enim.
          </div>
          <div
            id="auth_button"
            className="bg-black  py-6 px-8 gap-x-4 grid grid-cols-2"
          >
            <Link
              onClick={toggle}
              href="/sign-in"
              className="bg-gray-900 text-center hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </Link>
            <Link
              onClick={toggle}
              href="/sign-up"
              className="bg-gray-900 text-center hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </MotionFooterContent>
    </div>
  );
};

export default Footer;
