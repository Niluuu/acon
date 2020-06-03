import React from "react";
import img from "../../assets/images/tmp/c4.jpg";

function CatalogProduct({ product }) {
  return (
    <React.Fragment>
      {product.map((i) => {
        return (
          <div className="item">
            <div className="cc-block">
              <a href="#" className="cc-image">
                <img src={img} alt="" />
              </a>
              <a href="#" className="cc-title">
                Туфли
              </a>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default CatalogProduct;
