import React, { useState, useRef, useEffect } from "react";

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

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    ctx.lineWidth = 1;
    ctx.lineCap = "round";

    class Particle {
      // ... (منطق Particle الخاص بك)
      constructor(effect) {
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
        this.hue = Math.floor(Math.random() * 360);
        this.speedX;
        this.speedY;
        this.speedModifier = Math.floor(Math.random() * 5 + 1);
        this.history = [{ x: this.x, y: this.y }];
        this.maxLength = Math.floor(Math.random() * 200 + 10);
        this.angle = 0.5;
        this.timer = this.maxLength * 2;
      }
      draw(context) {
        context.strokeStyle = "hsl(" + this.hue + ", 100%, 50%)";
        context.fillStyle = "hsl(" + this.hue + ", 100%, 50%)";
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 0; i < this.history.length; i++) {
          context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.stroke();
      }
      update() {
        this.timer--;
        if (this.timer >= 1) {
          let x = Math.floor(this.x / this.effect.cellSize);
          let y = Math.floor(this.y / this.effect.cellSize);
          let index = y * this.effect.cols + x;
          this.angle = this.effect.flowField[index];
          this.speedX = Math.cos(this.angle);
          this.speedY = Math.sin(this.angle);
          this.x += this.speedX * this.speedModifier;
          this.y += this.speedY * this.speedModifier;
          this.history.push({ x: this.x, y: this.y });
          if (this.history.length > this.maxLength) {
            this.history.shift();
          }
        } else if (this.history.length > 1) {
          this.history.shift();
        } else {
          this.reset();
        }
      }
      reset() {
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
        this.history = [{ x: this.x, y: this.y }];
        this.timer = this.maxLength * 2;
      }
    }

    class Effect {
      // ... (منطق Effect الخاص بك)
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.particles = [];
        this.debug = false;
        this.numberOfParticles = 1000;
        this.cellSize = 5;
        this.cols;
        this.rows;
        this.flowField = [];
        this.curve = 8;
        this.zoom = 0.25;
        this.init();

      }
      init() {
        this.rows = Math.floor(this.height / this.cellSize);
        this.cols = Math.floor(this.width / this.cellSize);
        this.flowField = [];
        for (let y = 0; y < this.rows; y++) {
          for (let x = 0; x < this.cols; x++) {
            let angle =
              (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
            this.flowField.push(angle);
          }
        }
        for (let i = 0; i < this.numberOfParticles; i++) {
          this.particles.push(new Particle(this));
        }
        this.particles.push(new Particle(this));
      }
      drawGrid(context) {
        context.save();
        context.strokeStyle = "red";
        for (let c = 0; c < this.cols; c++) {
          context.beginPath();
          context.moveTo(this.cellSize * c, 0);
          context.lineTo(this.cellSize * c, this.height);
          context.stroke();
        }
        for (let r = 0; r < this.cols; r++) {
          context.beginPath();
          context.moveTo(0, this.cellSize * r);
          context.lineTo(this.width, this.cellSize * r);
          context.stroke();
        }
        context.restore();
      }
      render(context) {
        if (this.debug) this.drawGrid(context);
        this.particles.forEach((particle) => {
          particle.draw(context);
          particle.update();
        });
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      effect.render(ctx);
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <>
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }}
    />
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)", // طبقة شفافة
        zIndex: 2, // يجب أن تكون أعلى من الكانفاس
      }}
    />
  </>;
};
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

    <CanvasBackground />


    {/* <Circles /> */}
    {/*avatar image */}
    {/* <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute -left-[200px] -bottom-[20px]"
    >
      <Avatar />
    </motion.div> */}
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 z-10">
      {/*text */}
      <div className="flex-1 hidden flex-col justify-center mt-8 xl:flex ">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 z-10">
          Captivating <span className="text-accent">Stories</span> birth magnifcent Design
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-20">
          2 years ago , i begin freelancing as a developer . Since then , i`ve done remote work for agencies, cousluted for startups,and collaborated on digital products for business and consumer use.
        </motion.p>
        {/*counters */}
        <motion.div
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-none mx-auto xl:mx-0 mb-8 z-10">
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
        <div className=" py-2 xl:py-6 flex flex-col gap-y-6 xl:gap-y-4 items-center xl:items-start z-10">
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
