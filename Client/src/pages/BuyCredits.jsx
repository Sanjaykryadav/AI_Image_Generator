import React, { useContext } from "react";
import { plans } from "../assets/assets";
import logo from "../assets/logo.png";
import {AppContext} from "../context/AppContext";
import { motion } from "motion/react";

const BuyCredits = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <motion.div className="min-h-[80vh] text-center text-white flex flex-col justify-center items-center space-y-6 mt-12"
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{  duration: 1 }}
      viewport={{ once: true }}

      >
        <motion.p className="border border-white rounded-full w-28 p-1.5 hover:scale-105 duration-200 ease-in-out backdrop-blur-3xl"
         initial={{ opacity: 0, y: -40 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2, duration: 0.8 }}
        >
          Our Plans
        </motion.p>
        <h1 className="text-3xl font-semibold">Choose the plan</h1>
        <div className="flex flex-col md:flex-row gap-8 py-8 px-14 md:px-20 w-full">
          {plans.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center hover:scale-105 duration-200 ease-in-out bg-black/35 py-10 px-10 space-y-4 border-3 border-white rounded-xl md:w-1/3"
            >
              <img src={logo} alt="item logo" width={70} />
              <p className="text-xl">{item.id}</p>
              <p className="text-sm font-medium">{item.desc}</p>
              <p>
                <span className="text-3xl font-semibold">${item.price}</span> /{" "}
                {item.credits} <span className="text-sm px-1">Credits</span>
              </p>
              <button className="bg-black/50 border border-white mt-4 p-2 px-6 font-semibold rounded-lg w-full hover:bg-white hover:text-black transition duration-300">
                {user ? "Purchase" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BuyCredits;
