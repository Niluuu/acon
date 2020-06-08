import React, { Component } from "react";
import Slider from "react-slick";
import WishProduct from "./wishSingle";

export default class PoductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="product_slider">
        <h2 className="title"> Смотрите так же </h2>
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