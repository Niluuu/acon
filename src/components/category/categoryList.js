import React from "react";
import img from "../../assets/images/tmp/c4.jpg";

function CategoryList() {
  return (
    <div className="category-list">
      <div className="row">
        {Array.from(Array(10).keys()).map((product) => {
          return <Item />;
        })}
      </div>
    </div>
  );
}

const Item = () => {
  return (
    <div class="col-sm-4 col-6">
      <div class="cc-block">
        <a href="#1" class="wish-icon">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </a>
        <a href="#" class="cc-image">
          <img src={img} alt="" />
        </a>
        <div class="cc-content">
          <div class="row">
            <div class="col-sm-7">
              <a href="#" class="cc-title">
                Zara
              </a>
              <div class="cc-category">
                <a href="#">Сникерсы</a>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="cc-price" style={{ textAlign: "initial" }}>
                204,95 €
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
