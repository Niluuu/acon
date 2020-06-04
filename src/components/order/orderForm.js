import React from "react";

function OrderForm() {
  return (
    <div class="shadow-container">
      <h4 class="mb-20px">Адрес доставки</h4>
      <div class="zakaz-form">
        <div class="form-group">
          <label for="">Имя</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Фамилия</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Мобильный телефон</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Адрес</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="">Город</label>
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="shadow-container">
        <h4 class="mb-20px">Адрес электронной почты</h4>
        <div class="zakaz-email">company1234@gmail.com</div>
      </div>
    </div>
  );
}

export default OrderForm;
