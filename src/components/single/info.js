import React from "react";
import logo from "../../assets/images/productLogo.png";
import Table from "./table";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Info({ product }) {
  return (
    <div className="description">
      <div className="flex_just_bet info_single">
        <div className="info_product">
          <p className="category">
            {product.product &&
              product.product.brand &&
              product.product.brand.name}
          </p>
          <h1 className="name">{product.product && product.product.name}</h1>
          <p className="price">
            {product.product && product.product.price} UZS
          </p>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      {product.product && product.product.variations && (
        <Table size={product.product.variations} />
      )}
    </div>
  );
}

export default Info;
