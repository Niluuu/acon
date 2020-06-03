import React, { Component } from "react";
import img from "../../assets/images/tmp/t1.jpg";
import Slider from "react-slick";

export default class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}>
          <div className="tc-block" style={{ backgroundImage: `url(${img})` }}>
            <a href="#" className="tc-img">
              <img src={img} alt="" style={{ height: "300px" }} />
            </a>
            <div className="tc-white slider-row">
              <div className="tc-title">Легкие куртки и ветровки</div>
              <a href="#" className="more">
                Подробнее
              </a>
            </div>
          </div>
          <div className="tc-block" style={{ backgroundImage: `url(${img})` }}>
            <a href="#" className="tc-img">
              <img src={img} alt="" style={{ height: "300px" }} />
            </a>
            <div className="tc-white slider-row">
              <div className="tc-title">Легкие куртки и ветровки</div>
              <a href="#" className="more">
                Подробнее
              </a>
            </div>
          </div>
          <div className="tc-block" style={{ backgroundImage: `url(${img})` }}>
            <a href="#" className="tc-img">
              <img src={img} alt="" style={{ height: "300px" }} />
            </a>
            <div className="tc-white slider-row">
              <div className="tc-title">Легкие куртки и ветровки</div>
              <a href="#" className="more">
                Подробнее
              </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
