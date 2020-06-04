import React from "react";

function ContactForm() {
  return (
    <div class="contact-form-block">
      <div class="cfb-title">Связаться с нами</div>
      <form action="">
        <div class="form-file">
          <div class="upload-btn-wrapper">
            <button class="btn btn-orange">Загрузить резюме</button>
            <input type="file" name="myfile" />
          </div>
          <span>Максимум 1 файл размером не более 10 МБ</span>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group">
              <label for="">Фамилия, Имя, Отчество</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="">Тема сообщения</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="">E-mail</label>
              <input type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label for="">Телефон</label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group">
              <label for="">Дополнительная информация</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="form-control"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-default bordered">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
