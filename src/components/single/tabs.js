import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function TabsRow({ product }) {
  console.log(product);
  const [key, setKey] = useState("Описание");
  return (
    <div className="single-tabs border-bottom ">
      <Tabs
        style={{ borderBottom: "none" }}
        id="controlled-tab-example"
        activeKey={key}
        style={{ display: "flex" }}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Описание" title="Описание">
          <div>
            <p className="title">Материал и инструкции по уходу</p>
            <p className="light">Материал</p>
            <p>{product.features && product.features.composition}</p>
            <br />
            <p className="light">Уход</p>
            <p>{product.features && product.features.care}</p>
            <br />
            <p className="light">ПОсадка</p>
            <p>Высокая</p>
            <br /> <p className="light">Корманы</p>
            <p>Принт</p>
            <br /> <p className="light">Выкройка</p>
            <p>Боковые карманы</p>
            <br />
            <p className="light">Детали</p>
            <p>Высокая</p>
            <br /> <p className="light">Артикул</p>
            <p>Принт</p>
          </div>
        </Tab>
        <Tab eventKey="Размеры" title="Размеры">
          <div>...</div>
        </Tab>
        <Tab eventKey="Доставка" title="Доставка">
          <div>...</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabsRow;
