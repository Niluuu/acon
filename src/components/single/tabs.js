import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function TabsRow() {
  const [key, setKey] = useState("Beschereibung");
  return (
    <div class="single-tabs mb-50px">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        style={{ display: "flex", flexDirection: "column" }}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="Beschereibung" title="Beschereibung">
          <div>
            <p>Material &amp; Pflegehinweise</p>
            <p>
              <strong>Material Oberstoff:</strong> 80% Baumwolle, 20% Polyester
            </p>
            <p>
              <strong>Materialkonstruktion:</strong> Sweat
            </p>
            <p>
              <strong>Pflegehinweise:</strong> Maschinenwäsche bei 40°C, nicht
              Trockner geeignet, Schonwaschgang
            </p>
            <p>
              Mehr zu diesem Produkt Tunnelzug im Bund, Softfinish innen,
              Produkt Tunnelzug im Bund, Softfinish innen
            </p>
            <p>
              <strong>Leibhhe:</strong> Hoch
            </p>
            <p>
              <strong>Hosentaschen:</strong> Print
            </p>
            <p>
              <strong>Muster:</strong> Seitentaschen
            </p>
            <p>
              <strong>Details:</strong> Elastischer Bund
            </p>
            <p>
              <strong>Artikelnummer:</strong> JL021A00S-I11
            </p>
            <div class="single-bottom-btns">
              <a href="#" class="black-link">
                Jaded London
              </a>
              <a href="#" class="btn btn-orange b-50">
                Folgen
              </a>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Passform" title="Passform">
          <div>...</div>
        </Tab>
        <Tab eventKey="Versand" title="Versand">
          <div>...</div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabsRow;
