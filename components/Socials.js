//links
import Link from "next/link";

//icons
import {

  RiFacebookLine,
  RiWhatsappLine
} from "react-icons/ri"
import {

  SiLinkedin
} from "react-icons/si"

const Socials = () => {
  return <div
    className="flex items-center gap-x-5 text-lg "
  >
    <Link href={"https://www.linkedin.com/in/ahmad-hesham-a1b395331/"} className="hover:text-accent transition-all duration-300">
      <SiLinkedin />
    </Link>
    <Link href={"https://www.facebook.com/ahmad.shaamia/"} className="hover:text-accent transition-all duration-300 z-50">
      <RiFacebookLine />
    </Link>
    <Link
      href="https://wa.me/+201558300711"
      className="hover:text-accent transition-all duration-300 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <RiWhatsappLine />
    </Link>
  </div>;
};

export default Socials;
