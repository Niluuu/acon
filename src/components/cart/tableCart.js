import React, { Component } from "react";
import img from "../../assets/images/tmp/c1.jpg";
import { connect } from "react-redux";
import { fetchRemoveCart } from "../../redux/cartPage/delateCart/action";
import { quantity } from "../../redux/cartPage/quantity/action";

class TableCart extends Component {
  state = {
    val: 1,
  };

  handleClick = (id) => {
    this.props.dispatch(fetchRemoveCart(id));
    window.localStorage.removeItem("uid");
  };

  handleChange = (e, id) => {
    // console.log(e.target.value, id);
    this.setState({ val: e.target.value });
    this.props.dispatch(quantity(e.target.value, id));
  };

  render() {
    return (
      <React.Fragment>
        {this.props.data.cart &&
          this.props.data.cart.products.map((item) => {
            return (
              <tr key={Math.random()}>
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
                    <div className="csb-subtitle">{item.name}</div>
                    <div className="csb-info-list">
                      <div className="csb-text">Farbe: gold</div>
                      <div className="csb-text">Grobe: One Size </div>
                    </div>
                    <div className="csb-bottom">
                      <a
                        href="#"
                        className="delete"
                        onClick={() => this.handleClick(item.cart_product_id)}
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
                    <select
                      name={item.id}
                      id=""
                      className="sel"
                      value={this.state.val}
                      onChange={(e) =>
                        this.handleChange(e, item.cart_product_id)
                      }
                    >
                      {Array.from(Array(10), (_, i) => i + 1).map((n) => {
                        return <option value={n}>{n}</option>;
                      })}
                    </select>
                    <div className="csb-price">{item.price}$</div>
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
