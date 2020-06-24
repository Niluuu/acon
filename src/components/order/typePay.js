import React, { Component } from "react";
import right from "../../assets/images/order/white-arrow.png";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

class TypePay extends Component {
  state = {
    dostavka: "1",
  };
   componentDidMount() {
        window.scrollTo(0, 0);

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
      <div className="typePay">
        <div className="profile_child">
          <Link to="/cart">
            <LazyLoadImage  src={back} alt="" className="back_to" />
          </Link>
          <p className="title">ОФОРМЛЕНИЕ ЗАКАЗА</p>
        </div>

        <div className="dostavka">
          <p className="title">СПОСОБ ОПЛАТЫ</p>

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
              >
                {" "}
              </div>
            </div>
            Оплата при получении
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
            Онлайн-оплата картой (скидка 5%)
          </label>

          <button className="under_btn">
            <Link to="/payment" style={{ color: "#fff" }}>
              ОФОРМИТЬ ЗАКАЗ{" "}
            </Link>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default TypePay;
