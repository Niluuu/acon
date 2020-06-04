import React from "react";
import WishProduct from "../components/common/wishProduct";

function CartCategory() {
  return (
    <div className="category-list">
      <h3>Dazu passt</h3>
      <div className="row">
        <div className="col-sm-3">
          <WishProduct product={1} />
        </div>
        <div className="col-sm-3">
          <WishProduct product={1} />
        </div>
        <div className="col-sm-3">
          <WishProduct product={1} />
        </div>
        <div className="col-sm-3">
          <WishProduct product={1} />
        </div>
      </div>
    </div>
  );
}

export default CartCategory;
