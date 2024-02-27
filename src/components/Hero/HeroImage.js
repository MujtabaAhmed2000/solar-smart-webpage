"use client";

import Image from "next/image";

import solarPanelSvg from "/public/svgs/solar-panel-hero.svg";

const HeroImage = () => {
  return (
    <div className="mt-10 flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-md drop-shadow-sm duration-500 lg:mt-0 lg:aspect-auto lg:h-[90%] lg:w-3/5 2xl:items-start">
      <Image
        alt="Solar panel"
        src={solarPanelSvg}
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default HeroImage;
