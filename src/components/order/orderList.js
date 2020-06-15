import React, { Component } from "react";
import img from "../../assets/images/tmp/c1.jpg";
import { connect } from "react-redux";

class OrderList extends Component {
  render() {
    const { cart } = this.props.data;
    return (
      <div className="zakaz-right-list">
        {cart.products.map((item) => {
          return (
            <div key={Math.random()} className="single-zrl mb-35px">
              <div className="row">
                <div className="col-sm-5 col-5">
                  <div className="szrl-image">
                    <img className="img-fluid " src={img} alt="" />
                  </div>
                </div>
                <div className="col-sm-7 col-7">
                  <div className="szrl-price">{item.price}</div>
                  <div className="szrl-brand">A.Kjrbede</div>
                  <div className="szrl-info">{item.name}</div>
                  <div className="szrl-bottom">
                    <div className="szrl-color">Черный</div>
                    <div className="szrl-color">XL</div>
                  </div>
                  <div className="szrl-number">
                    Кол-во: <span>{cart.quantity}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.cartGetReducer;
};

export default connect(mapStateToProps)(OrderList);
