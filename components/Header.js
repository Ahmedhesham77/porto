//next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] xs:px-8">
      <div className="w-full mx-auto sm:w-90">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 lg:gap-y-6 sm:py-4 sm:gap-y-2 sm:flex-row xs:my- xs:gap-y-4 xs:flex-row px-6  ">
          {/*logo */}
          {/* <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </Link> */}
          <h1 className="xl:text-2xl lg:text-[25px] sm:text-[18px] sm:my-1 ">
            Ahmad Hesham <span className="text-accent">.</span>
          </h1>
          {/*socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
