import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGetCart } from "../redux/cartPage/getCart/action";
import cart from "../assets/images/cart.jpg";
import r from "../assets/images/remove.png";
import img from "../assets/images/tmp/c4.jpg";
import t from "../assets/images/trash.png";
import { fetchRemoveCart } from "../redux/cartPage/delateCart/action";
import { quantity } from "../redux/cartPage/quantity/action";
import { Link } from "react-router-dom";

class CartPage extends Component {
  state = {
    val: 1,
    disable: false,
  };
  componentDidMount() {
    this.props.dispatch(fetchGetCart());
  }

  handleClick = (id) => {
    this.props.dispatch(fetchRemoveCart(id));
    window.localStorage.removeItem("uid");
  };

  decr = (id) => {
    const count = this.state.val + 1;
    this.setState({ val: count });
    // this.props.dispatch(quantity(id));
  };

  incr = (id) => {
    if (this.state.val > 1) {
      const count = this.state.val - 1;
      this.setState({ val: count });
    }
    // this.props.dispatch(quantity(id));
  };

  render() {
    return (
      <React.Fragment>
        <div className="orders_page cart-container">
          <div className="profile_child">
            <p className="title">КОРЗИНА</p>
            <img src={r} alt="" className="remove" />
          </div>
          <div className="content">
            {this.props.data.cart &&
            Object.keys(this.props.data.cart).length === 0 ? (
              <div className="empty_row">
                <img src={cart} alt="" />
                <p className="title">Здесь пока пусто</p>
                <p className="under_title">
                  Вы пока ничего не добавили в корзину
                </p>
                <button className="light_btn">ВОЙТИ</button>
                <button className="dark_btn">ПРОДОЛЖИТЬ ПОКУПКИ</button>
              </div>
            ) : null}

            <div className="products">
              {this.props.data.cart &&
                this.props.data.cart.products &&
                this.props.data.cart.products.map((p) => {
                  return (
                    <div className="product d_flex">
                      <div className="img_row">
                        <img src={img} alt="" className="prod" />
                      </div>
                      <div className="info_row">
                        <div className="title_row d_flex">
                          <div className="title">
                            <p className="brand">New Balance</p>
                            <p className="name">{p.name}</p>
                          </div>
                          <img
                            src={t}
                            alt=""
                            className="remove_product"
                            onClick={() => this.handleClick(p.cart_product_id)}
                          />
                        </div>
                        <div className="info">
                          <p className="type">Джинсы</p>
                          <p className="size">Размер: 40</p>
                          <p className="color">Цвет: Pale denim</p>
                          <div className="d_flex">
                            <p className="price">{p.price}so'm</p>
                            <div className="counter d_flex">
                              <button
                                className="counter_btn incr dark_btn"
                                onClick={() => this.decr(p.id)}
                              >
                                +
                              </button>
                              <span className="count">{this.state.val}</span>
                              <button
                                className="counter_btn decr dark_btn"
                                onClick={() => this.incr(p.id)}
                                style={
                                  this.state.val === 1
                                    ? { background: "lightgrey" }
                                    : { background: "#000" }
                                }
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="total_row">
          <p className="total price">всего 356 000,00 so’m</p>
          <p className="under_total_text">
            {" "}
            Величая налоги за исключением доставки
          </p>
          <button className="dark_btn">
            <Link to="/order" style={{ color: "#fff" }}>
              КУПИТЬ
            </Link>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state.cartGetReducer;
};

export default connect(mapStateToProps)(CartPage);
