import React, { Component } from "react";
import right from "../../assets/images/order/white-arrow.png";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";

class Form extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    question: "",
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
            <img src={back} alt="" className="back_to" />
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
          <label htmlFor="question">ВОПРОС</label> <br />
          <textarea
            value={this.state.question}
            name="question"
            type="textarea"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <button className="under_btn">
            ЗАДАТЬ ВОПРОС <img src={right} alt="" />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
