import React from "react";
import img from "../assets/images/tmp/c4.jpg";
import black from "../assets/images/order/black-arrow.png";
import call from "../assets/images/order/call.png";
import message from "../assets/images/order/mesage.png";
import message2 from "../assets/images/order/mesage2.png";
import white from "../assets/images/order/white-arrow.png";

function OrderIssued() {
  return (
    <div className="order_issued">
      <div className="order_confirm">
        <p>Ваш заказ №: 12344567 успешно оформлен</p>
        <strong>
          <p>СПАСИБО!</p>
        </strong>
      </div>
      <div className="order_info">
        <strong>
          <p className="type_send">ОТПРАВКА: СТАНДАРТНАЯ КУРЬЕРОМ</p>
        </strong>
        <p className="address">
          г. Ташкент, 100022, Яккасарайский р-он, д.15, кв.14
        </p>
        <p className="payment">Оплата при получении</p>
      </div>

      <div className="order_detail">
        <div className="d_flex  img_row">
          <img src={img} alt="" />
          <p className="name">БОСОНОЖКИ С ЛАКИРОВАННЫМИ РЕМЕШКАМИ </p>
        </div>
        <div className="d_flex">
          <p className="code">Черный - код 23432324</p>
          <p className="price">230 000 сум</p>
        </div>
        <p className="size">37</p>
      </div>
      <div className="order_price">
        <div className="d_flex">
          <p className="title">1 товар</p>
          <p className="price">230 000 сум</p>
        </div>
        <div className="d_flex">
          <p className="title">Цена доставки</p>
          <p className="price">10 000 сум</p>
        </div>
        <div className="d_flex">
          <p className="title">Скидки на отправку</p>
          <p className="price">-40 000 сум</p>
        </div>
        <div className="d_flex total_price">
          <p className="title">Всего </p>
          <p className="price">230 000 сум</p>
        </div>
      </div>

      <div className="text_row">
        <p>
          Внимание! После обработки заявки Вы получите Смс уведомление либо с
          Вами свяжется наш менеджер для подтверждения заказа
        </p>
        <p className="code">№1231245</p>
      </div>
      <button className="message">
        <span>
          <img  className="absolute" src={message} alt="" /> <img src={message2} alt="" />{" "}
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
  );
}

export default OrderIssued;
