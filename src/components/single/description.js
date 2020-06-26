import React from "react";
import CategorySlider from "../single/categorySlider";
import Tabs from "./tabs";
import { Link } from "react-router-dom";

function Description({ product, d, colorName, data }) {
  return (
    <div className="col-sm-6">
      <div className="single-main-block">
        <div className="flex_just_bet border_top">
          <div>
            <div>
              <h2 className="light text-capitalize"> {d && d[0].name}</h2>
              {/* <p className="light">доставка</p> */}
            </div>
            <div>
              <h2 className="text-capitalize"> {d && d[0].price} UZS</h2>
              <p>{d && d[0].transit_time}</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className="light text-capitalize"> {d && d[1].name}</h2>
              {/* <p className="light">доставка</p> */}
            </div>
            <div>
              <h2 className="text-capitalize">{d && d[1].price} UZS </h2>
              <p>{d && d[1].transit_time}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="categorys border_top border_bottom ">
        {product && product.related && (
          <CategorySlider product={product.related} />
        )}
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
        {product && <Tabs product={product} data={data} />}
      </div>
    </div>
  );
}

export default Description;
