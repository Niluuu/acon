import React from "react";
import img from "../../assets/images/tmp/c4.jpg";

function WishProduct({ product }) {
  return (
    <React.Fragment>
      <div key={Math.random()} className="item" style={{ marginRight: "33px" }}>
        <div className="cc-block">
          <a href="#" className="wish-icon">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </a>
          <a href="#" className="cc-image">
            <img src={img} alt="" />
          </a>
          <div className="cc-content">
            <div className="row">
              <div className="col-sm-7">
                <a href="#" className="cc-title">
                  Zara
                </a>
                <div className="cc-category">
                  <a href="#">{product.meta_title}</a>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="cc-price bold" style={{ textAlign: "initial" }}>
                  {product.price} €
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WishProduct;
