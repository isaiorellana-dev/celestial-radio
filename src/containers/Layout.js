import React from "react";
import { Outlet } from "react-router-dom";
import "@styles/containers/Layout.scss";
import "@styles/components/player.css";
import Player from "@components/Player";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      {/* <Player /> */}
    </React.Fragment>
  );
};

export default Layout;
