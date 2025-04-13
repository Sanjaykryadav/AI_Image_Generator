import React from "react";
import cat from "../assets/cat.jpg";
import { motion } from "motion/react";

const Description = () => {
  return (
    <>
      <motion.div className="text-white py-10"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl py-4">Create AI Images</h1>
          <p>Turn Your Imagination Into Visuals</p>
        </div>
        <div className=" flex flex-col md:flex-row items-center mt-10 px-10 md:px-20">
          <div>
            <img src={cat} alt="img" className="rounded-lg w-screen shadow-2xl" />
          </div>
          <div className="md:mx-8">
            <h2 className="text-lg py-4">Introducing the AI-Powered Text to Image Generator</h2>
            <p className="md:w-4/5">
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly. Simply type an text prompt, and our cutting edge AI will generate
              high quality images in seconds.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Description;
