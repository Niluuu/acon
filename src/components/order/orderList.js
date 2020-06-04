import React from "react";
import img from "../../assets/images/tmp/c1.jpg";

function OrderList({ product }) {
  return (
    <div class="zakaz-right-list">
      {Array.from(Array(product).keys()).map((product) => {
        return (
          <div key={Math.random()} class="single-zrl mb-35px">
            <div class="row">
              <div class="col-sm-5 col-5">
                <div class="szrl-image">
                  <img class="img-fluid " src={img} alt="" />
                </div>
              </div>
              <div class="col-sm-7 col-7">
                <div class="szrl-price">1 790,00 руб.</div>
                <div class="szrl-brand">A.Kjrbede</div>
                <div class="szrl-info">
                  Длинный лонгслив с сетчатой тделкой ASOS DESIG…
                </div>
                <div class="szrl-bottom">
                  <div class="szrl-color">Черный</div>
                  <div class="szrl-color">XL</div>
                </div>
                <div class="szrl-number">
                  Кол-во: <span>1</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
