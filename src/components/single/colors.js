import React, { useState, useEffect } from "react";

function Colors({ product, handlePrice }) {
  const [state, setState] = useState("");
  function handleOptionChange(e) {
    setState(e.target.value);
    handlePrice(e.target);
  }

  useEffect(() => {
    const defoult = product.values && product.values[0];
    setState(defoult.color);
  }, [product.values]);

  return (
    <div className="colors_row">
      <div className="title">ЦвЕТ</div>
      <div className="d_flex">
        {product &&
          product.values &&
          product.values.map((c) => {
            return (
              <div
                className={
                  state === c.color ? "radio_row  checked" : "radio_row"
                }
              >
                <input
                  className={c.name}
                  name="colorPrice"
                  type="radio"
                  id={c.price}
                  value={c.color}
                  checked={state === c.color}
                  onChange={(e) => handleOptionChange(e)}
                />
                <div className="color" style={{ background: c.color }}></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Colors;
