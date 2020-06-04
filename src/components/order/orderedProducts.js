import React from "react";
import OrderList from "./orderList";

function OrderedProducts() {
  return (
    <div className="shadow-container">
      <div className="row">
        <div className="col-sm-7 col-7">
          <h4 className="mb-20px">Количество товаров - 3</h4>
        </div>
        <div className="col-sm-5 col-5">
          <div className="edit-zakaz">
            <a href="#">Изменить</a>
          </div>
        </div>
      </div>
      <OrderList product={3} />
    </div>
  );
}

export default OrderedProducts;
