import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/cover.png";
import heart from "../../assets/images/h2.png";
import arrow from "../../assets/images/arrow.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toggleWished } from "../../redux/wishPage/addWished/action";
import { connect } from "react-redux";

class SimpleSlider extends Component {
  wished = (id) => {
    this.props.dispatch(toggleWished(id));
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
    };

    return (
      <div className="simple_slider">
        {this.props.product &&
          this.props.product.product &&
          this.props.product.product.images && (
            <React.Fragment>
              <img
                onClick={() => this.wished(this.props.product.product.id)}
                className="heart_icon"
                src={heart}
                alt=""
              />
              <Slider {...settings}>
                {this.props.product.product.images.map((img) => (
                  <div>
                    <img className="cover_img" src={img} />
                    <img className="arrow_icon" src={arrow} alt="" />
                  </div>
                ))}
              </Slider>
            </React.Fragment>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.homeReducer;
};

export default connect(mapStateToProps)(SimpleSlider);
