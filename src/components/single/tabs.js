import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function TabsRow({ product, data }) {  const [key, setKey] = useState("Описание");
  const specs = product.specs && Object.keys(product.specs);
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
            {product.specs && (
              <React.Fragment>
                <br /> <p className="light">{specs[0]}</p>
                <p>{product.specs.Детали[0]}</p>
                <br /> <p className="light">{specs[1]}</p>
                <p>{product.specs.Корманы[0]}</p>
                <br />
                <p className="light">{specs[2]}</p>
                <p>{product.specs.Посадка[0]}</p>
              </React.Fragment>
            )}
          </div>
        </Tab>
        <Tab eventKey="Размеры" title="Размеры">
          <div>
            {product &&
              product.attribute_combination &&
              product.attribute_combination.size &&
              product.attribute_combination.size.values.map((s) => {
                return <p>{s.name}</p>;
              })}
          </div>
        </Tab>
        <Tab eventKey="Доставка" title="Доставка">
          <div>
            {data &&
              data.delivery.map((d) => {
                return (
                  <div>
                    <p className="light">{d.name}</p>
                    <p>{d.transit_time}</p>
                    <p>{d.price} USD</p>
                    <br />
                  </div>
                );
              })}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabsRow;
