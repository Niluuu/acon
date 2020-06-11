import React, { Component } from "react";
import Table from "../components/cart/table";
import Days from "../components/cart/days";
import OrderInfo from "../components/cart/orderInfo";
import CategoryList from "../components/category/categoryList";
import CartCategory from "../components/cart/cartCategory";
import axios from "axios";
import { connect } from "react-redux";
import { fetchGetCart } from "../redux/cartPage/getCart/action";

class CartPage extends Component {
  componentDidMount() {
    // const params = {
    //   product: 2,
    //   quantity: 2,
    // };
    // axios.post("https://dev.mod.uz/mdapi/v1/carts ", params, {
    //   headers: {
    //     "cart-uid": "1",
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // });
    this.props.dispatch(fetchGetCart());
  }

  render() {
    console.log("cart", this.props.data);

    return (
      <section id="content">
        <div className="cart-container">
          <div className="container">
            <div className="row mb-30px">
              <div className="col-sm-8">
                <div className="shadow-container">
                  {this.props.data.cart && this.props.data.cart.cart_products && (
                    <React.Fragment>
                      <h3 className="mb-20px">
                        Warenkorb ({this.props.data.cart.cart_products.length}
                        Artikel)
                      </h3>
                      <Table />
                    </React.Fragment>
                  )}
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

const mapStateToProps = (state) => {
  return state.cartGetReducer;
};

export default connect(mapStateToProps)(CartPage);
