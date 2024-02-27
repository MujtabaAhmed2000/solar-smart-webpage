import Link from "next/link";

import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <main className="container-width flex flex-col items-center overflow-hidden lg:mt-0 lg:h-[calc(100vh-80px-40px)] lg:max-h-[648px] lg:min-h-[560px] lg:flex-row">
      <div className="flex w-full flex-col space-y-4 lg:w-3/5">
        <h1 className="mt-10 animate-fadeIn text-center text-4xl font-semibold text-secondary md:text-4xl lg:mt-0 2xl:text-5xl">
          Revolutionizing Energy Management for a Sustainable Future
        </h1>
        <h2 className="animate-delayFadeIn pb-4 text-center text-lg font-normal text-secondary-200 md:text-2xl">
          Empower Your PV Farms with SolarSmart: Precision Tracking, Future
          Forecasting. Redefine Energy Efficiency.
        </h2>
        <Link
          className="w-full animate-moreDelayFloatUp rounded-lg bg-primary px-4 py-4 text-center text-xl font-bold text-background shadow-xl md:text-2xl"
          href={"/#contact-us"}
        >
          Join the Future Today!
        </Link>
      </div>
      <HeroImage />
    </main>
  );
};

export default Hero;
