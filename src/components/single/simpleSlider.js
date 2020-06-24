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
    };
    return (
      <div className="simple_slider">
        <Slider {...settings}>
          <div>
            <LazyLoadImage  className="heart_icon" src={heart} alt="" />
            <LazyLoadImage  className="cover_img" src={img1} />
            <LazyLoadImage  className="arrow_icon" src={arrow} alt="" />
          </div>
          <div>
            <LazyLoadImage  className="heart_icon" src={heart} alt="" />
            <LazyLoadImage  className="cover_img" src={img1} />
            <LazyLoadImage  className="arrow_icon" src={arrow} alt="" />
          </div>
          <div>
            <LazyLoadImage  className="heart_icon" src={heart} alt="" />
            <LazyLoadImage  className="cover_img" src={img1} />
            <LazyLoadImage  className="arrow_icon" src={arrow} alt="" />
          </div>
          <div>
            <LazyLoadImage  className="heart_icon" src={heart} alt="" />
            <LazyLoadImage  className="cover_img" src={img1} />
            <LazyLoadImage  className="arrow_icon" src={arrow} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
