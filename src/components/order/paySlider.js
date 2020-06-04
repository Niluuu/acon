import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/visa.png";
import img2 from "../../assets/images/paypal.png";
import img3 from "../../assets/images/yad.png";

export default class PaySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="shadow-container ">
        <h4 className="mb-20px">Способы оплаты</h4>
        <Slider {...settings}>
          <div className="so item">
            <img src={img1} alt="" />
          </div>
          <div className="so item">
            <img src={img2} alt="" />
          </div>
          <div className="so item">
            <img src={img3} alt="" />
          </div>
          <div className="so item">
            <img src={img1} alt="" />
          </div>
          <div className="so item">
            <img src={img2} alt="" />
          </div>
          <div className="so item">
            <img src={img3} alt="" />
          </div>
          <div className="so item">
            <img src={img1} alt="" />
          </div>
          <div className="so item">
            <img src={img2} alt="" />
          </div>
          <div className="so item">
            <img src={img3} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
