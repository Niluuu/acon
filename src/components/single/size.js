import React, { useState, useEffect } from "react";

export default function Size({ product, handlePrice }) {
  const [state, setState] = useState("");
  function handleOptionChange(e) {
    setState(e.target.value);
    handlePrice(e.target);
  }

  useEffect(() => {
    const defoult = product.values && product.values[0];
    setState(defoult.name);
  });

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
                  name="sizePrice"
                  id={s.price}
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
