import React, { useContext, useEffect, useState } from "react";
import user from "../assets/user.png";
import mail from "../assets/mail.png";
import lock from "../assets/lock.png";
import cross from "../assets/cross.png";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          toast.success("Logged In Succesfully")
          setShowLogin(false);
        }else{
          toast.error(data.message)
        }
      }
      else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          toast.success("Logged In Succesfully")
          setShowLogin(false);
        }else{
          toast.error(data.message)
        }
      }
    } catch (e) {
      console.log("Error", e);
      toast.error(e.message)
    }
  };

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 z-50
backdrop-blur-sm bg-black/30 flex justify-center items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <form
          onSubmit={onSubmitHandler}
          className="relative bg-white p-10 rounded-xl
text-slate-500"
        >
          <h1
            className=" text-center text-2xl text-neutral-700
font-medium"
          >
            {state}
          </h1>
          {state === "Login" ? (
            <p className="text-sm">Welcome back! Please sign in to continue</p>
          ) : (
            <p className="text-sm">Welcome ! Create an account to continue</p>
          )}

          {state !== "Login" && (
            <div
              className="border px-3 py-2 flex items-center gap-2
rounded-full mt-5"
            >
              <img src={user} alt="" width={20} />
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="outline-none text-sm"
                placeholder="Full Name"
                required
              />
            </div>
          )}
          <div
            className="border px-3 py-2 flex items-center gap-2
rounded-full mt-5"
          >
            <img src={mail} alt="" width={20} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="outline-none text-sm"
              placeholder="Email"
              required
            />
          </div>
          <div
            className="border px-3 py-2 flex items-center gap-2
rounded-full mt-5"
          >
            <img src={lock} alt="" width={20} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="outline-none text-sm"
              placeholder="Password"
              required
            />
          </div>

          <p
            className=" text-sm text-blue-600 my-4
cursor-pointer"
          >
            Forgot password ?
          </p>
          <button
            className="bg-blue-600 w-full text-white py-2
rounded-full cursor-pointer"
          >
            {state === "Login" ? "Login" : "Create Account"}
          </button>
          {state === "Login" ? (
            <p className="mt-5 text-center">
              Don't have an account ?
              <span
                onClick={() => setState("Sign Up")}
                className="text-blue-600 cursor-pointer px-2"
              >
                {" "}
                Sign up
              </span>
            </p>
          ) : (
            <p className="mt-5 text-center">
              Already have an account ?
              <span
                onClick={() => setState("Login")}
                className="text-blue-600 cursor-pointer px-2"
              >
                {" "}
                Login
              </span>
            </p>
          )}
          <img
            onClick={() => setShowLogin(false)}
            src={cross}
            alt="cross"
            className="absolute
top-5 right-5 cursor-pointer"
            width={20}
          />
        </form>
      </motion.div>
    </>
  );
};

export default Login;
