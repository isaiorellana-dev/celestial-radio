import React from "react";
import facebook from "@icons/facebook.png";
import whatsapp from "@icons/whatsapp.png";
import youtube from "@icons/youtube.png";
import "@styles/components/SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <img src={facebook}></img>
      <img src={whatsapp}></img>
      <img src={youtube}></img>
    </div>
  );
};

export default SocialMedia;
