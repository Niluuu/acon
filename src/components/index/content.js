import React from "react";
import HeaderSlider from "./headerSlider";
import CatalogSlider from "./catalogSlider";
import NameWithLink from "../index/nameWithLink";
import img from "../../assets/images/tmp/p1.jpg";
import WishedSlider from "./wishedSlider";
import SimpleProduct from "../common/simpleProduct";
import Sale from "./sale";
import Product from "../common/product";
import BottomBlock from "./bottomBlock";
import Descrition from "./descrition";

function Content() {
  return (
    <div className="content">
      <div className="top-block mb-50px">
        <HeaderSlider />
      </div>
      <div className="container">
        <div className="catalog-container">
          <h3 className="mb-35px">Каталог</h3>
          <CatalogSlider />
        </div>
        <div className="block-container mb-35px">
          <NameWithLink name={"Пуховики и зимние куртки"} link={"#"} />
          <a href="#" className="big-image">
            <img src={img} alt="" className="img-fluid" />
          </a>
        </div>
        <div className="block-container">
          <NameWithLink name={"Сникерсы"} link={"#"} />
          <WishedSlider />
        </div>
        <div className="block-container mb-35px">
          <h3>Еще больше товаров!</h3>
          <h5>Самые низкие цены на товар</h5>
          <a href="#" className="big-image">
            <img src={img} alt="" className="img-fluid" />
          </a>
        </div>
        <WishedSlider />
        <div className="block-container mb-50px">
          <h3 className="mb-25px">Bleib auf dem Laufen</h3>
          <div className="row">
            <SimpleProduct product={4} />
          </div>
        </div>
        <Sale />
        <div className="block-container mb-65px">
          <NameWithLink name={"Платья"} link={"#"} />
          <div className="row">
            <Product product={3} />
          </div>
        </div>
        <div className="block-container mb-65px">
          <NameWithLink name={"Сникерсы"} link={"#"} />
          <WishedSlider />
        </div>
        <div className="block-container mb-65px">
          <BottomBlock />
        </div>
        <div className="block-container mb-65px">
          <Descrition />
        </div>
      </div>
    </div>
  );
}

export default Content;
