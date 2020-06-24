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
      lazyLoad: true,
      
    };
    return (
      <div className="product_slider">
        <h2 className="title"> Смотрите так же </h2>
        <Slider {...settings}>
          {this.props.products &&
            this.props.products.map((product) => {
              return (
                <div key={Math.random()}>
                  <WishProduct product={product} />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}
