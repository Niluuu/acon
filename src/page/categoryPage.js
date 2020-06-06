import React, { Component } from "react";
import Banner from "../components/category/banner";
import Filter from "../components/category/filter";
import CategoryList from "../components/category/categoryList";
import { connect } from "react-redux";
import { fetchProducts } from "../components/category/redux/action";

class CategoryPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    console.log("category", this.props.category);
    return (
      <section id="content" className="mt-50px">
        <div className="category-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <div className="category-block">
                  <h1>Damenbekleidung</h1>
                  <Banner />
                  <Filter />
                  <CategoryList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categoryReducer.category,
  loading: state.categoryReducer.loading,
  error: state.categoryReducer.error,
});

export default connect(mapStateToProps)(CategoryPage);
