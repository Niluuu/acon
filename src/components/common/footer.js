import React from "react";
import img1 from "../../assets/images/appstore-d.png";
import img2 from "../../assets/images/google-play-d.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="d-md-none d-block">
        <div className="mobile-downloads">
          <div className="row align-items-center justify-content-center">
            <div className="col-6">
              <a href="#">
                <img src={img1} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="col-6">
              <a href="#">
                <img src={img2} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-link-home">
          <a href="#">Перейти на основной сайт</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
