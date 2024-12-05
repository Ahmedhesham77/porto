import WorkSlider from "../../components/WorkSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles";

//framer motion
import { motion } from 'framer-motion'
import { fadeIn } from "../../variants";

const Work = () => {
  return (<div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/*text */}
        <div className="text-center flex xl:w-[30vw] flex-col xl:text-left xl:mb-4 mb-0 ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" xl:h2 xl:mt-8 lg:h2 md:text-[25px] sm:h4 xs:h3 xs:mt-4"
          >
            My Work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-[12px] mb-4 max-w-[400px] mx-auto lg:mx-0 xl:text-[18px] lg:text-[18px] xl:block sm:block md:hidden"
          >
            This is a collection of projects that I built, some of which I used React, Node.js and Bootstrap in the front-end, Node.js in the back-end, and some of which I used WordPress with some custom programming.
          </motion.p>

        </div>
        {/*slider */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full  xl:max-w-[65%]"
        >
          <WorkSlider />
        </motion.div>
      </div>

    </div>
    <Bulb />
  </div>);
};

export default Work;
