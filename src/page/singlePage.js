import React from "react";

import SimpleSlider from "../components/single/simpleSlider";
import Info from "../components/single/info";
import Description from "../components/single/description";
import ProductSlider from "../components/single/productSlider";
import img from "../assets/images/light-basket.png";

function SinglePage() {
  return (
    <section>
      <div className="top-single-container mb-45px">
        <SimpleSlider />
        <Info />
        <button className="add_to_cart">
          <img src={img} alt="" /> добавить В корзину
        </button>
        <Description />
        <ProductSlider />
      </div>
    </section>
  );
}

export default SinglePage;
