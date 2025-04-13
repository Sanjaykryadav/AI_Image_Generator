import React from "react";
import logo from "../assets/logo.png";
import instagram from "../assets/instagram.png";
import pintrest from "../assets/pintrest.png";
import snapchat from "../assets/snapchat.png";
import facebook from "../assets/facebook.png";

const Footer = () => {
  const img = [instagram,snapchat,pintrest,facebook]
  return (
    <>
      <div className="flex items-center justify-between gap-4 py-3 mt-20 border-t border-white text-white backdrop:blur-3xl">
        <div className="flex items-center justify-between font-semibold gap-2">
          <img src={logo} alt="logo" width={50} /> <span>Imagine</span>
        </div>
        <p className="hidden md:flex flex-1 pl-4 text-sm ">
          Copyright @S.K.Yadav | All right reserved.
        </p>
        <div className="flex gap-3">
          {
            img.map((image,index)=> (
              <div key={index}>
                <img src={image} alt="" width={50} className="px-2 hover:scale-120 duration-200 ease-in-out cursor-pointer"  />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Footer;
