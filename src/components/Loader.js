import React from "react";
import "@styles/components/Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__div">
        <div class="formas">
          <div class="trapecio1"></div>
        </div>
        <div class="formas">
          <div class="semicirculo1"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
