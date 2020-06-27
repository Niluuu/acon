import React from "react";
import img from "../../assets/images/tmp/bc4.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toggleWished } from "../../redux/wishPage/addWished/action";
import { connect } from "react-redux";

class SimpleProduct extends React.Component {
  wished = (id) => {
    this.props.dispatch(toggleWished(id));
  };

  render() {
    const { product } = this.props;
    return (
      <React.Fragment>
        {product &&
          product.items.map((p) => {
            return (
              <div key={Math.random()} className="col-sm-3 col-6">
                <Link to={`/single/${p.id}`}>
                  <div className="bc-block">
                    <a href="#" className="bc-img">
                      <LazyLoadImage src={img} alt="" />
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
}

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(SimpleProduct);
