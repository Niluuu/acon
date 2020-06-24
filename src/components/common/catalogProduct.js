import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CatalogProduct({ product }) {
  return (
    <React.Fragment>
      {product.map((i) => {
        return (
          <div className="item">
            <div className="cc-block">
              <a href="#" className="cc-image">
                <LazyLoadImage  src={img} alt="" />
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
