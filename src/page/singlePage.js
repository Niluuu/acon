import React from "react";
import SimpleSlider from "../components/single/simpleSlider";
import Info from "../components/single/info";
import Description from "../components/single/description";
import ProductSlider from "../components/single/productSlider";
import img from "../assets/images/light-basket.png";
import { connect } from "react-redux";
import { fetchSingle } from "../redux/singlePage/action";
import { addCart } from "../redux/cartPage/addCart/action";
import Colors from "../components/single/colors";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Size from "../components/single/size";

class SinglePage extends React.Component {
  state = {
    colorPrice: 0,
    sizePrice: 0,
    color: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.dispatch(fetchSingle(this.props.match.params.id));
  }

  handleClick = (productID) => {
    const uid = 1;
    this.props.dispatch(addCart(productID, uid));
    const localId = window.localStorage.getItem("uid");

    if (localId === null) {
      window.localStorage.setItem("uid", JSON.stringify(uid));
    }
  };

  handlePrice = (e) => {
    this.setState({ [e.name]: e.id });
    if (e.name === "colorPrice") {
      this.setState({ color: e.className });
    }
  };

  render() {
    const { data } = this.props.singleReducer;
    return (
      <section>
        {this.props && data && data.product && (
          <div className="top-single-container mb-45px">
            <SimpleSlider product={data} />
            <Info
              product={data.product}
              size={this.state.sizePrice}
              color={this.state.colorPrice}
            />
            <Size
              product={data.product.attribute_combination.size}
              handlePrice={this.handlePrice}
            />
            <Colors
              product={data.product.attribute_combination.color}
              handlePrice={this.handlePrice}
            />
            <button
              className="add_to_cart"
              onClick={() => this.handleClick(data.product.id)}
            >
              <LazyLoadImage src={img} alt="" /> добавить В корзину
            </button>
            <Description
              product={data.product}
              d={data.delivery}
              colorName={this.state.color}
              data={data}
            />
            <ProductSlider products={data.similar_by_brand} />
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SinglePage);
