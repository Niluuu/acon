import React, { Component } from "react";
import right from "../../assets/images/order/white-arrow.png";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Order extends Component {
  state = {
    address: "",
    city: "",
    home: "",
    kv: "",
    question: "",
    dostavka: "1",
  };
  componentDidMount() {
    // this.props.dispatch(fetchFunc(89));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    this.setState({ dostavka: e.target.value });
  };

  render() {
    return (
      <div className="addressOrder">
        <div className="profile_child">
          <Link to="/cart">
            <LazyLoadImage  src={back} alt="" className="back_to" />
          </Link>
          <p className="title">ОФОРМЛЕНИЕ ЗАКАЗА</p>
        </div>
        <div className="profile_page details_page">
          <label htmlFor="name">Адрес</label>
          <br />
          <input
            value={this.state.address}
            name="address"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="name">Город</label>
          <br />
          <input
            value={this.state.city}
            name="city"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <div className="d_flex">
            <div style={{ marginRight: "10px" }}>
              <label htmlFor="email">Дом, кв</label> <br />
              <input
                value={this.state.home}
                name="home"
                type="text"
                onChange={(e) => this.handleChange(e)}
              />
              <br />
            </div>
            <div>
              <label htmlFor="phone">Кв</label> <br />
              <input
                value={this.state.kv}
                name="kv"
                type="text"
                onChange={(e) => this.handleChange(e)}
              />
              <br />
            </div>
          </div>
          <label htmlFor="question">Комментарий</label> <br />
          <textarea
            value={this.state.question}
            name="question"
            type="textarea"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
        </div>

        <div className="dostavka">
          <p className="title">ТИП ДОСТАВКИ</p>

          <label className="type_order">
            <input
              type="radio"
              value="1"
              checked={"1" === this.state.dostavka}
              onClick={(e) => this.handleClick(e)}
            />
            <div className="checkmark">
              <div
                className="checkmark_btn"
                style={
                  "1" === this.state.dostavka
                    ? { background: "#000" }
                    : { background: "#fff" }
                }
              ></div>
            </div>
            <div className="decr">
              <p className="title">Подписаться на новости и скидки</p>
              <p className="text">
                Доставка бесплатная при онлайн оплате. ИначеСтоимость доставки -
                299 руб. Торговый представитель свяжется с вами за 20-40 минут
                до доставки. У вас будет 15 минут на примерку.Если вам не
                подойдет часть товаров, вы сможетеот них отказаться. Оплата
                возможна наличнымиили картой. Ближайшая дата доставки: 23 мая
              </p>
            </div>
          </label>

          <label className="type_order">
            <input
              type="radio"
              value="2"
              checked={"2" === this.state.dostavka}
              onClick={(e) => this.handleClick(e)}
            />
            <div className="checkmark">
              <div
                className="checkmark_btn"
                style={
                  "2" === this.state.dostavka
                    ? { background: "#000" }
                    : { background: "#fff" }
                }
              ></div>
            </div>
            <div className="decr">
              <p className="title">С примеркой</p>
              <p className="text">
                Доставка бесплатная, вне зависимости{" "}
                <strong>
                  от суммы покупки. Ближайшая дата доставки: 23 мая
                </strong>
              </p>
            </div>
          </label>

          <label className="type_order">
            <input
              type="radio"
              value="3"
              checked={"3" === this.state.dostavka}
              onClick={(e) => this.handleClick(e)}
            />
            <div className="checkmark">
              <div
                className="checkmark_btn"
                style={
                  "3" === this.state.dostavka
                    ? { background: "#000" }
                    : { background: "#fff" }
                }
              ></div>
            </div>
            <div className="decr">
              <p className="title">Без примерки</p>
              <p className="text">
                Без возможности отказаться от части товаров. Доставка
                бесплатная, вне зависимости доставки: 26 мая
              </p>
            </div>
          </label>

          <label className="type_order">
            <input
              type="radio"
              value="4"
              checked={"4" === this.state.dostavka}
              onClick={(e) => this.handleClick(e)}
            />
            <div className="checkmark">
              <div
                className="checkmark_btn"
                style={
                  "4" === this.state.dostavka
                    ? { background: "#000" }
                    : { background: "#fff" }
                }
              ></div>
            </div>
            <div className="decr">
              <p className="title">В течении выбранных 15 минут, с примеркой</p>
              <p className="text">
                Доставка бесплатная при онлайн оплате. Иначестоимость доставки -
                500 руб. Торговый представитель свяжется с вами за 20-40 минут
                до доставки. У вас будет 15 минут на примерку. Если вам не
                подойдет часть товаров, вы сможетеот них отказаться. Оплата
                возможна наличными или картой. Ближайшая дата доставки: 22 мая
              </p>
            </div>
          </label>
          <button className="under_btn">
            <Link to="/typePay" style={{ color: "#fff" }}>
              ДАЛЕЕ{" "}
            </Link>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Order;
