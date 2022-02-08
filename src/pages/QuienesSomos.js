import React from "react";
import "@styles/pages/QuienesSomos.scss";
import pastor from "@img/pastor-x1.png";
import iglesia from "@img/iglesia.jpg";
import iglesia2 from "@img/iglesia-2.jpg";
import { Link } from "react-router-dom";
import arrow from "@icons/arrow.png";

const QuienesSomos = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <img src={arrow} className="back"></img>
      </Link>
      <h1 className="page_title">Quienes Somos</h1>
      <div className="floating_text">
        Somos una radio cristiana evangélica de Honduras, fundada en 2022 por el
        pastor Jaime E. Orellana de la Iglesia Evangélica del Principe de Paz en
        Morazan, Yoro. <img src={pastor}></img>
        Con la misión de anunciar la palabra de Dios mas allá de cuatro paredes
        se comenzaron a transmitir los servicios en la iglesia a traves de las
        redes sociales Facebook y YouTube alcanzando a gente de todo Honduras y
        varios países del mundo.<img src={iglesia}></img> Luego nació la idea de
        llevar el mensaje via radio en linea y es asi como a traves de esta
        plataforma anunciamos las buenas nuevas de salvación a todo aquel que lo
        necesita.
        <img src={iglesia2}></img>
      </div>
    </React.Fragment>
  );
};

export default QuienesSomos;
