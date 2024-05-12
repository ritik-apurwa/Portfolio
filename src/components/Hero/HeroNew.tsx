"use client";

import Button from "../layer/Button";
import Section from "../layer/Section";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "../layer/Notification";
import Image from "next/image";

import { Images, companyLogos, heroIcons } from "@/constant/Brainwave";
import { BackgroundCircles, BottomLine, Gradient } from "./Hero";

export const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="lg:pt-[12rem] pt-20 -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings="df"
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="inline-block relative">
              Brainwave{" "}
              <Image
                src={Images.curve}
                className="absolute top-full h-auto left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={Images.robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon) => (
                      <li className="p-5" key={icon.id}>
                        <Image
                          className="h-auto w-auto"
                          src={icon.imgUrl}
                          width={24}
                          height={25}
                          alt={icon.alt}
                        />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={Images.heroBackground}
              className="h-auto w-auto"
              width={1440}
              height={1800}
              alt="hero"
              priority
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

interface GeneratingProps {
  className?: string;
}

export const Generating: React.FC<GeneratingProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <Image
        height={25}
        width={25}
        className="w-5 h-5 mr-4"
        src={Images.loading}
        alt="Loading"
      />
      AI is generating
    </div>
  );
};

interface Logo {
  id: number;
  alt: string;
  imgUrl: string;
}

interface CompanyLogosProps {
  className?: string;
}

const CompanyLogos: React.FC<CompanyLogosProps> = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo: Logo, index: number) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image className="h-auto w-auto" src={logo.imgUrl} width={134} height={28} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};
