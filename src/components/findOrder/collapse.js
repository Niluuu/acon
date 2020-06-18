import React from "react";
import Accordion from "react-bootstrap/Accordion";
import CustomToggle from "./customToggle";

const items = [
  { id: Math.random(), title: "ДЛЯ НОВЫХ ПОЛЬЗОВАТЕЛЕЙ" },
  { id: Math.random(), title: "ДОСТАВКА" },
  { id: Math.random(), title: "ВОЗВРАТ" },
  { id: Math.random(), title: "СКИДКИ И АКЦИИ" },
  { id: Math.random(), title: "ЗАКАЗ" },
  { id: Math.random(), title: "ТОВАРЫ" },
  { id: Math.random(), title: "ОПЛАТА" },
  { id: Math.random(), title: "ТОВАРЫ ПАРТНЕРОВ" },
  { id: Math.random(), title: "ЛИЧНЫЙ КАБИНЕТ И ПОДПИСКИ" },
  { id: Math.random(), title: "РАБОТА И СОТРУДНИЧЕСТВО" },
  { id: Math.random(), title: "ОТЗЫВЫ" },
];

function Collapse() {
  return (
    <div>
      <ul className="categories-menu">
        <Accordion defaultActiveKey="1">
          {items &&
            items.map(({ title, id }) => {
              return (
                <li key={Math.random()}>
                  <CustomToggle key={Math.random()} eventKey={id}>
                    {title}
                  </CustomToggle>
                  <Accordion.Collapse eventKey={id}>
                    <div className="col">......</div>
                  </Accordion.Collapse>
                </li>
              );
            })}
        </Accordion>
      </ul>
    </div>
  );
}

export default Collapse;
