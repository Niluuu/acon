import React from "react";

function OrderForm() {
  return (
    <div className="shadow-container">
      <h4 className="mb-20px">Адрес доставки</h4>
      <div className="zakaz-form">
        <div className="form-group">
          <label for="">Имя</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="">Фамилия</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="">Мобильный телефон</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="">Адрес</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label for="">Город</label>
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="shadow-container">
        <h4 className="mb-20px">Адрес электронной почты</h4>
        <div className="zakaz-email">company1234@gmail.com</div>
      </div>
    </div>
  );
}

export default OrderForm;
