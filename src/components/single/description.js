import React from "react";
import img1 from "../../assets/images/tmp/j1.jpg";
import img2 from "../../assets/images/car-icon-ne.jpg";
import img3 from "../../assets/images/car-icon.jpg";

function Description() {
  return (
    <div class="col-sm-6">
      <div class="single-main-block">
        <h4>EXCLUSIVEPANELLED WIDE LEG - Jogginghose </h4>
        <div class="top-smb mb-10px">
          <div class="row">
            <div class="col-sm-6">
              <div class="tsmb-silver">Jaded London</div>
              <div class="tsmb-silver-second">
                Farbe: <strong>purple</strong>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="tsmb-image">
                <img src={img1} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div class="tmb-price">64,95 €</div>
        <div class="smb-list">
          <ul class="list-unstyled">
            <li>
              <div class="row">
                <div class="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div class="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div class="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div class="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div class="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
            <li>
              <div class="row">
                <div class="col-sm-6">
                  <strong>Material Oberstoff:</strong>
                </div>
                <div class="col-sm-6">
                  <p>Jersey</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="two-buttons-smb">
          <div class="row">
            <div class="col-sm-6">
              <button class="tb-btn">ONE SIZE </button>
            </div>
            <div class="col-sm-6">
              <a href="#" class="btn btn-orange ">
                In de n Warenkorb
              </a>
            </div>
          </div>
        </div>
        <div class="block-after-btn-smb mb-15px">
          <div class="row">
            <div class="col-sm-6">
              <div class="bab-single-one clearfix">
                <img src={img2} alt="" />
                <div class="babs-info">
                  <strong>Standard-Lieferung</strong> kostenlos 2-4 Werktage
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="bab-single-one clearfix">
                <img src={img3} alt="" />
                <div class="babs-info">
                  <strong>Express</strong> 7,90 €<br />
                  Lieferung verfügbar
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="btns-bottom mb-25px">
          <button class="btn-silver btn active">Все брюки</button>
          <button class="btn-silver btn">Все куртки Puma</button>
          <button class="btn-silver btn">Все куртки</button>
        </div>
        <a href="#" class=" btn normal-btn">
          Остались вопросы{" "}
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Description;
