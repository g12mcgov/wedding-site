import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { HomePage } from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import { GuestAccomodationsPage } from "./pages/GuestAccomodationsPage";
import { DetailsPage } from "./pages/DetailsPage";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import { PhotosPage } from "./pages/PhotosPage";
import { GalleryPage } from "./pages/GalleryPage";
import { RegistryPage } from "./pages/RegistryPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/guest-accomodations"
            element={<GuestAccomodationsPage />}
          />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/photos/gallery/:name" element={<GalleryPage />} />
          <Route path="/registry" element={<RegistryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);

reportWebVitals();
