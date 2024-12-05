import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaNodeJs,
  FaBootstrap,


} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiThreedotjs,
  SiArduino,
  SiRaspberrypi,

} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Front-End Development',
        icons: [
          <FaHtml5 key="first1" />,
          <FaCss3 key="first2" />,
          <FaJs key="first3" />,
          <FaReact key="first4" />,
          <SiNextdotjs key="first5" />,
          <SiFramer key="first6" />,
          <FaWordpress key="first7" />,
          <FaBootstrap key="first8" />,
          <SiTailwindcss key="first9" />,
          <SiThreedotjs key="first0" />

        ],
      },
      {
        title: 'Back-End Development',
        icons: [<FaNodeJs key="first11" />, <SiMongodb key="first22" />,
        <SiExpress key="first33" />,],
      },
      {
        title: "IOT",
        icons: [<SiArduino key="first111" />, <SiRaspberrypi key="first222" />]
      }
    ],
  },

  {
    title: 'experience',
    info: [
      {
        title: 'Front-End Dev - Freelancer',
        stage: '2022 - To this day',
      },
      {
        title: 'Back-End Dev - Freelancer',
        stage: '2023 -To this day ',
      },
      {
        title: 'IOT',
        stage: '2024',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Certified HTML&CSS - meta 2024',
        pdf: '/pdfs/HTMl&CSS.pdf',
      },
      {
        title: 'Certified Version Controll - meta 2024',
        stage: '2024',
        pdf: '/pdfs/VersionControll.pdf',
      },
      {
        title: 'Certified Programing with JS - meta 2024',
        pdf: '/pdfs/JS.pdf',
      },
      {
        title: 'Certified React.js - meta 2024',
        pdf: '/pdfs/React.pdf',
      },
    ],
  },
];
// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles"

//motion framer
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

//counter
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index)
  return <div className="h-full bg-primary/30 py-12 text-center xl:text-left">
    <Circles />
    {/*avatar image */}
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute -left-[200px] -bottom-[20px]"
    >
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/*text */}
      <div className="flex-1 hidden flex-col justify-center mt-8 xl:flex ">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2">
          Captivating <span className="text-accent">Stories</span> birth magnifcent Design
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
          2 years ago , i begin freelancing as a developer . Since then , i`ve done remote work for agencies, cousluted for startups,and collaborated on digital products for business and consumer use.
        </motion.p>
        {/*counters */}
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/*experience */}
            <div className="realtive flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={5} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]"> Years of experience</div>
            </div>

            <div className="realtive flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finshed Projects</div>
            </div>

            <div className="realtive flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
      {/*info */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">

        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mt-6  ">
          {aboutData.map((item, itemIndex) => {
            return <div
              key={itemIndex}
              className={`cursor-pointer capitalize xl:text-lg relative z-50 
              ${index === itemIndex ? "text-accent after:w-[100%] after:bg-accent" : ""}
              after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1
              after:left-0 after:transition-all after:duration-300 hover:text-accent hover:after:w-[100%]
            `}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          })}

        </div>
        <div className=" py-2 xl:py-6 flex flex-col gap-y-6 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/*title */}
                <div>{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div className="xs:flex gap-x-2 flex ">

                  {/* PDF Link */}
                  {item.pdf && (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline ml-2"
                    >
                      View PDF
                    </a>
                  )}
                  {/*icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div key={itemIndex} className="text-2xl text-white ">{icon}</div>
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

    </div>
  </div>;
};

export default About;
