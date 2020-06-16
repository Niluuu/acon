import React from "react";

function Total({ products }) {
  return (
    <div className="shadow-container">
      <div className="row mb-15px">
        <div className="col-sm-6 col-6">
          <div className="zb-p">Итого</div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="zb-p">{products.products_price}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-6">
          <div className="zb-p">
            <span>Всего к оплате: </span>{" "}
          </div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="zb-p">
            <span>{products.total_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
