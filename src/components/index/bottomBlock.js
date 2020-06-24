import React from "react";
import img from "../../assets/images/tmp/bottom1.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function BottomBlock() {
  return (
    <div className="bottom-block" style={{ backgroundImage: `url(${img})` }}>
      <LazyLoadImage src={img} />
      <div className="bb-abs">
        <div className="row">
          <div className="col-sm-6">
            <h2>Personliches Styling</h2>
            <div className="bb-subtitle">Neuee Looks von Experten</div>
            <a href="#" className="btn btn-orange">
              In de n Warenkorb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBlock;
