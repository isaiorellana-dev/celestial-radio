import React from "react";
import { Link } from "react-router-dom";
import arrow from "@icons/arrow.png";
const Contact = () => {
  return (
    <React.Fragment>
      <Link to="/">
        <img src={arrow} className="back"></img>
      </Link>
    </React.Fragment>
  );
};

export default Contact;
