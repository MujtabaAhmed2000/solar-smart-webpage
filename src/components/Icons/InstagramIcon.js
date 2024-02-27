import Link from "next/link";
import Image from "next/image";

import instagram from "/public/icons/instagram-icon.svg";

const InstagramIcon = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center rounded-md p-1 duration-200 hover:bg-[#E1306C]"
    >
      <Image src={instagram} alt="instagram icon" width={20} height={20} />
    </Link>
  );
};

export default InstagramIcon;
