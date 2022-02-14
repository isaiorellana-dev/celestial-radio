import React from "react";
import "@styles/containers/Layout.scss";
import "@styles/components/player.css";
import Player from "@components/Player";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Player /> */}
    </React.Fragment>
  );
};

export default Layout;
