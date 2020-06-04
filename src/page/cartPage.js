import React from "react";
import Table from "../components/cart/table";
import Days from "../components/cart/days";
import OrderInfo from "../components/cart/orderInfo";
import CategoryList from "../components/category/categoryList";
import CartCategory from "../components/cart/cartCategory";

function CartPage() {
  return (
    <section id="content">
      <div class="cart-container">
        <div class="container">
          <div class="row mb-30px">
            <div class="col-sm-8">
              <div class="shadow-container">
                <h3 class="mb-20px">Warenkorb (3 Artikel)</h3>
                <Table />
                <div class="cart-question">
                  <a href="#">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
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

export default CartPage;
