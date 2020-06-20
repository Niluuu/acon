import React from "react";
import { Container, Form, FormCheck, Button } from "react-bootstrap";
import back from "../../assets/images/order/back.png";
import { Link } from "react-router-dom";

function Settings() {
  const [swt, setSwt] = React.useState(true);
  const [swt2, setSwt2] = React.useState(true);

  return (
    <div className="settings_page">
      <div className="profile_child">
        <Link to="/profile">
          <img src={back} alt="" className="back_to" />
        </Link>
        <p className="title">Настройки</p>
      </div>
      <ul className="settings">
        <li className="d_flex">
          <p className="name">УВЕДОМЛЕНИЯ</p>
          <div className="switch">
            <FormCheck custom type="switch" size="lg">
              <FormCheck.Input isInvalid checked={swt} />
              <FormCheck.Label onClick={() => setSwt(!swt)}></FormCheck.Label>
            </FormCheck>
          </div>
        </li>
        <li className="d_flex">
          <p className="name">ПОДПИСКА НА РАССЫЛКУ</p>
          <div className="switch">
            <Form.Check custom type="switch" size="lg">
              <Form.Check.Input isInvalid checked={swt2} />
              <Form.Check.Label
                onClick={() => setSwt2(!swt2)}
              ></Form.Check.Label>
            </Form.Check>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Settings;
