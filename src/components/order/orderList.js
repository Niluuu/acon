import React from "react";
import img from "../../assets/images/tmp/c1.jpg";

function OrderList({ product }) {
  return (
    <div className="zakaz-right-list">
      {Array.from(Array(product).keys()).map((product) => {
        return (
          <div key={Math.random()} className="single-zrl mb-35px">
            <div className="row">
              <div className="col-sm-5 col-5">
                <div className="szrl-image">
                  <img className="img-fluid " src={img} alt="" />
                </div>
              </div>
              <div className="col-sm-7 col-7">
                <div className="szrl-price">1 790,00 руб.</div>
                <div className="szrl-brand">A.Kjrbede</div>
                <div className="szrl-info">
                  Длинный лонгслив с сетчатой тделкой ASOS DESIG…
                </div>
                <div className="szrl-bottom">
                  <div className="szrl-color">Черный</div>
                  <div className="szrl-color">XL</div>
                </div>
                <div className="szrl-number">
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
