import React, { Component } from "react";
import { Link } from "react-router-dom";
import ava from "../assets/images/profile/avatar.png";
import heart from "../assets/images/profile/heart.png";
import loc from "../assets/images/profile/loc.png";
import order from "../assets/images/profile/order.png";
import people from "../assets/images/profile/people.png";
import settings from "../assets/images/profile/settings.png";
import arrow from "../assets/images/order/black-arrow.png";
import email from "../assets/images/profile/email.png";

class ProfilePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="profile_page">
        <div className="cart">
          <img src={ava} alt="" />
          <div className="cart_content">
            <p className="title">
              ЗДРАВСТВУЙТЕ, <strong>Buyer!</strong>
            </p>
            <p className="under_title">Этот раздел создан специально для вас</p>
          </div>
        </div>

        <div className="pages">
          <ul>
            <li>
              <Link to="/profile/order">
                <img src={order} alt="" className="link_icon" />
                Мои заказы <img src={arrow} alt="" className="arrow_icon" />
              </Link>
            </li>
            <li>
              <Link to="/profile/details">
                <img src={people} alt="" className="link_icon" />
                Мои данные <img src={arrow} alt="" className="arrow_icon" />
              </Link>
            </li>
            <li>
              <Link to="/profile/address">
                <img src={loc} alt="" className="link_icon" />
                Мои адреса <img src={arrow} alt="" className="arrow_icon" />
              </Link>
            </li>
            <li>
              <Link to="/profile/wished">
                <img src={heart} alt="" className="link_icon" />
                Избранные <img src={arrow} alt="" className="arrow_icon" />
              </Link>
            </li>
            <li>
              <Link to="/profile/settings">
                <img src={settings} alt="" className="link_icon" />
                Настройки <img src={arrow} alt="" className="arrow_icon" />
              </Link>
            </li>
          </ul>
        </div>

        <button className="under_btn white_btn">
          <img src={email} alt="" className="icon" />
          <span>Остались вопросы?</span>
          <img src={arrow} alt="" />
        </button>
      </div>
    );
  }
}

export default ProfilePage;
