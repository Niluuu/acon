import React from "react";
import img from "../../assets/images/tmp/c4.jpg";

function Product({ product }) {
  return (
    <React.Fragment>
      {Array.from(Array(product).keys()).map((product) => {
        return (
          <div className="col-sm-4 col-6" key={Math.random()}>
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
                      <a href="#">Сникерсы</a>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="cc-price" style={{ textAlign: "initial" }}>
                      204,95 €
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Product;
