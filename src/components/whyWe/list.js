import React from 'react'
import img1 from "../../assets/images/w1.png";
import img2 from "../../assets/images/w2.png";
import img3 from "../../assets/images/w3.png";
import img4 from "../../assets/images/w4.png";

function List() {
  return (
    <div className="why-list mb-50px">
        <div className="row">
          <div className="col-sm-3">
            <div className="why-single text-center">
              <div className="why-img"><img src={img1} alt="" className="img-fluid"/></div>
              <div className="why-title">Вовлеченность в работу</div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="why-single text-center">
              <div className="why-img"><img src={img2} alt="" className="img-fluid"/></div>
              <div className="why-title">Совместные достижения</div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="why-single text-center">
              <div className="why-img"><img src={img3} alt="" className="img-fluid"/></div>
              <div className="why-title">Стремление к совершенству</div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="why-single text-center">
              <div className="why-img"><img src={img4} alt="" className="img-fluid"/></div>
              <div className="why-title">Ориентация на клиента</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default List
