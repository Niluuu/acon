import React from "react";

function Total({ products }) {
  // console.log("products", products);
  return (
    <div className="shadow-container">
      <div className="row mb-15px">
        <div className="col-sm-6 col-6">
          <div className="zb-p">Итого</div>
        </div>
        <div className="col-sm-6 col-6">
          <div className="zb-p">65463</div>
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
            <span>4 970,00 руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
