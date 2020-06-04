import React from "react";
import SelectCountry from "../components/order/selectCountry";
import OrderForm from "../components/order/orderForm";
import OrderedProducts from "../components/order/orderedProducts";
import Total from "../components/order/total";
import PaySlider from "../components/order/paySlider";

function OrderPage() {
  return (
    <section id="content">
      <div class="text-center">
        <h1 class="mb-40px">Оформление Заказа</h1>
      </div>
      <div class="cart-container">
        <div class="container">
          <div class="row mb-30px">
            <div class="col-sm-8">
              <div class="shadow-container">
                <h4 class="mb-20px">Страна доставки</h4>
                <SelectCountry />
              </div>
              <div class="shadow-container">
                <h4 class="mb-20px">Адрес электронной почты</h4>
                <div class="zakaz-email">company1234@gmail.com</div>
              </div>
              <OrderForm />
              <OrderedProducts />
              <Total />
              <PaySlider />
              <div class="zakaz-buttons d-md-none d-block">
                <div class="row align-items-center">
                  <div class="col-sm-4">
                    <a href="#" class="btn btn-default bordered mb-20px">
                      Заказать
                    </a>
                  </div>
                  <div class="col-sm-8">
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

export default OrderPage;
