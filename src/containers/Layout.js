import React from "react";
import "@styles/containers/Layout.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default Layout;
