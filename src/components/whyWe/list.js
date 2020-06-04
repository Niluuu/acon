import React from 'react'
import img1 from "../../assets/images/w1.png";
import img2 from "../../assets/images/w2.png";
import img3 from "../../assets/images/w3.png";
import img4 from "../../assets/images/w4.png";

function List() {
  return (
    <div class="why-list mb-50px">
        <div class="row">
          <div class="col-sm-3">
            <div class="why-single text-center">
              <div class="why-img"><img src={img1} alt="" class="img-fluid"/></div>
              <div class="why-title">Вовлеченность в работу</div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="why-single text-center">
              <div class="why-img"><img src={img2} alt="" class="img-fluid"/></div>
              <div class="why-title">Совместные достижения</div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="why-single text-center">
              <div class="why-img"><img src={img3} alt="" class="img-fluid"/></div>
              <div class="why-title">Стремление к совершенству</div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="why-single text-center">
              <div class="why-img"><img src={img4} alt="" class="img-fluid"/></div>
              <div class="why-title">Ориентация на клиента</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default List
