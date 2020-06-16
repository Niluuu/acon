import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <React.Fragment>
      {product &&
        product.items.map((product) => {
          return (
            <div className="col-sm-4 col-6" key={Math.random()}>
              <Link to={`/single/${product.id}`}>
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
                          <a href="#">{product.title}</a>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div
                          className="cc-price"
                          style={{ textAlign: "initial" }}
                        >
                          204,95 €
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default Product;
