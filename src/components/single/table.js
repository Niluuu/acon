import React from "react";
import arrow from "../../assets/images/right.png";
import Size from "./size";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Table({size}) {
  return (
    <div className="size_table" >
      <div className="flex_just_bet">
        <p className="title">Размеры</p>
        <p className="title_table">
          Таблица размеров <LazyLoadImage  src={arrow} alt="" />{" "}
        </p>
      </div>
        <Size size={size} />
    </div>
  );
}

export default Table;
