import React, { Component } from "react";
import { connect } from "react-redux";

class OrderInfo extends Component {
  render() {
    return (
      <div className="col-sm-4">
        {this.props.data.cart && (
          <div className="shadow-container">
            <h3 className="mb-20px">Gesamtsumme</h3>
            <div className="cart-price-container">
              <div className="cpc-block">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="cpc-text">Zwischensumme</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="cpc-price">
                      {this.props.data.cart.total_price}$
                    </div>
                  </div>
                </div>
              </div>
              <div className="cpc-block">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="cpc-text">Lieferung</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="cpc-price">gratis</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cpc-block">
              <div className="row">
                <div className="col-sm-9">
                  <div className="cpc-text">
                    <strong>Gesamtsumme (inkl. MwSt.)</strong>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="cpc-price">
                    <strong> {this.props.data.cart.total_price}$</strong>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-orange w-100">
              Zur kasse
            </a>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state.cartGetReducer;
};

export default connect(mapStateToProps)(OrderInfo);
