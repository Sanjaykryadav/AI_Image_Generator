import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <>
      <motion.div className="flex flex-col justify-center items-center py-24 gap-3 text-white"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-medium">How it works</h1>
        <p className="text-lg md:text-2xl">Transform Words Into Beautiful Art</p>
        <div className="flex flex-col gap-5 mt-10 md:mt-16">
          {stepsData.map((item, index) => (
            <div key={index} className="flex items-center gap-6 p-2 md:p-3 backdrop-blur-xl border-1 border-white rounded-lg hover:scale-105 transition duration-200 ease-in-out">
              <img src={item.icon} alt="img" width={50} className="p-2 bg-white rounded-lg"/>
              <div>
                <div className="text-lg">{item.title}</div>
                <div className="text-sm">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Steps;
