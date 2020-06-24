import React, { Component } from "react";

class OrderForm extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    // this.props.dispatch(fetchFunc(89));
  }
  render() {
    return (
      <div className="shadow-container">
        <h4 className="mb-20px">Адрес доставки</h4>
        <div className="zakaz-form">
          <div className="form-group">
            <label>Имя</label>
            <input
              name="first_name"
              value={this.props.first_name}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Фамилия</label>
            <input
              name="last_name"
              value={this.props.last_name}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Мобильный телефон</label>
            <input
              name="phone"
              value={this.props.phone}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Адрес</label>
            <input
              name="street"
              value={this.props.street}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Город</label>
            <input
              name="city"
              value={this.props.city}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
        </div>
        <div className="shadow-container">
          <h4 className="mb-20px">Адрес электронной почты</h4>
          <div className="zakaz-email">{this.props.email}</div>
        </div>
      </div>
    );
  }
}

export default OrderForm;
