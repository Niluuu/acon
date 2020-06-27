import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { toggleWished } from "../../redux/wishPage/addWished/action";
import { connect } from "react-redux";

class CategoryList extends React.Component {
  wished = (id) => {
    this.props.dispatch(toggleWished(id));
  };

  render() {
    const { items } = this.props;

    return (
      <div className="category-list" style={{ marginBottom: "30px" }}>
        <div className="row">
          {items.map((product) => {
            return (
              <Item
                key={Math.random()}
                product={product}
                wished={this.wished}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const Item = ({ product, wished }) => {
  return (
    <div className="col-sm-4 col-6">
      <div className="cc-block">
        <span className="wish-icon" onClick={() => wished(product.id)}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </span>
        <Link to={`/single/${product.id}`}>
          <div href="#" className="cc-image" style={{ marginBottom: "10px" }}>
            <LazyLoadImage src={product.image} alt="" />
          </div>
          <div className="cc-content">
            <div className="row">
              <div className="col-sm-7">
                <div href="#" className="cc-title">
                  {product.brand}
                </div>
                <div className="cc-category"> {product.name}</div>
              </div>
              <div className="col-sm-5">
                <div className="cc-price" style={{ textAlign: "initial" }}>
                  {product.price} USD
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(CategoryList);
