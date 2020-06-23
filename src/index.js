import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";

import "../src/assets/css/font-awesome.min.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/ar.css";
import "../src/assets/css/style.min.css";
import "../src/assets/css/sidebar.css";
import "../src/assets/css/single.css";
import "../src/assets/css/slick/slick.css";
import "../src/assets/css/slick/slick2.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { combineReducers } from "redux";
import menu from "./redux/menu/reducer";
import category from "./redux/categoryPage/reducer";
import single from "./redux/singlePage/reducer";
import home from "./redux/index/reducer";
import cartGet from "./redux/cartPage/getCart/reducer";
import order from "./redux/order/get/reducer";
import orderPost from "./redux/order/post/reducer";

const rootReducer = combineReducers({
  menuReducer: menu,
  categoryReducer: category,
  singleReducer: single,
  homeReducer: home,
  cartGetReducer: cartGet,
  orderReducer: order,
  orderPostReducer: orderPost,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  composeWithDevTools()
);

// console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
