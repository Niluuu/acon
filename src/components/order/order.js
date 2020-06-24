import React, { Component } from "react";
import right from "../../assets/images/order/white-arrow.png";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Order extends Component {
  state = {
    name: "",
    lastName: "",
    phone: "+9989",
    email: "",
    question: "",
  };
  componentDidMount() {
        window.scrollTo(0, 0);

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
            <LazyLoadImage  src={back} alt="" className="back_to" />
          </Link>
          <p className="title">ОФОРМЛЕНИЕ ЗАКАЗА</p>
        </div>
        <div className="profile_page details_page">
          <label htmlFor="name">ИМЯ </label>
          <br />
          <input
            value={this.state.name}
            name="name"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="name">ФАМИЛИЯ</label>
          <br />
          <input
            value={this.state.name}
            name="lastName"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="email">ЭЛЕКТРОННАЯ ПОЧТА</label> <br />
          <input
            value={this.state.email}
            name="email"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="phone">ТЕЛЕФОН</label> <br />
          <input
            value={this.state.phone}
            name="phone"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <button className="under_btn">
            <Link to="/code" style={{ color: "#fff" }}>
              ДАЛЕЕ{" "}
            </Link>{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Order;
