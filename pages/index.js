//next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"

//framer motion

import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className=" w-full h-[100%] bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto lg:flex-row lg:justify-between lg:pt-20 xs:justify-evenly">
          <div className="mt-[2.5rem] ">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" xs:text-[22px] sm:text-[26px] md:text-[28px] lg:text-4xl"
            >
              Transforming Ideas <br /> Into <span className="text-accent">Digital Realty</span>
            </motion.h1>

            {/* subtitle */}
            <motion.p variants={fadeIn("down", 0.3)} initial="hidden" animate="show" exit="hidden" className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-16  sm:text-[14px]  md:text-[18px] lg:text-[20px] lg:mx-0 xs:text-[12px] xs:mb-0 pt-2  ">
              We provide full-stack web development solutions using the MERN Stack, combining high performance and innovative design to transform your ideas into modern, standout web applications.
            </motion.p>
          </div>

          {/* Btn */}
          <div className="flex justify-center xl:hidden relative md:x-[100%] lg:items-center z-50 ">
            <ProjectsBtn />
          </div>
          <motion.div variants={fadeIn("down", 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden ">
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none  xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute
      mix-blend-lighten
      translate-z-0">
          {/*particles */}
          <ParticlesContainer />
          {/*avatar img */}
          <motion.div
            variants={fadeIn("up", 0.5)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: "easeInOut" }}

            className="w-full h-full max-w-[587px] max-h-[528px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">

          </motion.div>
        </div>
      </div>

    </div>)

};

export default Home;
