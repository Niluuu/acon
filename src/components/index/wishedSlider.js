import React, { Component } from "react";
import Slider from "react-slick";
import img from "../../assets/images/tmp/c4.jpg";
import { connect } from "react-redux";

class WishedSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    const data = this.props.data[0];
    return (
      <div>
        <Slider {...settings}>
          {data &&
            data.items.map((p) => {
              return (
                <div key={Math.random()}>
                  <Product product={p} />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(WishedSlider);

const Product = ({ product }) => {
  return (
    <div className="item" style={{ marginRight: "33px" }}>
      <div className="cc-block">
        <a href="#" className="wish-icon">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        </a>
        <a href="#" className="cc-image">
          <img src={img} alt="" />
        </a>
        <div className="cc-content">
          <div className="row">
            <div className="col-sm-7">
              <a href="#" className="cc-title">
                Zara
              </a>
              <div className="cc-category">
                <a href="#">{product.title}</a>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="cc-price" style={{ textAlign: "initial" }}>
                204,95 €
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
