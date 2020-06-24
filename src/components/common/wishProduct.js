import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function WishProduct({ product }) {
  return (
    <div key={Math.random()} className="item" style={{ marginRight: "33px" }}>
      <Link to={`/single/${product.id}`}>
        <div className="cc-block">
          <span className="wish-icon">
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </span>
          <a className="cc-image">
            <LazyLoadImage
              src={img} 
            />
          </a>
          <div className="cc-content">
            <div className="row">
              <div className="col-sm-7">
                <span className="cc-title">{product.title}</span>
                <div className="cc-category">
                  <span>Сникерсы</span>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="cc-price" style={{ textAlign: "initial" }}>
                  {product.price}€
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
