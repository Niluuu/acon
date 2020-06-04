import React from "react";
import img from "../../assets/images/logo.jpg";
import Sidebar from "./sidebar";

function Header() {
  return (
    <div className="d-block d-md-none">
      <div className="header-top-mobile">
        <div className="container">
          <div className="row align-items-center">
            <div className="col"></div>
            <div className="col">
              <a href="#" className="mobile-search-icon">
                <i className="fa fa-search" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col">
              <a href="#" className="mobile-logo">
                <img src={img} alt="" />
              </a>
            </div>
            <div className="col">
              <a href="#" className="heart-icon">
                <i className="fa fa-heart-o" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col">
              <a href="#" className="cart-mobile">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom-mobile">
        <div className="container">
          <ul className="row">
            <li className="col">
              <a href="#">Мужчинам</a>
            </li>
            <li className="col active">
              <a href="#">Женщинам</a>
            </li>
            <li className="col">
              <a href="#">Детям</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
