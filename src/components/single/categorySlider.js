import React, { useState } from "react";

export default function CategorySlider({ product }) {
  const [state, setState] = useState("Все брюки");

  function handleOptionChange(e) {
    setState(e.target.value);
  }
  return (
    <div className="category_slider_row">
      {product.map((s) => {
        return (
          <div key={Math.random()} className="categorys_slider">
            <input
              type="radio"
              value={s.title}
              checked={state === s.title}
              onChange={(e) => handleOptionChange(e)}
            />
            <div
              className={
                s.title === state
                  ? "show_category show_category_active"
                  : "show_category"
              }
            >
              <p>{s.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
