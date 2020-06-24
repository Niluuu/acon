import React from "react";
import search from "../../assets/images/header/search.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="search">
        <LazyLoadImage src={search} />
        <input type="text" placeholder="Товар, бренд или цвет" />
      </div>
    </div>
  );
}

export default HeaderBottom;
