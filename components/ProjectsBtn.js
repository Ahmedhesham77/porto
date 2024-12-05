//next image 
import Image from "next/image";

//next link 
import Link from "next/link";

//icons

import { HiArrowRight } from "react-icons/hi2"

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link href={"/work"} className="relative w-[170px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group lg:justify-center z-50">
      <Image
        src={"/rounded-text.png"}
        width={141}
        height={148}
        alt=""
        className="animate-spin-slow w-full h-[98%] max-w-[141px] max-h-[160px] z-50" />
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 z-50" />
    </Link>
  </div>;
};

export default ProjectsBtn;
