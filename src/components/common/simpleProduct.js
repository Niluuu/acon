import React from "react";
import img from "../../assets/images/tmp/bc4.jpg";

function SimpleProduct({ product }) {
  return (
    <React.Fragment>
      {Array.from(Array(product).keys()).map((product) => {
        return (
          <div key={Math.random()} className="col-sm-3 col-6">
            <div className="bc-block">
              <a href="#" className="bc-img">
                <img src={img} alt="" />
              </a>
              <a href="#" className="bc-title">
                Туфли
              </a>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default SimpleProduct;
