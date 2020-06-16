import React from "react";
import Form from "react-bootstrap/Form";

function SelectCountry({ regions, selectChange }) {
  return (
    <div className="row">
      <div className="col-sm-8">
        <Form.Control
          as="select"
          size="lg"
          onChange={(e) => selectChange(e)}
        >
          {regions.map(({ name, id }) => {
            return (
              <option key={Math.random()} value={id}>
                {name}
              </option>
            );
          })}
        </Form.Control>
      </div>
    </div>
  );
}

export default SelectCountry;
