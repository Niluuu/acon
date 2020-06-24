import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function WishProduct({ product }) {
  return (
    <div key={Math.random()} className="item" style={{ margin: " 0px 10px" }}>
      <Link to={`/single/${product.id}`}>
        <div className="cc-block">
          <a href="#" className="wish-icon">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </a>
          <a href="#" className="cc-image">
            <LazyLoadImage src={img} alt="" />
          </a>
          <div className="cc-content">
            <div className="row">
              <div className="col-sm-7">
                <div href="#" className="cc-title">
                  Zara
                </div>
                <div className="cc-category">
                  <div href="#">{product.meta_title}</div>
                </div>
              </div>
              <div className="col-sm-5">
                <div
                  className="cc-price bold"
                  style={{ textAlign: "initial", fontWeight: "normal" }}
                >
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
