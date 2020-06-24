import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function WishProduct({ product }) {
  return (
    <div key={Math.random()} className="item" style={{ marginRight: "33px" }}>
      <Link to={`/single/${product.id}`}>
        <div className="cc-block">
          <a href="#" className="wish-icon">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </a>
          <a href="#" className="cc-image">
            <LazyLoadImage  src={img} alt="" />
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
      </Link>
    </div>
  );
}

export default WishProduct;
