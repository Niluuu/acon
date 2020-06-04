import React from "react";
import Table from "../components/cart/table";
import Days from "../components/cart/days";
import OrderInfo from "../components/cart/orderInfo";
import CategoryList from "../components/category/categoryList";
import CartCategory from "../components/cart/cartCategory";

function CartPage() {
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
                    <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
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
