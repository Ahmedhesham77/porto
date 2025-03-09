import React, { useState, useRef, useEffect } from "react";
import WorkSlider from "../../components/WorkSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles";

//framer motion
import { motion } from 'framer-motion'
import { fadeIn } from "../../variants";

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
      constructor(effect) {
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
        this.hue = Math.floor(Math.random() * 360);
        this.speedX = Math.random() * 5 - 2.5;
        this.speedY = Math.random() * 5 - 2.5;
        this.history = [{ x: this.x, y: this.y }];
        this.maxLength = Math.floor(Math.random() * 100 + 10);
        this.angle = Math.random() * 5 - 2.5;
      }
      draw(context) {
        context.strokeStyle = "hsl(" + this.hue + ", 100%, 50%)";
        context.fillRect(this.x, this.y, 1, 1);
        context.fillStyle = "hsl(" + this.hue + ", 100%, 50%)";
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 0; i < this.history.length; i++) {
          context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.stroke();
      }
      update() {
        this.angle += 0.01;
        this.x += this.speedX + Math.sin(this.angle);
        this.y += this.speedY + Math.cos(this.angle);
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxLength) {
          this.history.shift();
        }
      }
    }

    class Effect {
      constructor(width, height) {
        this.width = width;
        this.height = height;
        this.particles = [];
        this.numberOfParticles = 1000;
        this.init();
      }
      init() {
        for (let i = 0; i < this.numberOfParticles; i++) {
          this.particles.push(new Particle(this));
        }
        this.particles.push(new Particle(this));
      }
      render(context) {
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

  return (
    <>
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
          backgroundColor: "rgba(0, 0, 0, 0.4)", // طبقة شفافة
          zIndex: 2, // يجب أن تكون أعلى من الكانفاس
        }}
      />
    </>
  );
};
const Work = () => {
  return (<div className="h-full bg-primary/30 py-36 flex items-center">
    <CanvasBackground />

    <Circles />
    <div className="container mx-auto z-10">
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
