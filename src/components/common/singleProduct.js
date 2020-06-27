import React from "react";
import img from "../../assets/images/tmp/c4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { connect } from "react-redux";
import { toggleWished } from "../../redux/wishPage/addWished/action";

class SingleProduct extends React.Component {
  wished = (id) => {
    this.props.dispatch(toggleWished(id));
  };

  render() {
    const { product } = this.props;
    return (
      <div key={Math.random()} className="item">
        <span className="wish-icon" onClick={() => this.wished(product.id)}>
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </span>
        <Link to={`/single/${product.id}`}>
          <div className="cc-block">
            <span className="cc-image">
              <LazyLoadImage src={img} alt="" />
            </span>
            <div className="cc-content">
              <div className="row">
                <div className="col-sm-7">
                  <div className="cc-title">{product.brand}</div>
                  <div className="cc-category">
                    <span>{product.name}</span>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="cc-price" style={{ textAlign: "initial" }}>
                    {product.price}€
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

export default connect(mapStateToProps)(SingleProduct);
