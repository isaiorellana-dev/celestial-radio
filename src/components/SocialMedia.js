import React from "react";
import facebook from "@icons/facebook.png";
import whatsapp from "@icons/whatsapp.png";
import youtube from "@icons/youtube.png";
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
    </div>
  );
};

export default SocialMedia;
