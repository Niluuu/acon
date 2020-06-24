import React from "react";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { useState, useEffect } from "react";
import address from "../../assets/images/profile/big-address.png";
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

function Address() {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(products);
  }, []);

  return (
    <div className="orders_page address_page">
      <div className="profile_child">
        <Link to="/profile">
          <LazyLoadImage  src={back} alt="" className="back_to" />
        </Link>
        <p className="title">Мои АДРЕСА</p>
      </div>
      <div className="content">
        {state === null ? (
          <div className="empty_row">
            <LazyLoadImage  src={address} alt="" />
            <p className="title">У вас нет адресов</p>
          </div>
        ) : null}

        {state && (
          <div className="product">
            {state.map((p) => {
              return (
                <div className="cart">
                  <div className="cart_main">
                    <div className="info">
                      <p className="name">Дильноза — +998 90 123 31 13</p>
                      <strong>
                        м-в Хумоюн, дом 40, Мирзо-Улугбекский р-н. Ташкент
                      </strong>
                    </div>
                  </div>
                  <div className="cart_bottom">
                    <div className="d_flex">
                      <span>ПО УМОЛЧАНИЮ</span>
                      <p className="btn">РЕДАКТИРОВАТЬ</p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="button_row">
              <button className="dark-button">ДОБАВИТЬ АДРЕС</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Address;
