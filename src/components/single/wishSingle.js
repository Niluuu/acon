import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toggleWished } from "../../redux/wishPage/addWished/action";
import { connect } from "react-redux";

class WishProduct extends React.Component {
  wished = (id) => {
    this.props.dispatch(toggleWished(id));
  };

  render() {
    const { product } = this.props;
    return (
      <div key={Math.random()} className="item" style={{ margin: " 0px 10px" }}>
        <span className="wish-icon" onClick={() => this.wished(product.id)}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </span>
        <Link to={`/single/${product.id}`}>
          <div className="cc-block">
            <div href="#" className="cc-image">
              <LazyLoadImage src={product.image} alt="" />
            </div>
            <div className="cc-content">
              <div className="row">
                <div className="col-sm-7">
                  <div href="#" className="cc-title">
                    {product.brand}
                  </div>
                  <div className="cc-category">{product.name}</div>
                </div>
                <div className="col-sm-5">
                  <div
                    className="cc-price bold"
                    style={{ textAlign: "initial", fontWeight: "normal" }}
                  >
                    {product.price} USD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(WishProduct);
