import React from "react";
import logo from "@img/logo.png";
import "@styles/pages/Home.scss";
import Nav from "@components/Nav";
import Verse from "@components/Verse";
import SocialMedia from "@components/SocialMedia";
import Loader from "@components/Loader";

const Home = () => {
  // const [loading, setLoading] = React.useState(true);

  // // window.addEventListener("load", function (event) {
  // //   console.log("'Todos los recursos terminaron de cargar!");
  // //   setLoading(false);
  // // });
  // React.useEffect(() => {
  //   window.addEventListener("load", function (event) {
  //     console.log("'Todos los recursos terminaron de cargar!");
  //     setLoading(false);
  //   });
  // }, [loading]);
  // console.log(loading);
  return (
    <React.Fragment>
      {/* {loading && <Loader />} */}
      <img className="logo" src={logo} />
      <Nav />
      <Verse />
      <SocialMedia />
    </React.Fragment>
  );
};

export default Home;
