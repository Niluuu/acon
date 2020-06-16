import React, { Component } from "react";

class OrderForm extends Component {
  render() {
    return (
      <div className="shadow-container">
        <h4 className="mb-20px">Адрес доставки</h4>
        <div className="zakaz-form">
          <div className="form-group">
            <label for="">Имя</label>
            <input
              name="first_name"
              value={this.props.first_name}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="">Фамилия</label>
            <input
              name="last_name"
              value={this.props.last_name}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="">Мобильный телефон</label>
            <input
              name="phone"
              value={this.props.phone}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="">Адрес</label>
            <input
              name="street"
              value={this.props.street}
              type="text"
              className="form-control"
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="">Город</label>
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
