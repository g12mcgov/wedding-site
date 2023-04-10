import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";

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
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Megan & Grant's Wedding" />
        <meta
          property="og:title"
          content="Homepage | Megan & Grant's Wedding"
        />
        <meta
          property="og:description"
          content="The site for our 2023 wedding in Cleveland, OH."
        />
        <meta
          property="og:image"
          content="https://www.meganandgrant.love/images/galleries/cultural_gardens/6.webp"
        />
        <meta
          property="og:url"
          content="https://www.meganandgrant.love/images/galleries/cultural_gardens/6.webp"
        />
        <title>Megan & Grant's Wedding</title>
        <link rel="canonical" href="https://www.meganandgrant.love/" />
      </Helmet>
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
    </div>
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
