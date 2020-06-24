import React, { Component } from "react";
import right from "../../assets/images/order/white-arrow.png";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { Container, Form, FormCheck, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Details extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    birth: "",
  };
  componentDidMount() {
    // this.props.dispatch(fetchFunc(89));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="profile_child">
          <Link to="/profile">
            <LazyLoadImage  src={back} alt="" className="back_to" />
          </Link>
          <p className="title">Мои данные</p>
        </div>
        <div className="profile_page details_page">
          <label htmlFor="name">ИМЯ И ФАМИЛИЯ</label>
          <br />
          <input
            value={this.state.name}
            name="name"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="phone">ТЕЛЕФОН</label> <br />
          <input
            value={this.state.phone}
            name="phone"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <label htmlFor="email">EMAIL</label> <br />
          <input
            value={this.state.email}
            name="email"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <Form.Group controlId="formGridState">
            <label htmlFor="email">ПОЛ</label> <br />
            <Form.Control as="select" defaultValue="Choose...">
              <option>МУЖСКОЙ</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <label htmlFor="email">ДАТА РОЖДЕНИЯ</label> <br />
          <input
            value={this.state.email}
            name="birth"
            type="text"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <Form.Group controlId="formGridState">
            <label htmlFor="email">ГОРОД</label> <br />
            <Form.Control as="select" defaultValue="Choose...">
              <option>Tashkent</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
          <button className="under_btn">ЗАДАТЬ ВОПРОС</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
