import Link from "next/link";
import { useState } from "react";

const HeaderMenu = ({ scrollPosition }) => {
  const [isShow, setIsShow] = useState(false);

  const Links = ({ children, link }) => {
    return (
      <Link
        href={link}
        onClick={() => {
          setIsShow(false);
        }}
        className="border-b border-white/50 px-5 pb-2 text-2xl text-white "
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {isShow && (
        <div className="animate-fade-in fixed inset-0 z-50 flex h-full w-full bg-black/90">
          <button
            className="absolute right-5 top-5"
            onClick={() => {
              setIsShow(false);
            }}
          >
            <span className="material-symbols-outlined text-3xl text-white">
              close
            </span>
          </button>
          <menu className="mx-10 flex w-full flex-col space-y-5 pt-20">
            <Links link={"/"}>Home</Links>
            <Links link={"/#why-solar-smart"}>Why SolarSmart</Links>
            <Links link={"/#contact-us"}>Contact Us</Links>
          </menu>
        </div>
      )}
      <button
        onClick={() => {
          setIsShow(true);
        }}
      >
        <span
          className={
            [scrollPosition > 10 ? "text-black" : "text-white"] +
            [" material-symbols-outlined text-4xl"]
          }
        >
          menu
        </span>
      </button>
    </>
  );
};

export default HeaderMenu;
