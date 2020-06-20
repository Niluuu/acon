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
import OrderIssued from "./page/orderIssued";
import FindOrderPage from "./page/findOrderPage";
import FirstExamplePage from "./page/firstExamplePage";
import ProfilePage from "./page/profilePage";
import Details from "./components/profile/details";
import Orders from "./components/profile/orders";
import Address from "./components/profile/address";
import Wished from "./components/profile/wished";
import Settings from "./components/profile/settings";

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
            <Route path="/orderIssued">
              <OrderIssued />
            </Route>
            <Route path="/findOrder">
              <FindOrderPage />
            </Route>
            <Route path="/example">
              <FirstExamplePage />
            </Route>
            <Route path="/profile/details">
              <Details />
            </Route>
            <Route path="/profile/order">
              <Orders />
            </Route>
            <Route path="/profile/address">
              <Address />
            </Route>
            <Route path="/profile/wished">
              <Wished />
            </Route>
            <Route path="/profile/settings">
              <Settings />
            </Route>
            <Route path="/profile">
              <ProfilePage />
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
