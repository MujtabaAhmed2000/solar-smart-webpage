"use client";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Links = ({ children }) => {
    return (
      <Link
        href={"/"}
        className={
          [
            scrollPosition > 10
              ? "text-secondary-900 hover:border-b-secondary-900"
              : "text-secondary hover:border-b-secondary",
          ] +
          [
            " border-b-2 border-b-transparent py-2 text-lg duration-200 lg:text-xl",
          ]
        }
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={
        [
          scrollPosition > 10
            ? "border-b-secondary-100 bg-background"
            : "border-b-transparent bg-transparent",
        ] +
        [" fixed left-0 top-0 z-50 flex h-20 w-screen border-b-2 duration-300"]
      }
    >
      <div className="container-width flex flex-row items-center justify-between">
        <Link
          href={"/"}
          className="flex font-inter text-3xl text-primary lg:text-5xl"
        >
          <h1 className="font-semibold">Solar</h1>
          <h1 className="font-normal">Smart</h1>
        </Link>
        <div className="lg:hidden">
          <HeaderMenu scrollPosition={scrollPosition} />
        </div>
        <div className="hidden space-x-8 lg:flex">
          <Links>Home</Links>
          <Links>Contact</Links>
        </div>
      </div>
    </header>
  );
};

export default Header;
