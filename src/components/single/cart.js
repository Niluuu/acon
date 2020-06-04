import React from "react";
import SingleProduct from "../common/singleProduct";

function Cart() {
  return (
    <div className="cart-container">
      <div className="container">
        <div className="category-list">
          <h3>Dazu passt</h3>
          <div className="row">
            <div className="col-sm-3">
              <SingleProduct product={1} />
            </div>
            <div className="col-sm-3">
              <SingleProduct product={1} />
            </div>
            <div className="col-sm-3">
              <SingleProduct product={1} />
            </div>
            <div className="col-sm-3">
              <SingleProduct product={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
