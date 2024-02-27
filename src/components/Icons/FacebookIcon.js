import Link from "next/link";
import Image from "next/image";

import facebook from "/public/icons/facebook-icon.svg";

const FacebookIcon = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center rounded-md p-1 duration-200 hover:bg-[#4267B2]"
    >
      <Image src={facebook} alt="facebook icon" width={20} height={20} />
    </Link>
  );
};

export default FacebookIcon;
