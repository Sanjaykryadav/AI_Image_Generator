import React, { useContext, useState } from "react";
import Shadow from "../assets/shadow.jpg";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const Result = () => {
  const [image, setImage] = useState(Shadow);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const {generateImg} = useContext(AppContext)

  const onsubmitHandler = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if(input){
        const image = await generateImg(input);
        if(image){
          setIsImageLoaded(true);
          setImage(image);
        }
      }
      setLoading(false);
      toast.success("Image Generated :)")
    } catch (error) {
      toast.error(error.message)
    }

  }
  return (
    <>
      <motion.form onSubmit={onsubmitHandler} 
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex flex-col gap-10 h-screen md:min-h-[90vh] justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative flex flex-row items-center justify-center w-4/5 md:w-[35%]">
              <img src={image} alt="Img hai re" className="rounded w-full" />
              <span
                className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
                  loading ? " w-full transition-all duration-[10s]" : "w-0"
                }`}
              ></span>
            </div>
            <p className={`text-white ${!loading ? "hidden" : ""}`}>
              Loading.....
            </p>
          </div>
          {!isImageLoaded && (
            <div className="flex flex-col md:flex-row w-3/5 rounded-full bg-transparent md:bg-white justify-center items-center">
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Describe What You Want To Generate....."
                className="flex-1 bg-white text-gray-700 outline-none rounded-full px-8 py-2.5  w-[80vw]"
              />
              <button
                type="submit"
                className="bg-black/60 text-white font-lg px-4 py-3 md:py-2.5 rounded-full cursor-pointer my-8 md:my-0 "
              >
                Generate ✨
              </button>
            </div>
          )}
          {isImageLoaded && (
            <div className="flex gap-4 text-white">
              <button
                onClick={() => setIsImageLoaded(false)}
                className="border-1 border-white backdrop-blur-2xl p-3 px-6 font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer"
              >
                Generate Another
              </button>
              <a
                href={image}
                className="bg-black/60 p-3 px-12 font-semibold rounded-full hover:bg-white hover:text-black transition duration-300 cursor-pointer"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </motion.form>
    </>
  );
};

export default Result;
