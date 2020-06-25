import React, { useState } from "react";

const colors = [
  {
    color: "#fff",
  },
  {
    color: "#A62828",
  },
  {
    color: "#222222",
  },
  {
    color: "#2AA469",
  },
  { color: "#2843A2" },
];

function Colors({ product }) {
  const [state, setState] = useState("#222222");
  function handleOptionChange(e) {
    setState(e.target.value);
  }
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
                  type="radio"
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
