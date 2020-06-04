import React from "react";
import img from "../../assets/images/tmp/wb1.png";

function Vacancy() {
  return (
    <div class="vacancy-single why-block">
      <div class="row align-items-center">
        <div class="col-sm-8">
          <div class="left-vacancy">
            <div class="wb-title">К чему мы стремимся?</div>
            <p>
              <strong>Миссия Ason</strong> — cоздать уникальное
              fashion-пространство в Сети России и СНГ и предоставить лучший
              сервис в сфере электронной коммерции.
            </p>
            <p>
              Каждый день мы стараемся сделать так, чтобы шопинг на Ason
              приносил людям удовольствие. Это требует от нас полной самоотдачи
              и нестандартных решений.
            </p>
            <p>
              <strong>Наши ценности</strong> – основа отношения к жизни и
              работе, компас, помогающий принимать решения в сложных ситуациях,
              принципы, верность которым мы храним всегда и везде. Ценности
              формируют нашу культуру и укрепляют нашу репутацию в глазах
              клиентов.
            </p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="wb-image">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
