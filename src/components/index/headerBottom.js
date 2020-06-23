import React from "react";
import search from "../../assets/images/header/search.png";

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="search">
        <img src={search} alt="" />
        <input type="text" placeholder="Товар, бренд или цвет" />
      </div>
    </div>
  );
}

export default HeaderBottom;
