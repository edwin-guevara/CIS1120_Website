import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Discography from "./pages/Discography";
import Slideshow from "./components/Slideshow";
import NavMenu from "./components/NavMenu";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Slideshow />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/discography" element={<Discography />} />
      </Routes>
    </BrowserRouter>
  );
}
