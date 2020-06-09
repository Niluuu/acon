import React from "react";
import img from "../../assets/images/MOD.png";
import img1 from "../../assets/images/h1.png";
import img2 from "../../assets/images/h2.png";
import img3 from "../../assets/images/h3.png";

function Header() {
  return (
    <div className="d-block d-md-none header-container">
      <div className="header-top-mobile">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="col"></div>
              <div className="col">
                <a href="#" className="mobile-search-icon">
                  <img src={img1} alt="" />
                </a>
              </div>
            </div>
            <div className="col">
              <a href="#" className="mobile-logo">
                <img src={img} alt="" />
              </a>
            </div>
            <div className="col flex_jus_end">
              <a href="#" className="heart-icon">
                <img src={img2} alt="" />
              </a>
              <a href="#" className="cart-mobile">
                <img src={img3} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
