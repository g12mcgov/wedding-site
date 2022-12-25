import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Home } from "./Home";
import reportWebVitals from "./reportWebVitals";
import { GuestAccomodations } from "./pages/GuestAccomodations";
import { Details } from "./pages/Details";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { Photos } from "./pages/Photos";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="guest-accomodations" element={<GuestAccomodations />} />
          <Route path="details" element={<Details />} />
          <Route path="photos" element={<Photos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);

reportWebVitals();
