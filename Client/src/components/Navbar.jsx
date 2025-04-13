import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import star from "../assets/star.png";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center text-white py-2">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-14 md:w-16" />
            <span className="text-2xl md:text-3xl font-bold">Imagine</span>
          </div>
        </Link>
        <div>
          {user ? (
            <div className="flex items-center gap-1 md:gap-5">
              <button
                onClick={() => navigate("/restock")}
                className="flex gap-2 border-1 border-white rounded-full py-2 px-4 hover:scale-105 transition duration-400"
              >
                <img src={star} alt="" className="w-5" />
                <p className="text-sm font-semibold">Credits Left : {credit}</p>
              </button>
              <p className="hidden md:flex">
                Hey, <span className="font-semibold">{user.name}</span>
              </p>
              <div className="relative group">
                <div className="relative group">
                  <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2a5 5 0 100 10 5 5 0 000-10zm-7 18a7 7 0 0114 0H5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="absolute hidden group-hover:block -ml-12 md:-ml-9 py-2">
                    <button
                      onClick={logout}
                      className="bg-black p-2 px-5 md:px-8 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition duration-300"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-3 md:gap-8 font-semibold">
              <p
                onClick={() => navigate("/restock")}
                className="md:text-sm cursor-pointer p-2  rounded-full px-5 md:px-5 hover:bg-white hover:text-black transition duration-300"
              >
                Pricing
              </p>
              <button
                onClick={() => setShowLogin(true)}
                className="md:text-sm bg-black p-2 px-5 md:px-5 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
