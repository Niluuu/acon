import React, { Component } from "react";
import SelectCountry from "../components/order/selectCountry";
import OrderForm from "../components/order/orderForm";
import OrderedProducts from "../components/order/orderedProducts";
import Total from "../components/order/total";
import PaySlider from "../components/order/paySlider";
import { connect } from "react-redux";
import { fetchGetCart } from "../redux/cartPage/getCart/action";
import { orderGet } from "../redux/order/get/action";
import { orderPost } from "../redux/order/post/action";

class OrderPage extends Component {
  state = {
    cart_uid: window.localStorage.getItem("uid"),
    region: 1,
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
    city: "",
    street: "",
    provider: "click",
  };

  componentDidMount() {
    this.props.dispatch(fetchGetCart());
    this.props.dispatch(orderGet());
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    this.props.dispatch(orderPost({ ...this.state }));
    this.props.dispatch(fetchGetCart());
  };

  selectChange = (e) => {
    this.setState({ region: e.target.value });
  };

  render() {
    const { data } = this.props.cartGetReducer;
    const { order } = this.props.orderReducer;
    return (
      <section id="content">
        <div className="text-center">
          <h1 className="mb-40px">Оформление Заказа</h1>
        </div>
        <div className="cart-container">
          <div className="container">
            <div className="row mb-30px">
              <div className="col-sm-8">
                <div className="shadow-container">
                  <h4 className="mb-20px">Районы доставки</h4>

                  {order && order.regions && (
                    <SelectCountry
                      regions={order.regions}
                      selectChange={this.selectChange}
                    />
                  )}
                </div>
                <div className="shadow-container">
                  <h4 className="mb-20px">Адрес электронной почты</h4>
                  <div className="zakaz-email">
                    <div className="form-group">
                      <input
                        name="email"
                        value={this.state.email}
                        type="text"
                        className="form-control"
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </div>
                </div>

                <OrderForm {...this.state} handleChange={this.handleChange} />

                {data.cart && data.cart.products && (
                  <React.Fragment>
                    <OrderedProducts products={data.cart.products} />
                    <Total products={data.cart} />
                  </React.Fragment>
                )}

                {order && order.payment && (
                  <PaySlider payment={order.payment} />
                )}

                <div className="zakaz-buttons d-md-none d-block">
                  <div className="row align-items-center">
                    <div className="col-sm-4">
                      <button
                        onClick={() => this.handleClick()}
                        className="btn btn-default bordered mb-20px"
                      >
                        Заказать
                      </button>
                    </div>
                    <div className="col-sm-8">
                      <p>
                        Размещая заказ, вы принимаете наши Правила и условия,
                        Политику конфиденциальности и Политику возврата товаров.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(OrderPage);
