import React from "react";

function TopContact() {
  return (
    <div class="top-contact-form-block">
      <div class="row">
        <div class="col-sm-6"></div>
        <div class="col-sm-3">
          <h4>Контакты</h4>
          <div class="cc-phone">
            <div>
              <a href="tel:+1234501000">+ (123) 450-10-00</a>
            </div>
            <div>
              <a href="tel:+1234501000">+ (123) 470-30-00</a>
            </div>
          </div>
          <div class="cc-email">
            <a href="mailto:example@example.com">example@example.com</a>
          </div>
          <div class="cc-address">
            Москва, ул. Летниковская, д.10, стр.5, Россия{" "}
          </div>
        </div>
        <div class="col-sm-3">
          <h4>График работы</h4>
          <div class="cc-grafik">
            <div>
              <span>Пн - Пт:</span> 10:00 - 19:00
            </div>
            <div>Обед: 13:00 - 14:00</div>
            <div>
              <span>Вс.</span> - Выходной
            </div>
          </div>
          <a href="#" class="btn btn-default bordered">
            Оставить заявку
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopContact;
