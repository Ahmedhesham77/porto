import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// Data
const workSlides = [
  {
    title: "Ugglebo Grill",
    path: "/ugglebogrill.png",
    link: "https://ugglebogrill.com/en/",
  },
  {
    title: "Purple Admin Dashboard",
    path: "/demo.bootstrapdash.com_purple-.png",
    link: "https://demo.bootstrapdash.com/purple-admin-free/",
  },
  {
    title: "LiveKleenly",
    path: "/livekleenly.png",
    link: "https://livekleenly.com/",
  },
  {
    title: "Corona Dashboard",
    path: "/demo.bootstrapdash.com_corona.png",
    link: "https://demo.bootstrapdash.com/corona-free/jquery/template/index.html",
  },
  {
    title: "Stensatra Pizza",
    path: "/xn--stenstrapizza-ffb.com.png",
    link: "https://xn--stenstrapizza-ffb.com/",
  },
  {
    title: "Majestic Dashboard",
    path: "/demo.bootstrapdash.com_majesti.png",
    link: "https://demo.bootstrapdash.com/majestic-free/template/index.html",
  },
  {
    title: "Real State Project",
    path: "/real-state-phi-hazel.vercel.png",
    link: "https://real-state-phi-hazel.vercel.app/?vercelToolbarCode=fa0s3FNqyLqKMEh",
  },
];

const WorkSlider = () => {
  return (
    <div className="py-10">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="h-auto"
        breakpoints={{
          640: { slidesPerView: 1 }, // شاشات صغيرة: صورة واحدة
          768: { slidesPerView: 2 }, // شاشات متوسطة: صورتان
          1024: { slidesPerView: 2 }, // شاشات كبيرة: 3 صور
        }}
      >
        {workSlides.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="relative group cursor-pointer">
              {/* Image */}
              <a href={work.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={work.path}
                  alt={work.title}
                  width={500}
                  height={300}
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105 lg:w-[450px] xl:w-[450px]"
                />
              </a>
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {work.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
