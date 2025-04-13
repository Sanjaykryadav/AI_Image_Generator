import React from "react";
import { testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <>
      <motion.div className="text-white py-10"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl py-4">Customer Testimonials</h1>
          <p>What Our Users Are Saying</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className="bg-white/15 flex flex-col items-center gap-2 border border-white rounded-xl w-80 py-10 hover:scale-110 duration-250 ease-in-out px-2"
            >
              <img src={item.image} alt="" className="rounded-full w-20" />
              <h2>{item.name}</h2>
              <p>{item.role}</p>
              <p>{item.stars}</p>
              <p className="text-center mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Testimonials;
