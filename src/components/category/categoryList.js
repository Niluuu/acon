import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";

function CategoryList({ items }) {
  return (
    <div className="category-list">
      <div className="row">
        {items.map((product) => {
          return <Item key={Math.random()} product={product} />;
        })}
      </div>
    </div>
  );
}

const Item = ({ product }) => {
  return (
    <div className="col-sm-4 col-6">
      {product.brand && (
        <div className="cc-block">
          <Link to={`/single/${product.id}`}>
            <a href="#1" className="wish-icon">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </a>
            <a href="#" className="cc-image">
              <img src={img} alt="" />
            </a>
            <div className="cc-content">
              <div className="row">
                <div className="col-sm-7">
                  <a href="#" className="cc-title">
                    {product.brand.name}
                  </a>
                  <div className="cc-category">
                    <a href="#">{product.brand.slug}</a>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="cc-price" style={{ textAlign: "initial" }}>
                    {product.price_formatted}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
