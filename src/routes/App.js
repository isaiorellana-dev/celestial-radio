import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import "@styles/config/global.scss";
import Layout from "../containers/Layout";
import Contact from "../pages/Contact";
import Credo from "../pages/Credo";
import QuienesSomos from "../pages/QuienesSomos";
import "@styles/config/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/credo" element={<Credo />} />
          <Route path="/contacto" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
