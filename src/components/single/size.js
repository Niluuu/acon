import React, { Component, useState } from "react";
import Slider from "react-slick";

const sizes = ["34", "35", "36", "37", "38", "39"];

export default function Size({ product }) {
  const [state, setState] = useState("36");
  function handleOptionChange(e) {
    setState(e.target.value);
  }

  // console.log("size", product);
  return (
    <div className="size_slider">
      <div className="price_type">
        <p>RUS</p>
      </div>
      <div className="slide_row">
        {product &&
          product.values &&
          product.values.map((s) => {
            return (
              <div className="sizes" key={Math.random()}>
                <input
                  type="radio"
                  value={s.name}
                  checked={state === s.name}
                  onChange={(e) => handleOptionChange(e)}
                />
                <div
                  className={
                    state === s.name
                      ? "show_size show_size_active"
                      : "show_size"
                  }
                >
                  <p>{s.name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
