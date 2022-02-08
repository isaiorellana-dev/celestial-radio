import React from "react";
import { Link } from "react-router-dom";
import arrow from "@icons/arrow.png";
import "@styles/pages/Contact.scss";
import fb from "@img/fb-feed.jpg";
import yt from "@img/yt-feed.jpg";

const Contact = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <img src={arrow} className="back"></img>
      </Link>
      <h1>Contacto</h1>
      <div className="contact__content">
        <p>
          Si quieres apoyar este proyecto puedes enviarnos un mensaje directo a{" "}
          <a href="https://wa.me/50498474931" target="_blank">
            WhatsApp.
          </a>
        </p>
        <div className="contact__content--container">
          <div className="contact__content--facebook">
            Sigue nuestra pagina de{" "}
            <a
              href="https://www.facebook.com/profile.php?id=100072200978943"
              target="_blank"
            >
              Facebook.
            </a>
            <img src={fb}></img>
          </div>
          <div className="contact__content--youtube">
            Suscribete a nuestro canal de{" "}
            <a
              href="https://www.youtube.com/channel/UCqp9JFdI0ZntwVnLcTs-4HQ"
              target="_blank"
            >
              YouTube.
            </a>
            <img src={yt}></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
