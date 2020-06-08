import React, { Component } from "react";
import Table from "../components/cart/table";
import Days from "../components/cart/days";
import OrderInfo from "../components/cart/orderInfo";
import CategoryList from "../components/category/categoryList";
import CartCategory from "../components/cart/cartCategory";
import { render } from "@testing-library/react";
import axios from "axios";

class CartPage extends Component {
  state = {
    items: {},
  };

  componentDidMount() {
    // this.props.dispatch(fetchFunc());
    axios
      .get("https://mod.uz/mdapi/v1/carts", {
        headers: {
          "cart-uid": "1",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((data) => this.setState({ items: data.data }));
  }
  render() {
    return (
      <section id="content">
        <div className="cart-container">
          <div className="container">
            <div className="row mb-30px">
              <div className="col-sm-8">
                <div className="shadow-container">
                  <h3 className="mb-20px">Warenkorb (3 Artikel)</h3>
                  <Table />
                  <div className="cart-question">
                    <a href="#">
                      <i
                        className="fa fa-exclamation-circle"
                        aria-hidden="true"
                      ></i>{" "}
                      Artikel im Warenkorb werden nicht reserviert.
                    </a>
                  </div>
                </div>
                <Days />
              </div>
              <OrderInfo />
            </div>
            <CartCategory />
          </div>
        </div>
      </section>
    );
  }
}

export default CartPage;
