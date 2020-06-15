import React, { Component } from "react";
import { connect } from "react-redux";
import SingleProduct from "../common/singleProduct";

class CartCategory extends Component {
  render() {
    const { recommended } = this.props.data;
    return (
      <div className="category-list">
        <h3>Dazu passt</h3>
        <div className="row">
          {recommended &&
            recommended.map((item) => {
              return (
                <div className="col-sm-3">
                  <SingleProduct product={item} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.cartGetReducer;
};

export default connect(mapStateToProps)(CartCategory);
