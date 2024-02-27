import Link from "next/link";
import Image from "next/image";

import twitter from "/public/icons/twitter-icon.svg";

const TwitterIcon = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center rounded-md p-1 duration-200 hover:bg-[#1DA1F2]"
    >
      <Image src={twitter} alt="twitter icon" width={20} height={20} />
    </Link>
  );
};

export default TwitterIcon;
