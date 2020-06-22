import React from "react";
import CategorySlider from "../single/categorySlider";
import Tabs from "./tabs";
import { Link } from "react-router-dom";

function Description({ product }) {
  return (
    <div className="col-sm-6">
      <div className="single-main-block">
        <div className="flex_just_bet border_top">
          <div>
            <div>
              <h2 className="light text-capitalize">Стандартная</h2>
              <p className="light">доставка</p>
            </div>
            <div>
              <h2 className="text-capitalize">бесплатно </h2>
              <p>2-4 рабочих дня </p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="light text-capitalize">Экспресс</h2>
              <p className="light">доставка</p>
            </div>
            <div>
              <h2 className="text-capitalize">70 000 UZS </h2>
              <p> 1-2 рабочих дня</p>
            </div>
          </div>
        </div>
        <div className="flex_just_bet description">
          <div className="info_row">
            <div className="info">
              <p className="light text-capitalize">Цвет</p>
              <p>Фиолетовый</p>
            </div>
            <div className="info">
              <p className="light text-capitalize">Состав</p>
              <p>Полиэстер 100%</p>
            </div>
            <div className="info">
              <p className="light text-capitalize">Страна</p>
              <p>Италия</p>
            </div>
          </div>
          <div className="info_row">
            <div className="info">
              <p className="light text-capitalize">Материал</p>
              <p>Джерси</p>
            </div>
            <div className="info">
              <p className="light text-capitalize">Уход</p>
              <p>Ручная стирка</p>
            </div>
          </div>
        </div>
      </div>
      <div className="categorys border_top border_bottom ">
        <CategorySlider />
      </div>
      <div className="categorys faq_row flex_just_bet">
        <h2>Остались вопросы?</h2>
        <button className="connect_us">
          <Link to="/form" style={{ color: "#000" }}>
            Написать нам
          </Link>
        </button>
      </div>
      <div className="categorys border_top flex_just_bet">
        <Tabs product={product} />
      </div>
    </div>
  );
}

export default Description;
