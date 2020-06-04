import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexPage from "../src/page/indexPage";
import Header from "../src/components/common/header";
import Footer from "./components/common/footer";
import CategoryPage from "./page/categoryPage";
import SinglePage from "./page/singlePage";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <IndexPage />
            </Route>
            <Route path="/category">
              <CategoryPage />
            </Route>
            <Route path="/single">
              <SinglePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
