import React from "react";
import img from "../../assets/images/tmp/b1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Banner() {
  return (
    <div className="top-category-container">
      <LazyLoadImage  src={img} alt="" />
      <div className="tcc-abs">
        <div className="tcc-title">Siksils</div>
      </div>
    </div>
  );
}

export default Banner;
