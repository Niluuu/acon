import React from "react";
import img from "../../assets/images/tmp/bc4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SimpleProduct({ product }) {
  return (
    <React.Fragment>
      {product &&
        product.items.map((p) => {
          return (
            <div key={Math.random()} className="col-sm-3 col-6">
              <Link to={`/single/${p.id}`}>
                <div className="bc-block">
                  <a href="#" className="bc-img">
                    <LazyLoadImage  src={img} alt="" />
                  </a>
                  <a href="#" className="bc-title">
                    {p.title}
                  </a>
                </div>
              </Link>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default SimpleProduct;
