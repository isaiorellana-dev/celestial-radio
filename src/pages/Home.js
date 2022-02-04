import React from "react";
import logo from "@img/conexion celestial logo radio sin fondo.png";
import "@styles/pages/Home.scss";
import Nav from "@components/Nav";
import Verse from "@components/Verse";
import SocialMedia from "@components/SocialMedia";

const Home = () => {
  return (
    <React.Fragment>
      <img className="logo" src={logo} />
      <Nav />
      <Verse />
      <SocialMedia />
    </React.Fragment>
  );
};

export default Home;
