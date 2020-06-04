import React from "react";
import Banner from "../components/category/banner";
import Filter from "../components/category/filter";
import CategoryList from "../components/category/categoryList";
import Header from "../components/common/header";

function CategoryPage() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default CategoryPage;
