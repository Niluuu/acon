import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IndexPage from "../src/page/indexPage";
import Header from "../src/components/common/header";
import Footer from "./components/common/footer";
import CategoryPage from "./page/categoryPage";
import SinglePage from "./page/singlePage";
import CartPage from "./page/cartPage";
import OrderPage from "./page/orderPage";
import ContactPage from "./page/contactPage";
import WhyWePage from "./page/whyWePage";
import Sidebar from "./components/common/sidebar";

function App() {
  return (
    <div>
      <Sidebar />
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
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/order">
              <OrderPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/whyWe">
              <WhyWePage />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
