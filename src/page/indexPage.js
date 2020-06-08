import React from "react";
import Content from "../components/index/content";
import { connect } from "react-redux";
import { fetchProducts } from "../components/index/redux/action";

class indexPage extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchProducts());
  // }
  render() {
    // console.log(this.props.products);
    return (
      <React.Fragment>
        <Content />
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => ({
//   products: state.products,
//   loading: state.products.loading,
//   error: state.products.error,
// });

export default indexPage;
