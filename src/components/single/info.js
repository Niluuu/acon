import React from "react";
import logo from "../../assets/images/productLogo.png";
import Table from "./table";

function Info({ product }) {
  return (
    <div className="description">
      <div className="flex_just_bet info_single">
        <div className="info_product">
          <p className="category">Jaded London</p>
          <h1 className="name">{product.name}</h1>
          <p className="price">{product.price} UZS</p>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <Table />
    </div>
  );
}

export default Info;
