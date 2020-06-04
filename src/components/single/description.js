import React from "react";
import img1 from "../../assets/images/tmp/j1.jpg";
import img2 from "../../assets/images/car-icon-ne.jpg";
import img3 from "../../assets/images/car-icon.jpg";

function Description() {
  return (
    <div className="col-sm-6">
      <div className="single-main-block">
        <h4>EXCLUSIVEPANELLED WIDE LEG - Jogginghose </h4>
        <div className="top-smb mb-10px">
          <div className="row">
            <div className="col-sm-6">
              <div className="tsmb-silver">Jaded London</div>
              <div className="tsmb-silver-second">
                Farbe: <strong>purple</strong>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="tsmb-image">
                <img src={img1} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="tmb-price">64,95 €</div>
        <div className="smb-list">
          <ul className="list-unstyled">
            <li>
              <div className="row">
                <div className="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div className="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div className="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div className="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div className="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div className="row">
                <div className="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div className="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="two-buttons-smb">
          <div className="row">
            <div className="col-sm-6">
              <button className="tb-btn">ONE SIZE </button>
            </div>
            <div className="col-sm-6">
              <a href="#" className="btn btn-orange ">
                In de n Warenkorb
              </a>
            </div>
          </div>
        </div>
        <div className="block-after-btn-smb mb-15px">
          <div className="row">
            <div className="col-sm-6">
              <div className="bab-single-one clearfix">
                <img src={img2} alt="" />
                <div className="babs-info">
                  <strong>Standard-Lieferung</strong> kostenlos 2-4 Werktage
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="bab-single-one clearfix">
                <img src={img3} alt="" />
                <div className="babs-info">
                  <strong>Express</strong> 7,90 €<br />
                  Lieferung verfügbar
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns-bottom mb-25px">
          <button className="btn-silver btn active">Все брюки</button>
          <button className="btn-silver btn">Все куртки Puma</button>
          <button className="btn-silver btn">Все куртки</button>
        </div>
        <a href="#" className=" btn normal-btn">
          Остались вопросы{" "}
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Description;
