import React, { Component } from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class PaySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      lazyLoad: true,
      adaptiveHeight: true,
    };
    return (
      <div className="shadow-container ">
        <h4 className="mb-20px">Способы оплаты</h4>
        <Slider {...settings}>
          {this.props.payment &&
            this.props.payment.map((p) => {
              return (
                <div id={p.id} key={Math.random()} className="so item">
                  {p.name}
                  <LazyLoadImage  src={p.media} alt="" />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}
