import React from "react";
import img1 from "../../assets/images/tmp/s1.jpg";
import img2 from "../../assets/images/tmp/s2.jpg";
import zoomed from "../../assets/images/tmp/ss1.jpg";

function Zoom() {
  return (
    <div className="col-sm-6">
      <div className="flex-block">
        <div className="small-block">
          <ul>
            <li className="active ">
              <div className="sb-image-container">
                <div className="sb-image">
                  <img src={img1} alt="" />
                </div>
              </div>
            </li>
            <li>
              <div className="sb-image-container">
                <div className="sb-image">
                  <img src={img2} alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* largeBlock */}

        <div className="large-block zoom">
          <ul>
            <li className="active">
              <div className="large-photo">
                <img id="bigImg" className="bigImg" src={zoomed} alt="" />
              </div>
            </li>
            <li>
              <div className="large-photo">
                <img id="bigImg" className="bigImg" src={img1} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Zoom;
