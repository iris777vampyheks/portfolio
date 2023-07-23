import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navigation from "./layouts/Navigation";
import Facts from "./Facts";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Services from "./Services";
import Contact from "./Contact";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
