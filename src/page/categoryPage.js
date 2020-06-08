import React, { Component } from "react";
import Banner from "../components/category/banner";
import Filter from "../components/category/filter";
import CategoryList from "../components/category/categoryList";
import { connect } from "react-redux";
import { fetchFunc } from "../components/category/redux/action";
import axios from "axios";

class CategoryPage extends Component {
  state = {
    items: {},
  };

  componentDidMount() {
    // this.props.dispatch(fetchFunc());

    axios
      .get("https://mod.uz/mdapi/v1/categories/18")
      .then((data) => this.setState({ items: data.data }));
  }

  render() {
    // console.log("category", this.props);
    const { items } = this.state;
    return (
      <section id="content" className="mt-50px">
        {items && items.products && items.products.data && (
          <div className="category-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-10">
                  <div className="category-block">
                    <h1>Damenbekleidung</h1>
                    <Banner />
                    <Filter />
                    <CategoryList items={items.products.data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return state.categoryReducer;
};

export default connect(mapStateToProps)(CategoryPage);
