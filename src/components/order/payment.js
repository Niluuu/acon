import React, { Component } from "react";
import right from "../../assets/images/order/white-arrow.png";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import i1 from "../../assets/images/order/image1.png";
import i2 from "../../assets/images/order/image2.png";
import i3 from "../../assets/images/order/image1.png";
import i4 from "../../assets/images/order/image4.png";
import i5 from "../../assets/images/order/image5.png";
import i6 from "../../assets/images/order/image6.png";
import i7 from "../../assets/images/order/image7.png";
import i8 from "../../assets/images/order/image8.png";
import arrow from "../../assets/images/right.png";

import ext from "../../assets/images/order/ext.png";
import up from "../../assets/images/order/up.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const list = [
  { img: i1, title: "VISA" },
  { img: i2, title: "MasterCard" },
  { img: i3, title: "American Express" },
  { img: i4, title: "JCB" },
  { img: i5, title: "MIR" },
  { img: i6, title: "IN Card" },
  { img: i7, title: "Подарочная карта" },
  { img: i8, title: "Наличный расчет" },
];

class Payment extends Component {
  state = {
    dostavka: "1",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = (e) => {
    this.setState({ dostavka: e.target.value });
  };

  render() {
    return (
      <div className="payment">
        <div className="profile_child">
          <p className="title">ОФОРМЛЕНИЕ ЗАКАЗА</p>
          <Link to="/cart">
            <LazyLoadImage  src={ext} alt="" className="close" />
          </Link>
        </div>

        <ul>
          {list.map(({ img, title }) => {
            return (
              <li>
                <div className="img_row">
                  <LazyLoadImage  src={img} alt="" />
                </div>
                <p> {title}</p>
                <LazyLoadImage  src={arrow} alt="" className="arrow" />
              </li>
            );
          })}
        </ul>
        <div className="total">
          <LazyLoadImage  src={up} alt="" />
          <div className="p">
            <p className="t">Всего 5 999 руб.</p>
            <p className="under">Включая налоги</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
