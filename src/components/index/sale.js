import React from "react";
import img from "../../assets/images/tmp/m1.jpg";

function Sale() {
  return (
    <div className="block-container more-block mb-35px">
      <h3>Еще больше товаров!</h3>
      <h5>Самые низкие цены на товар</h5>
      <div className="relative-container">
        <a href="#" className="big-image">
          <img src={img} alt="" className="img-fluid" />
        </a>
        <div className="tc-white">
          <div className="tc-silver-title">Nuenhenen der Wotnche</div>
          <div className="tc-title">Легкие куртки и ветровки</div>
          <a href="#" className="more">
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sale;
