import React from "react";
import "@styles/components/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__div">
        <div>
          <div className="formas">
            <div className="trapecio1" />
          </div>
          <div className="formas">
            <div className="semicirculo1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
