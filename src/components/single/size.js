import React, { Component } from "react";
import Slider from "react-slick";

const sizes = [34, 35, 36, 37, 38, 39];

export default class Size extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="size_slider">
        <div className="price_type">
          <p>RUS</p>
          <p className="light">EUR</p>
        </div>
        <Slider {...settings}>
          {sizes.map((s) => {
            return (
              <div className="sizes" key={Math.random()}>
                <input type="radio" value={1} />
                <div
                  className={
                    s === 34 ? "show_size show_size_active" : "show_size"
                  }
                >
                  <p>{s}</p>
                  <p className="light">{s}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
