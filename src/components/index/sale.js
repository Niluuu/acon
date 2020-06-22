import React from "react";
import img from "../../assets/images/tmp/m1.jpg";
import { Link } from "react-router-dom";

function Sale() {
  return (
    <div className="block-container more-block mb-35px">
      <h3>Еще больше товаров!</h3>
      <h5>Самые низкие цены на товар</h5>
      <div className="relative-container">
        <Link to="/category" className="big-image">
          <img src={img} alt="" className="img-fluid" />
        </Link>
        <div className="tc-white">
          <div className="tc-silver-title">Nuenhenen der Wotnche</div>
          <div className="tc-title">Легкие куртки и ветровки</div>
          <Link to="/category" className="more">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sale;
