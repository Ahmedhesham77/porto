import { FaReact, FaBootstrap, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const servicesData = [
  {
    title: "Front-End Development",
    description:
      "Crafting modern and responsive web interfaces using React.js, Bootstrap, and Tailwind CSS. I focus on delivering seamless user experiences with visually appealing designs.",
    icons: [<FaReact key="first" />, <FaBootstrap key="second" />, <SiTailwindcss key="third" />],
  },
  {
    title: "Back-End Development",
    description:
      "Building robust and secure server-side applications with Node.js and Express.js, integrated with MongoDB for efficient data management and high performance.",
    icons: [<FaNodeJs key="first1" />, <SiExpress key="first2" />, <SiMongodb key="first3" />],
  },
  {
    title: "WordPress Development",
    description:
      "Developing custom WordPress websites, including theme design and plugin customization.",
    icons: [<FaWordpress key="first4" />],
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-900 text-white h-[100%] overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent">My Services</h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            I provide a range of specialized services in web application and website development using the latest technologies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 sm:p-5 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Icons */}
              <div className="flex gap-3 text-3xl sm:text-4xl text-accent mb-3 sm:mb-4">
                {service.icons.map((icon, iconIndex) => (
                  <div key={iconIndex}>{icon}</div>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base ">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;