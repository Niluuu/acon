import { combineReducers } from "redux";
import products from "./components/index/redux/reducer";
import menu from "./components/common/redux/reducer";

export default combineReducers({
  products,
  menu,
});
