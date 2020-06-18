import React from "react";
import i2 from "../assets/images/order/i2.png";
import i4 from "../assets/images/order/i4.png";
import i1 from "../assets/images/order/i1.png";
import i3 from "../assets/images/order/i3.png";
import m from "../assets/images/order/meter.png";
import Collapse from "../components/findOrder/collapse";
import img from "../assets/images/tmp/c4.jpg";
import black from "../assets/images/order/black-arrow.png";
import call from "../assets/images/order/call.png";
import message from "../assets/images/order/mesage.png";
import message2 from "../assets/images/order/mesage2.png";
import white from "../assets/images/order/white-arrow.png";

function FindOrderPage() {
  return (
    <div className="find">
      <div className="find_order">
        <div className="d_flex">
          <div className="type_row map">
            <div className="circle">
              <div className="img_row">
                <img src={i2} alt="" />
                <img src={i4} className="absolute" alt="" />
              </div>
            </div>
            <p>Узнать, где мой заказ</p>
          </div>
          <div className="type_row clock">
            <div className="circle">
              <div className="img_row">
                <img src={i1} alt="" />
                <img src={i3} className="absolute" alt="" />
              </div>
            </div>
            <p>Узнать срокии условия</p>
          </div>
          <div className="type_row">
            <div className="circle">
              <img src={m} alt="" />
            </div>
            <p>Выбрать размер</p>
          </div>
        </div>
      </div>
      <div className="border"></div>

      <Collapse />

      <div className="order_issued">
        <button className="message">
          <span>
            <img className="absolute" src={message} alt="" />{" "}
            <img src={message2} alt="" />{" "}
          </span>
          НАПИШИТЕ НАМ
          <span>
            <img src={black} alt="" />
          </span>
        </button>
        <button className="call">
          <span>
            <img src={call} alt="" />
          </span>
          ПОЗВОНИТЕ НАМ
          <span>
            <img src={white} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default FindOrderPage;
