import React from "react";
import logo from "../../assets/images/productLogo.png";
import Table from "./table";

function Info() {
  return (
    <div className="description">
      <div className="flex_just_bet info_single">
        <div className="info_product">
          <p className="category">Jaded London</p>
          <h1 className="name">EXCLUSIVEPANELLED WIDE LEG — Jogginghose</h1>
          <p className="price">98 313 545 UZS</p>
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
