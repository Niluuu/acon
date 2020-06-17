import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Sidebar />
        <Header />
        <div>
          <Switch>
            <Route path="/" exact>
              <IndexPage />
            </Route>
            <Route path="/category">
              <CategoryPage />
            </Route>
            <Route
              path="/single/:id"
              render={(props) => <SinglePage {...props} />}
            />
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
            <Route>
              <IndexPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
