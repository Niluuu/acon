import React from "react";

function OrderInfo() {
  return (
    <div className="col-sm-4">
      <div className="shadow-container">
        <h3 className="mb-20px">Gesamtsumme</h3>
        <div className="cart-price-container">
          <div className="cpc-block">
            <div className="row">
              <div className="col-sm-8">
                <div className="cpc-text">Zwischensumme</div>
              </div>
              <div className="col-sm-4">
                <div className="cpc-price">359,85 $</div>
              </div>
            </div>
          </div>
          <div className="cpc-block">
            <div className="row">
              <div className="col-sm-8">
                <div className="cpc-text">Lieferung</div>
              </div>
              <div className="col-sm-4">
                <div className="cpc-price">gratis</div>
              </div>
            </div>
          </div>
        </div>
        <div className="cpc-block">
          <div className="row">
            <div className="col-sm-9">
              <div className="cpc-text">
                <strong>Gesamtsumme (inkl. MwSt.)</strong>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="cpc-price">
                <strong>359,85 $</strong>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-orange w-100">
          Zur kasse
        </a>
      </div>
    </div>
  );
}

export default OrderInfo;
