import React, { Component } from "react";
import Banner from "../components/category/banner";
import Filter from "../components/category/filter";
import FilterMenu from "../components/category/filterMenu";
import CategoryList from "../components/category/categoryList";
import { connect } from "react-redux";
import { fetchFunc } from "../redux/categoryPage/action";

class CategoryPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(fetchFunc(89));
  }

  render() {
    const { category } = this.props;
    return (
      <section id="content" className="filter-container">
        <FilterMenu />
        {category && category.products && category.products.data && (
          <div className="category-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-10">
                  <div className="category-block">
                    <h1>Damenbekleidung</h1>
                    <Banner />
                    <Filter />
                    <CategoryList items={category.products.data} />
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
