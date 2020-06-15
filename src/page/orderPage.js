import React, { Component } from "react";
import SelectCountry from "../components/order/selectCountry";
import OrderForm from "../components/order/orderForm";
import OrderedProducts from "../components/order/orderedProducts";
import Total from "../components/order/total";
import PaySlider from "../components/order/paySlider";
import { connect } from "react-redux";
import { fetchGetCart } from "../redux/cartPage/getCart/action";

class OrderPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGetCart());
  }

  render() {
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
                  <h4 className="mb-20px">Страна доставки</h4>
                  <SelectCountry />
                </div>
                <div className="shadow-container">
                  <h4 className="mb-20px">Адрес электронной почты</h4>
                  <div className="zakaz-email">company1234@gmail.com</div>
                </div>
                <OrderForm />
                {this.props.data.cart && this.props.data.cart.products && (
                  <React.Fragment>
                    <OrderedProducts
                      products={this.props.data.cart.products}
                    />
                    <Total 
                      products={this.props.data.cart.products} 
                    />
                  </React.Fragment>
                )}
                <PaySlider />
                <div className="zakaz-buttons d-md-none d-block">
                  <div className="row align-items-center">
                    <div className="col-sm-4">
                      <a href="#" className="btn btn-default bordered mb-20px">
                        Заказать
                      </a>
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
  return state.cartGetReducer;
};

export default connect(mapStateToProps)(OrderPage);
