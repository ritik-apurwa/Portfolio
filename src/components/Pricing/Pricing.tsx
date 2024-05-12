import Section from "../layer/Section";

import Button from "../layer/Button";
import { Images, pricing } from "@/constant/Brainwave";
import Image from "next/image";
import Heading from "../Hero/Heading";

export const Pricing = () => {
  return (
    <Section crosses className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={Images.smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={Images.stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

const PricingList = () => {
  return (
    <div className=" grid  p-2  gap-y-10 md:grid-cols-2 lg:grid-cols-3 ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full  bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4 text-center">{item.title}</h4>

          <p className=" min-h-[4rem] mb-3 text-center px-2 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center justify-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-5xl">$</div>
                <div className="text-6xl leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <div className="w-full flex-center px-4">
            <Button
              className="w-full bg-teal-500 text-black hover:font-bold hover:text-black hover:border-white hover:border
     rounded-md mb-6"
              href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            >
              {item.price ? "Get started" : "Contact us"}
            </Button>
          </div>

          <ul>
            {item.features.map((feature) => (
              <li
                key={feature.id}
                className="flex items-start py-5 border-t border-n-6"
              >
                <Image src={Images.check} width={24} height={24} alt="Check" />
                <p key={feature.id} className="body-2 ml-4">
                  {feature.data}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <Image
        className="w-full"
        src={Images.lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <Image
        className="w-full"
        src={Images.lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
