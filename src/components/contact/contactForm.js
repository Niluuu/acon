import React from "react";

function ContactForm() {
  return (
    <div className="contact-form-block">
      <div className="cfb-title">Связаться с нами</div>
      <form action="">
        <div className="form-file">
          <div className="upload-btn-wrapper">
            <button className="btn btn-orange">Загрузить резюме</button>
            <input type="file" name="myfile" />
          </div>
          <span>Максимум 1 файл размером не более 10 МБ</span>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label for="">Фамилия, Имя, Отчество</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label for="">Тема сообщения</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label for="">E-mail</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label for="">Телефон</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label for="">Дополнительная информация</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="form-control"
              ></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-default bordered">
          Отправить
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
