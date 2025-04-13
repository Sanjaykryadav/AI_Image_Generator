import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import { motion } from "motion/react";
import {AppContext} from "../context/AppContext";

const Header = () => {
  const img = [img1, img2, img3, img4, img5, img6];

  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () => {
    if (user) {
      navigate("/response");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <>
      <motion.div
        className="flex flex-col justify-center items-center text-white space-y-8 md:space-y-5 mt-12 py-8 md:py-0"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="backdrop-blur-xl p-2 px-4 md:px-5 border-1 border-white rounded-full text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>Best text to image generator ⭐</p>
        </motion.div>
        <div>
          <h1 className="text-4xl md:text-5xl text-center ">
            Convert text to <br />{" "}
            <span className="font-semibold text-5xl md:text-6xl">image</span>,
            in seconds.
          </h1>
        </div>
        <div className="flex flex-col text-center text-lg md:text-xl max-w-[80%] md:max-w-[70%]">
          <p>
            Unleash your inner creativity with artificial intelligence. Convert
            your imagination into art in moments - just type, and watch art
            mobalise
          </p>
        </div>
        <div>
          <button
            onClick={onClickHandler}
            className="bg-black/60 p-3 px-6 font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Generate Images ✨
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 backdrop-blur-2xl p-1">
          {img.map((img, i) => (
            <img
              src={img}
              alt="img"
              key={i}
              width={110}
              className="hover:scale-120 transition duration-250 rounded-sm cursor-grab"
            />
          ))}
        </div>
        <span className="text-sm">Generated By Imagine</span>
      </motion.div>
    </>
  );
};

export default Header;
