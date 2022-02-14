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

      <ul className="credos">
        <li>
          1. Creemos que la Santa Biblia es de inspiración Divina y que es la
          única regla infalible de fe y conducta (Jeremías 15:16; Proverbios
          30:5-6; Juan 5:39; 2Timoteo 3:15-17; Heb. 4:12; 2Pedro 1:20-21).
        </li>

        <li>
          2. Creemos en la Santísima Trinidad, Dios Padre, Dios Hijo y Dios
          Espíritu Santo Mat. 3:16-17; 28:19; 2 Corintios 13:14.
        </li>

        <li>
          3. Creemos que el Espíritu Santo es una persona igual que el Padre y
          el Hijo (Gen.1:1-2;1:26; 3:22; 11:7; Deut. 6:4; Isaías 6:8; 63:9-14;
          Mateo 3: 16-17; 27:46; 28:19 2 Cor. 13:14)
        </li>

        <li>
          4. Creemos en el nacimiento virginal de nuestro Señor Jesucristo
          (Lucas 1:26-35; Mateo 1:18-24; Galatas 4:4).
        </li>

        <li>
          5. Creemos en la Deidad de nuestro Señor Jesucristo (Salmo 45:2;
          Pro.8:22-31; Isaías 9:6; Jeremías 23:5; Miqueas 5:2; Mateo11:27;
          16:16; Juan 1:1-3; Romanos 9:5; Col. 2:9; Fil. 2:5-11. 1 Timoteo
          3:16).
        </li>

        <li>
          6. Creemos en la obra de Cristo consumada en la Cruz del Calvario a
          favor del pecador, en su Resurrección, Ascensión, Intercesión y
          Segunda Venida en Gloria (Isaías 53; Mateo 28; Marcos 16; Lucas 24;
          In. 1:29; 20:1-.21 :1-25; Hech. 1 :10-11; Romanos 8:34-36; 1 Tes.
          4:13-1 7; Heb. 9:23-28; Apoc.1:7)
        </li>

        <li>
          7. Creemos que todos los seres humanos son pecadores y que la única
          forma de volver a tener comunión con Dios es trabes del
          arrepentimiento verdadero y la fe personal en Cristo y su muerte
          expiatoria en la cruz a nuestro favor. (Mat. 4:17; Marc 1 :15; Lucas
          13:3-5; Rom. 2: 1-8; 3:23; 10: 8-10; Efesios 2:8-9).
        </li>

        <li>
          8. Creemos en la Justificación por la fe en Cristo Jesús (Rom. 3:24;
          5:1; 16-18; Galatas 2:16; 3:8; 3:24-26; Tito 3:7).
        </li>

        <li>
          9. Creemos en el nuevo nacimiento obrado por el milagro de la gracia
          de Dios en el corazón del que cree en Jesucristo (Ezq. 36:25-27; Jn.
          1:12-13; 14-15; 3:3-5; 2 Corintios 5: 17; Santiago 1:18; 1Pedro 1:3;
          23; 1Juan. 5:1).
        </li>

        <li>
          10. Creemos en la Santificación como una obra de la gracia de Dios en
          el creyente (2Corintios. 7:1; 1Tes. 4:3; 5:23; 2Timoteo 2:19-22).
        </li>

        <li>
          11. Creemos que la Santidad debe ser la insignia del cristiano, tanto
          interna como externa (Lucas 1:74-75; 1Tes. 3:13; Heb. 12:14; 1Pedro
          1:15-16).
        </li>

        <li>
          12. Creemos en el Bautismo en agua por inmersión tal como lo enseña la
          santa Biblia y que se debe practicar solo a los que hayan mostrado
          frutos dignos de arrepentimiento (Mateo 3:6-9; 28:19-20; Marcos
          16:15-16 Hechos 8:36-39; Romanos 6:1-14).
        </li>

        <li>
          13. Creemos que el pueblo de Dios debe practicar la Santa Cena como
          recordatorio del Sacrificio Expiatorio de Cristo, y del triunfo en su
          segunda venida (Mateo 26:26-29; Lucas 22:14-20; Hechos 2:42;
          1Corintios 11:23-32).
        </li>

        <li>
          14. Creemos en el Bautismo del Espíritu Santo subsiguiente a la
          limpieza del creyente, el cual da poder para vencer y servir mejor al
          Señor (Lucas 24:49; Hechos 1:8; Romanos 8:11,15, 37, 39).
        </li>
        <li>
          Credo completo este{" "}
          <a
            target="_blank"
            href="http://icpphn.blogspot.com/p/credo-doctrinal.html"
          >
            Link
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Credo;
