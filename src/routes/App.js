import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import "@styles/config/global.scss"
import Layout from "../containers/Layout"
import Contact from "../pages/Contact"
import Credo from "../pages/Credo"
import QuienesSomos from "../pages/QuienesSomos"
// import Colabora from "../pages/Colabora";
import "@styles/config/App.scss"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/credo" element={<Credo />} />
          <Route path="/contacto" element={<Contact />} />
          {/* <Route path="/colaborar" element={<Colabora />} /> */}
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  )
}

export default App
