import React from "react";
import WishProduct from "../common/wishProduct";

function Cart() {
  return (
    <div class="cart-container">
      <div class="container">
        <div class="category-list">
          <h3>Dazu passt</h3>
          <div class="row">
            <div class="col-sm-3">
              <WishProduct product={1} />
            </div>
            <div class="col-sm-3">
              <WishProduct product={1} />
            </div>
            <div class="col-sm-3">
              <WishProduct product={1} />
            </div>
            <div class="col-sm-3">
              <WishProduct product={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
