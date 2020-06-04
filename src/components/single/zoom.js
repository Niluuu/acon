import React from "react";
import img1 from "../../assets/images/tmp/s1.jpg";
import img2 from "../../assets/images/tmp/s2.jpg";
import zoomed from "../../assets/images/tmp/ss1.jpg";

function Zoom() {
  return (
    <div className="col-sm-6">
      <div className="flex-block">
        <div class="small-block">
          <ul>
            <li class="active ">
              <div class="sb-image-container">
                <div class="sb-image">
                  <img src={img1} alt="" />
                </div>
              </div>
            </li>
            <li>
              <div class="sb-image-container">
                <div class="sb-image">
                  <img src={img2} alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* largeBlock */}

        <div class="large-block zoom">
          <ul>
            <li class="active">
              <div class="large-photo">
                <img id="bigImg" class="bigImg" src={zoomed} alt="" />
              </div>
            </li>
            <li>
              <div class="large-photo">
                <img id="bigImg" class="bigImg" src={img1} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Zoom;
