import React, { useEffect } from "react";
import black from "../assets/images/order/black-arrow.png";
import call from "../assets/images/order/call.png";
import message from "../assets/images/order/mesage.png";
import message2 from "../assets/images/order/mesage2.png";
import white from "../assets/images/order/white-arrow.png";

function FirstExamplePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="example_page">
        <p className="title">
          СНАЧАЛА ПРИМЕРЬТЕ — <br />
          <span>ПОТОМ КУПИТЕ</span>
        </p>
        <p className="text">
          Клиенты Ason могут примерить заказанную одежду и обувь перед тем, как
          принять Окончательное решение о покупке.
          <br />
          <br />
          Вы покупаете только то, что вам подошло. Остальные вещи вы можете
          отдать торговому Представителю или вернуть позже.
          <br />
          <br />
          Клиенты Ason могут примерить заказанную одежду и обувь перед тем, как
          принять Окончательное решение о покупке.
          <br />
          <br />
          Вы покупаете только то, что вам подошло. Остальные вещи вы можете
          отдать торговому Представителю или вернуть позже.
        </p>
      </div>
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
    </React.Fragment>
  );
}

export default FirstExamplePage;
