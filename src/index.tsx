import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

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

const { useEffect } = React;

const TRACKING_ID = "G-XLYHJXV9DN";
ReactGA.initialize(TRACKING_ID);

const App = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    const page = location.pathname + location.search;
    ReactGA.send({
      hitType: "pageview",
      page: page,
    });
  }, [location]);

  return (
    <>
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
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);

reportWebVitals();
