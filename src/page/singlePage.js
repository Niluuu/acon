import React from "react";
import SimpleSlider from "../components/single/simpleSlider";
import Info from "../components/single/info";
import Description from "../components/single/description";
import ProductSlider from "../components/single/productSlider";
import img from "../assets/images/light-basket.png";
import { connect } from "react-redux";
import { fetchSingle } from "../redux/singlePage/action";
import { addCart } from "../redux/cartPage/addCart/action";

class SinglePage extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchSingle(2));
  }

  handleClick = (productID) => {
    this.props.dispatch(addCart(productID));
  };

  render() {
    const { data } = this.props;

    return (
      <section>
        {this.props && data && (
          <div className="top-single-container mb-45px">
            <SimpleSlider />
            <Info product={data} />
            <button className="add_to_cart" onClick={() => this.handleClick(2)}>
              <img src={img} alt="" /> добавить В корзину
            </button>
            <Description product={data} />
            <ProductSlider products={data.similarByBrand} />
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state.singleReducer;
};

export default connect(mapStateToProps)(SinglePage);
