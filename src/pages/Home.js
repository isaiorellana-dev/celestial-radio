import React from "react";
import logo from "@img/conexion celestial logo radio sin fondo.png";
import "@styles/pages/Home.scss";
import Nav from "@components/Nav";
import Verse from "@components/Verse";

const Home = () => {
  return (
    <React.Fragment>
      <img src={logo} />
      <Nav />
      <Verse />
    </React.Fragment>
  );
};

export default Home;
