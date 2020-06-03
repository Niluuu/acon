import React, { Component } from "react";
import Slider from "react-slick";
import WishProduct from "../common/wishProduct";

export default class CatalogSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="catalog_slider">
        <Slider {...settings}>
          <div>
            <WishProduct product={1} />
          </div>
          <div>
            <WishProduct product={1} />
          </div>
          <div>
            <WishProduct product={1} />
          </div>
          <div>
            <WishProduct product={1} />
          </div>
        </Slider>
      </div>
    );
  }
}
