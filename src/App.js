import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import Home from "./pages/home/Home";
import Navigation from "./layouts/Navigation";
import Facts from "./Facts";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./layouts/Footer";
import ScrollToTopButton from "./ScrollToTop";
export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/ScrollToTopp" element={<ScrollToTopButton />} />


      </Routes>
    </>
  );
};
export default App;