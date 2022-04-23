import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Home } from "./Home";
import reportWebVitals from "./reportWebVitals";
import { GuestAccomodations } from "./pages/GuestAccomodations";
import { Details } from "./pages/Details";
import { Header } from "./components/Header";
import { Footer } from "./components/footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="guest-accomodations" element={<GuestAccomodations />} />
        <Route path="details" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
