import React, { Component } from "react";
import Slider from "react-slick";
import WishProduct from "../common/wishProduct";
import { connect } from "react-redux";

class CatalogSlider extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="catalog_slider">
        <Slider {...settings}>
          {this.props.data[0] &&
            this.props.data[0].items.map((p) => {
              return (
                <div key={Math.random()}>
                  <WishProduct product={p} />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(CatalogSlider);
