import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <React.Fragment>
      {product &&
        product.items.map((product) => {
          return (
            <Link to={`/single/${product.id}`}>
              <div className="col-sm-4 col-6" key={Math.random()}>
                <div className="cc-block">
                  <span className="wish-icon">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </span>
                  <span className="cc-image">
                    <img src={img} alt="" />
                  </span>
                  <div className="cc-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <span className="cc-title">Zara</span>
                        <div className="cc-category">
                          <span>{product.title}</span>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div
                          className="cc-price"
                          style={{ textAlign: "initial" }}
                        >
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </React.Fragment>
  );
}

export default Product;
