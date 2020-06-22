import React, { useState } from "react";
const data = ["Все брюки", "Все куртки", "куртки Puma", "Puma"];

export default function CategorySlider() {
  const [state, setState] = useState("Все брюки");

  function handleOptionChange(e) {
    setState(e.target.value);
  }
  return (
    <div className="category_slider_row">
      {data.map((s) => {
        return (
          <div key={Math.random()} className="categorys_slider">
            <input
              type="radio"
              value={s}
              checked={state === s}
              onChange={(e) => handleOptionChange(e)}
            />
            <div
              className={
                s === state
                  ? "show_category show_category_active"
                  : "show_category"
              }
            >
              <p>{s}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
