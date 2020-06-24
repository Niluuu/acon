import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/cover.png";
import heart from "../../assets/images/h2.png";
import arrow from "../../assets/images/arrow.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
    };
    return (
      <div className="simple_slider">
        <Slider {...settings}>
          <div>
            <img className="heart_icon" src={heart} alt="" />
            <img className="cover_img" src={img1} />
            <img className="arrow_icon" src={arrow} alt="" />
          </div>
          <div>
            <img className="heart_icon" src={heart} alt="" />
            <img className="cover_img" src={img1} />
            <img className="arrow_icon" src={arrow} alt="" />
          </div>
          <div>
            <img className="heart_icon" src={heart} alt="" />
            <img className="cover_img" src={img1} />
            <img className="arrow_icon" src={arrow} alt="" />
          </div>
          <div>
            <img className="heart_icon" src={heart} alt="" />
            <img className="cover_img" src={img1} />
            <img className="arrow_icon" src={arrow} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
