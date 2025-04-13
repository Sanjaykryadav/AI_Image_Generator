import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Result from "./pages/Result";
import BuyCredits from "./pages/BuyCredits";
import NotFound from "./pages/NotFound";
import background from "./assets/background.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <>
      <div
        className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <ToastContainer position="bottom-right"/>
        <Navbar />
        {showLogin && <Login />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/response" element={<Result />} />
          <Route path="/restock" element={<BuyCredits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
