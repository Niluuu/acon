import React from "react";
import img from "../../assets/images/tmp/b1.jpg";

function Banner() {
  return (
    <div class="top-category-container">
      <img src={img} alt="" />
      <div class="tcc-abs">
        <div class="tcc-title">Siksils</div>
      </div>
    </div>
  );
}

export default Banner;
