import React from "react";
import arrow from "../../assets/images/right.png";
import Size from "./size";

function Table() {
  return (
    <div className="size_table" >
      <div className="flex_just_bet">
        <p className="title">Размеры</p>
        <p className="title_table">
          Таблица размеров <img src={arrow} alt="" />{" "}
        </p>
      </div>
        <Size />
    </div>
  );
}

export default Table;
