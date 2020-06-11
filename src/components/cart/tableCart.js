import React, { Component } from "react";
import img from "../../assets/images/tmp/c1.jpg";
import { connect } from "react-redux";
import { fetchRemoveCart } from "../../redux/cartPage/delateCart/action";

class TableCart extends Component {
  handleClick = (id) => {
    this.props.dispatch(fetchRemoveCart(id));
  };

  render() {
    console.log("cart TABLE", this.props.data.cart);
    return (
      <React.Fragment>
        {this.props.data.cart &&
          this.props.data.cart.cart_products.map(({ product }) => {
            return (
              <tr>
                <td>
                  <div className="cart-single-block">
                    <div className="csb-image">
                      <img src={img} alt="" />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="csb-info">
                    <div className="csb-link">A.Kjrbede</div>
                    <div className="csb-subtitle">{product.name}</div>
                    <div className="csb-info-list">
                      <div className="csb-text">Farbe: gold</div>
                      <div className="csb-text">Grobe: One Size </div>
                    </div>
                    <div className="csb-bottom">
                      <a
                        href="#"
                        className="delete"
                        onClick={() => this.handleClick(product.id)}
                      >
                        <i className="fa fa-trash-o" aria-hidden="true"></i>{" "}
                        Удалить
                      </a>
                      <a href="#">
                        <i className="fa fa-heart-o" aria-hidden="true"></i> В
                        избранное
                      </a>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="cart-counts">
                    <select name="" id="" className="sel">
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                      <option value="">1</option>
                    </select>
                    <div className="csb-price">{product.price}$</div>
                  </div>
                </td>
              </tr>
            );
          })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return state.cartGetReducer;
};

export default connect(mapStateToProps)(TableCart);
