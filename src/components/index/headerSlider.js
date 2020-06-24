import React, { Component } from "react";
import img from "../../assets/images/tmp/t1.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      adaptiveHeight: true,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="tc-block" style={{ backgroundImage: `url(${img})` }}>
            <a href="#" className="tc-img">
              <LazyLoadImage src={img} alt="" style={{ height: "300px" }} />
            </a>
            <div className="tc-white slider-row">
              <div className="tc-title">Легкие куртки и ветровки</div>
              <span className="more">
                <Link to="/category" style={{ color: "#000" }}>
                  {" "}
                  Подробнее
                </Link>
              </span>
            </div>
          </div>
          <div className="tc-block" style={{ backgroundImage: `url(${img})` }}>
            <a href="#" className="tc-img">
              <LazyLoadImage src={img} alt="" style={{ height: "300px" }} />
            </a>
            <div className="tc-white slider-row">
              <div className="tc-title">Легкие куртки и ветровки</div>
              <span className="more">
                <Link to="/category" style={{ color: "#000" }}>
                  {" "}
                  Подробнее
                </Link>
              </span>
            </div>
          </div>
          <div className="tc-block" style={{ backgroundImage: `url(${img})` }}>
            <a href="#" className="tc-img">
              <LazyLoadImage src={img} alt="" style={{ height: "300px" }} />
            </a>
            <div className="tc-white slider-row">
              <div className="tc-title">Легкие куртки и ветровки</div>
              <span className="more">
                <Link to="/category" style={{ color: "#000" }}>
                  {" "}
                  Подробнее
                </Link>
              </span>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
