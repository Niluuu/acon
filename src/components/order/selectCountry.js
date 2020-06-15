import React from "react";
import Form from "react-bootstrap/Form";
import api from "./country.json";

function SelectCountry() {
  return (
    <div className="row">
      <div className="col-sm-8">
        <Form.Control as="select" size="lg">
          {api.country.map(({ file_url, name }) => {
            return <option value={name}>{name}</option>;
          })}
        </Form.Control>
      </div>
    </div>
  );
}

export default SelectCountry;
