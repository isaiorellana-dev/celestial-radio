import React from "react";
import facebook from "@icons/facebook.png";
import whatsapp from "@icons/whatsapp.png";
import youtube from "@icons/youtube.png";
import playStore from "@icons/google-play.png";
import appStore from "@icons/app-store.png";
import "@styles/components/SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <a
        href="https://www.facebook.com/profile.php?id=100072200978943"
        target="_blank"
      >
        <img src={facebook}></img>
      </a>
      <a
        href="https://www.youtube.com/channel/UCqp9JFdI0ZntwVnLcTs-4HQ"
        target="_blank"
      >
        <img src={youtube}></img>
      </a>
      <a href="https://wa.me/50498474931" target="_blank">
        <img src={whatsapp}></img>
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=conexion.celestialradio2&hl=es_419&gl=HN"
        target="_blank"
      >
        <img src={playStore}></img>
      </a>
      <a
        href="https://apps.apple.com/us/app/mytuner-radio-live-stations/id520502858"
        target="_blank"
      >
        <img src={appStore}></img>
      </a>
    </div>
  );
};

export default SocialMedia;
