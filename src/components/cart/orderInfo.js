import React from "react";

function OrderInfo() {
  return (
    <div class="col-sm-4">
      <div class="shadow-container">
        <h3 class="mb-20px">Gesamtsumme</h3>
        <div class="cart-price-container">
          <div class="cpc-block">
            <div class="row">
              <div class="col-sm-8">
                <div class="cpc-text">Zwischensumme</div>
              </div>
              <div class="col-sm-4">
                <div class="cpc-price">359,85 $</div>
              </div>
            </div>
          </div>
          <div class="cpc-block">
            <div class="row">
              <div class="col-sm-8">
                <div class="cpc-text">Lieferung</div>
              </div>
              <div class="col-sm-4">
                <div class="cpc-price">gratis</div>
              </div>
            </div>
          </div>
        </div>
        <div class="cpc-block">
          <div class="row">
            <div class="col-sm-9">
              <div class="cpc-text">
                <strong>Gesamtsumme (inkl. MwSt.)</strong>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="cpc-price">
                <strong>359,85 $</strong>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-orange w-100">
          Zur kasse
        </a>
      </div>
    </div>
  );
}

export default OrderInfo;
