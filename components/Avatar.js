//next image
import Image from "next/image"

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatar.png"}
        width={300}
        height={200}
        className="translate-z-0 w-full h-full"
        alt="" />
    </div>
  );
};

export default Avatar;
