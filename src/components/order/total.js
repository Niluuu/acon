import React from 'react'

function Total() {
  return (
    <div class="shadow-container">
      <div class="row mb-15px">
        <div class="col-sm-6 col-6">
          <div class="zb-p">Итого</div>
        </div>
        <div class="col-sm-6 col-6">
          <div class="zb-p">4 970,00 руб.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-6">
          <div class="zb-p">
            <span>Всего к оплате:</span>{" "}
          </div>
        </div>
        <div class="col-sm-6 col-6">
          <div class="zb-p">
            <span>4 970,00 руб.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total
