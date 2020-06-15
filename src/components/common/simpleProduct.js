import React from "react";
import img from "../../assets/images/tmp/bc4.jpg";

function SimpleProduct({ product }) {
  return (
    <React.Fragment>
      {product &&
        product.items.map((p) => {
          return (
            <div key={Math.random()} className="col-sm-3 col-6">
              <div className="bc-block">
                <a href="#" className="bc-img">
                  <img src={img} alt="" />
                </a>
                <a href="#" className="bc-title">
                  {p.title}
                </a>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default SimpleProduct;
