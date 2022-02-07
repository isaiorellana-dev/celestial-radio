import React from "react";
import "@styles/pages/Credo.scss";
import { Link } from "react-router-dom";
import arrow from "@icons/arrow.png";
const Credo = () => {
  return (
    <div className="credo">
      <Link to="/">
        <img src={arrow} className="back"></img>
      </Link>
      <h1 className="page_title">Credo</h1>
      <p>
        Creemos que la Santa Biblia es de inspiración Divina y que es la única
        regla infalible de fe y conducta, creemos en la Santísima Trinidad, Dios
        Padre, Dios Hijo y Dios Espíritu Santo, creemos que el Espíritu Santo es
        una persona igual que el Padre y el Hijo, creemos en el nacimiento
        virginal de nuestro Señor Jesucristo, creemos que todos los seres
        humanos son pecadores y que la única forma de volver a tener comunión
        con Dios es trabes del arrepentimiento verdadero y la fe personal en
        Cristo y su muerte expiatoria en la cruz a nuestro favor. Creemos en el
        nuevo nacimiento obrado por el milagro de la gracia de Dios en el
        corazón del que cree en Jesucristo.
      </p>
    </div>
  );
};

export default Credo;
