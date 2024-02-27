import Link from "next/link";
import Image from "next/image";

import snapchat from "/public/icons/snapchat-icon.svg";

const SnapchatIcon = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center rounded-md p-1 duration-200 hover:bg-[#FFFC00]"
    >
      <Image src={snapchat} alt="snapchat icon" width={20} height={20} />
    </Link>
  );
};

export default SnapchatIcon;
