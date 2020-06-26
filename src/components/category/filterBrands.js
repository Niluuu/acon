import React from "react";
import check from "../../assets/images/order/check.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect } from "react";

function FilterBrands({ filter }) {
  const [state, setState] = useState("Bershka");

  function choseBrand(e) {
    setState(e.target.name);
  }
  return (
    <ul>
      {Object.values(filter)[0] &&
        Object.values(filter)[0].map(({ name }) => {
          return (
            <li key={Math.random()}>
              <label className="list">
                <input
                  name={name}
                  onClick={(e) => choseBrand(e)}
                  type="checkbox"
                  checked={state === name}
                  style={{ display: "none" }}
                />
                <span>{name}</span>
                {state === name && <LazyLoadImage src={check} alt="" />}
              </label>
            </li>
          );
        })}
    </ul>
  );
}

export default FilterBrands;
