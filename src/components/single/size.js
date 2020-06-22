import React, { Component, useState } from "react";
import Slider from "react-slick";

const sizes = ["34", "35", "36", "37", "38", "39"];

export default function Size() {
  const [state, setState] = useState("36");
  function handleOptionChange(e) {
    setState(e.target.value);
  }

  return (
    <div className="size_slider">
      <div className="price_type">
        <p>RUS</p>
        <p className="light">EUR</p>
      </div>
      <div className="slide_row">
        {sizes.map((s) => {
          return (
            <div className="sizes" key={Math.random()}>
              <input
                type="radio"
                value={s}
                checked={state === s}
                onChange={(e) => handleOptionChange(e)}
              />
              <div
                className={
                  state === s ? "show_size show_size_active" : "show_size"
                }
              >
                <p>{s}</p>
                <p className="light">{s}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
