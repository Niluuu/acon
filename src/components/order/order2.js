import React, { Component } from "react";
import right from "../../assets/images/order/white-arrow.png";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";

class Order2 extends Component {
  state = {
    name: "",
  };
  componentDidMount() {
    // this.props.dispatch(fetchFunc(89));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="order_list">
        <div className="profile_child">
          <Link to="/cart">
            <img src={back} alt="" className="back_to" />
          </Link>
          <p className="title">ОФОРМЛЕНИЕ ЗАКАЗА</p>
        </div>

        <div className="clock_row">
          <p className="title">На ваш телефон отпрвлен номер подтверждения</p>
          <p className="time">05:00</p>
        </div>
        <div className="profile_page details_page">
          <label htmlFor="name">ВВЕДИТЕ НОМЕР </label>
          <br />
          <input
            value={this.state.name}
            name="name"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />

          <button className="under_btn">
            <Link to="/addressOrder" style={{ color: "#fff" }}>
              ДАЛЕЕ{" "}
            </Link>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Order2;
