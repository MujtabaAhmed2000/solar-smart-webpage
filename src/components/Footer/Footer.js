import Link from "next/link";
import SnapchatIcon from "../Icons/SnapchatIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";

const Footer = () => {
  const Links = ({ children }) => {
    return (
      <Link
        href={"/"}
        className="rounded-md px-3 py-2 text-xs font-medium text-primary duration-200 hover:bg-primary hover:text-white"
      >
        {children}
      </Link>
    );
  };

  return (
    <footer className="flex w-screen flex-col items-center justify-center space-y-2 bg-black/80 px-4 pb-6 pt-12 lg:px-14">
      <div className="flex flex-row space-x-4">
        <SnapchatIcon />
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <div className="space-x-4">
        <Links>Home</Links>
        <Links>Why SolarSmart</Links>
        <Links>Contact</Links>
      </div>
      <Link href={"https://maps.app.goo.gl/2F323oMXbSi5RN3UA"} target="_blank">
        <address className="text-center text-background">
          8 The Seneca Way, Markham, ON L3R 5Y1
        </address>
      </Link>
      <a className="text-center text-background" href="tel:+14374242127">
        (437) 424-2127
      </a>
    </footer>
  );
};

export default Footer;
