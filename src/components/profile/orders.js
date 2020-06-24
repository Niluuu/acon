import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { useState, useEffect } from "react";
import order from "../../assets/images/profile/big-order.png";
import delate from "../../assets/images/profile/delate.png";
import loop from "../../assets/images/order/search.png";
import img from "../../assets/images/tmp/c4.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const products = [
  {
    name: "zara",
  },
  {
    name: "zara",
  },
  {
    name: "zara",
  },
  {
    name: "zara",
  },
  {
    name: "zara",
  },
];

function Orders() {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(products);
  }, []);

  return (
    <div className="orders_page">
      <div className="profile_child">
        <Link to="/profile">
          <LazyLoadImage  src={back} alt="" className="back_to" />
        </Link>
        <p className="title">Мои заказы</p>
      </div>
      <div className="content">
        {state === null ? (
          <div className="empty_row">
            <LazyLoadImage  src={order} alt="" />
            <p className="title">У ВАС пока нет ЗАКАЗОВ</p>
            <p className="under_title">
              Здесь появится информация о ваших заказах
            </p>
          </div>
        ) : null}

        {state && (
          <div className="product">
            <div className="search_row">
              <LazyLoadImage  src={loop} className="loop" alt="" />
              <input
                type="text"
                placeholder="Название товара или номер заказа"
              />
            </div>
            {state.map((p) => {
              return (
                <div className="cart">
                  <div className="cart_top d_flex">
                    <div className="info">
                      <p className="name">
                        Время заказ: <strong> 04.11.2018</strong>
                      </p>
                      <p className="name">
                        Номер закакза: <strong> 453452352</strong>
                      </p>
                    </div>
                    <div className="delate_btn">
                      <LazyLoadImage  src={delate} alt="" />
                    </div>
                  </div>
                  <div className="cart_main d_flex">
                    <LazyLoadImage  src={img} alt="" />
                    <div className="info">
                      <strong>{p.name}</strong>
                      <p className="brand">Cinikers</p>
                      <strong>333333 usd</strong>
                    </div>
                  </div>
                  <div className="cart_bottom">
                    <div className="d_flex">
                      <p>Количество </p>
                      <strong> x1</strong>
                    </div>
                    <div className="d_flex">
                      <p>Обащая стоимость</p>
                      <strong>23423243 usd</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
