import React, { Component } from "react";
import Slider from "react-slick";

const data = [
  "Все брюки",
  "Все куртки Puma",
  "Все куртки Puma",
  "Все куртки Puma",
];

export default class CategorySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          {data.map((s) => {
            return (
              <div key={Math.random()} className="categorys_slider">
                <input type="radio" value={1} />
                <div
                  className={
                    s === "Все брюки"
                      ? "show_category show_category_active"
                      : "show_category"
                  }
                >
                  <p>{s}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
