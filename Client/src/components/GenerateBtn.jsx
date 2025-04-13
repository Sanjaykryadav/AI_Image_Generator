import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import {AppContext} from "../context/AppContext";

const GenerateBtn = () => {
  const { user, setShowLogin, showLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/response");
    } else {
      setShowLogin(!showLogin);
    }
  };
  return (
    <>
      <motion.div
        className="py-24 text-white flex flex-col items-center gap-4 md:gap-6"
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-4xl">See the magic. Try now</h1>
        <button
          onClick={onClickHandler}
          className="bg-black/40 p-3 px-6 font-semibold rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          Generate Images ✨
        </button>
      </motion.div>
    </>
  );
};

export default GenerateBtn;
