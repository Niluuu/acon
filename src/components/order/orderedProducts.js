import React from "react";
import OrderList from "./orderList";

function OrderedProducts() {
  return (
    <div class="shadow-container">
      <div class="row">
        <div class="col-sm-7 col-7">
          <h4 class="mb-20px">Количество товаров - 3</h4>
        </div>
        <div class="col-sm-5 col-5">
          <div class="edit-zakaz">
            <a href="#">Изменить</a>
          </div>
        </div>
      </div>
      <OrderList product={3} />
    </div>
  );
}

export default OrderedProducts;
