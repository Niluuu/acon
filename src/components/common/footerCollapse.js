import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FooterCustomToggle from "./footerCustomToggle";
import flag from "../../assets/images/flag.png";

const items = [
  { id: Math.random(), title: "ПРИЛОЖЕНИЕ MOD" },
  { id: Math.random(), title: "СПОСОБ ОПЛАТЫ" },
  { id: Math.random(), title: "ВЫБОР MOD" },
  { id: Math.random(), title: "ГЛАВНЫЕ НОВИНКИ СЕЗОНА" },
  { id: Math.random(), title: "ПОДПИШИТЕСЬ НА MOD" },
  { id: Math.random(), title: "ОБСЛУЖИВАНИЕ КЛИЕНТОВ" },
  { id: Math.random(), title: "О MOD" },
];

function FooterCollapse() {
  return (
    <div>
      <ul className="categories-menu">
        <Accordion defaultActiveKey="1">
          {items &&
            items.map(({ title, id }) => {
              return (
                <li>
                  <FooterCustomToggle key={Math.random()} eventKey={id}>
                    {title}
                  </FooterCustomToggle>
                  <Accordion.Collapse eventKey={id}>
                    <div className="col">......</div>
                  </Accordion.Collapse>
                </li>
              );
            })}
          <li className="light_collapse">
            <FooterCustomToggle key={Math.random()} eventKey={5}>
              Республика Узбекистан, UZS{" "}
              <img src={flag} style={{ marginLeft: "8px" }} />
            </FooterCustomToggle>
            <Accordion.Collapse eventKey={5}>
              <div className="col">......</div>
            </Accordion.Collapse>
          </li>
        </Accordion>
      </ul>
    </div>
  );
}

export default FooterCollapse;
