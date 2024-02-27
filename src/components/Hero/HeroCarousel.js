"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useState } from "react";

// import bannerMobile1 from "/public/brands/carousel/mobile/allo-ultra-mobile-banner.WEBP";
// import bannerMobile2 from "/public/brands/carousel/mobile/elf-bar-mobile-banner.PNG";
// import bannerMobile3 from "/public/brands/carousel/mobile/flavour-beast-mobile-banner.WEBP";
// import bannerMobile4 from "/public/brands/carousel/mobile/hqd-mobile-banner.WEBP";
// import bannerMobile5 from "/public/brands/carousel/mobile/lost-vape-orion-mobile-banner.png";

// import bannerDesktop1 from "/public/brands/carousel/desktop/allo-desktop-banner.WEBP";
// import bannerDesktop2 from "/public/brands/carousel/desktop/lost-vape-orion-desktop-banner.WEBP";

const HeroCarousel = () => {
  const [isLoad, setIsLoad] = useState(false);

  const containerClassName = "flex h-full w-full items-center";

  const imgClassName =
    "object-contain overflow-hidden rounded-2xl drop-shadow-sm p-1";

  return (
    <div
      className={
        [isLoad && "animate-floatUp"] +
        " mt-10 h-[90%] w-full overflow-hidden duration-500 hover:-translate-y-2 lg:mt-0 lg:w-2/3 "
      }
    >
      <div className="flex h-full w-full grow lg:items-center">
        {/* DESKTOP */}
        <Carousel
          infiniteLoop
          autoPlay
          emulateTouch
          interval={3000}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          swipeable
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
          className="hidden h-full rounded-2xl drop-shadow-sm lg:block"
        >
          {/* <div className={containerClassName}>
            <Image
              onLoad={() => {
                setIsLoad(true);
              }}
              src={bannerDesktop2}
              alt="lost vape orion"
              className={imgClassName}
            />
          </div>
          <div className={containerClassName}>
            <Image src={bannerDesktop1} alt="Allo" className={imgClassName} />
          </div> */}
        </Carousel>
        {/* MOBILE */}
        <Carousel
          infiniteLoop
          autoPlay
          emulateTouch
          interval={3000}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          swipeable
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
          className="h-full rounded-2xl drop-shadow-sm lg:hidden"
        >
          {/* <div className={containerClassName}>
            <Image
              onLoad={() => {
                setIsLoad(true);
              }}
              src={bannerMobile3}
              alt="flavour beast"
              className={imgClassName}
            />
          </div>
          <div className={containerClassName}>
            <Image src={bannerMobile4} alt="HQD" className={imgClassName} />
          </div>
          <div className={containerClassName}>
            <Image
              src={bannerMobile5}
              alt="lost vape orion"
              className={imgClassName}
            />
          </div>
          <div className={containerClassName}>
            <Image
              src={bannerMobile1}
              alt="Allo Ultra"
              className={imgClassName}
            />
          </div>
          <div className={containerClassName}>
            <Image src={bannerMobile2} alt="elf bar" className={imgClassName} />
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
