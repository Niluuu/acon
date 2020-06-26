import React from "react";
import logo from "../../assets/images/productLogo.png";
import Table from "./table";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Info({ product, size, color }) {
  const arry = [parseInt(size), parseInt(color), parseInt(product.price)];
  const total = arry.reduce(function (prev, cur) {
    return prev + cur;
  }, 0);

  return (
    <div className="description">
      <div className="flex_just_bet info_single">
        <div className="info_product">
          <p className="category">
            {product && product.brand && product.brand}
          </p>
          <h1 className="name">{product && product.name}</h1>
          {product && <p className="price">{total} UZS</p>}
        </div>
        <div className="logo">
          <LazyLoadImage src={logo} alt="" />
        </div>
      </div>
      {product && product.variations && <Table size={product.variations} />}
    </div>
  );
}

export default Info;
