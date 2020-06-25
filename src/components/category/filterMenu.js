import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { fetchProducts } from "../../redux/menu/action";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import black from "../../assets/images/order/black-arrow.png";
import remove from "../../assets/images/order/black-arrow.png";
import loop from "../../assets/images/order/search.png";
import back from "../../assets/images/order/back.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FilterBrands from "./filterBrands";

const menu = [
  { name: "БРЕНД" },
  { name: "МАТЕРИАЛ" },
  { name: "РАЗМЕР, РУС." },
  { name: "СТИЛЬ" },
  { name: "ЦВЕТ" },
];
const radio = [
  { name: "ПО ПОПУЛЯРНОСТИ", id: "1" },
  { name: "ПО ВОЗРАСТАНИЮ ЦЕНЫ", id: "2" },
  { name: "ПО УБЫВАНИЮ ЦЕНЫ", id: "3" },
  { name: "НО НОВИЗНЕ", id: "4" },
];

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuSearch: false,
      allowed: ["brands"],
      filterBrands: [],
      sort: "1",
    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  back() {
    this.setState({ menuSearch: false });
  }

  sort(e) {
    this.setState({ sort: e.target.value });
  }

  open(e) {
    this.setState({ menuSearch: true });
    const allowed = [e.target.name];

    const filtered = Object.keys(this.props.filter)
      .filter((key) => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = this.props.filter[key];
        return obj;
      }, {});
    this.setState({ filterBrands: filtered });
  }

  render() {
    const { filter } = this.props;

    return (
      <div className="filter">
        <Menu
          right
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <div className="filter_menu">
            <p className="top_title">ФИЛЬТРЫ</p>
            <p className="title">ФИЛЬТРОВАТЬ</p>
            <ul>
              {filter &&
                Object.keys(filter).map((f, index) => {
                  return (
                    <li key={Math.random()}>
                      <label className="list">
                        <input
                          name={f}
                          onClick={(e) => this.open(e)}
                          type="checkbox"
                          checked={this.state.open === index}
                          style={{ display: "none" }}
                        />
                        <span style={{ textTransform: "capitalize" }}>{f}</span>
                        <LazyLoadImage src={black} alt="" />{" "}
                      </label>
                    </li>
                  );
                })}
            </ul>
            <p className="title">СОРТИРОВАТЬ</p>
            <ul>
              {radio.map(({ name, id }) => {
                return (
                  <li key={Math.random()}>
                    <label className="list">
                      <span>{name}</span>
                      <input
                        type="radio"
                        value={id}
                        checked={this.state.sort === id}
                        onClick={(e) => this.sort(e)}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="filter_menu">
            <div
              className={
                this.state.menuSearch ? "filter_search open" : "filter_search"
              }
              style={{ overflow: "scroll" }}
            >
              <div className="name_row">
                <LazyLoadImage
                  src={back}
                  className="remove"
                  onClick={() => this.back()}
                  alt=""
                />
                <p className="top_title">
                  {this.state.filterBrands &&
                    Object.keys(this.state.filterBrands)[0]}
                </p>
              </div>
              <div className="search_row">
                <LazyLoadImage src={loop} className="loop" alt="" />
                <input type="text" placeholder="Поиск" />
              </div>
              <FilterBrands filter={this.state.filterBrands} />
              <button onClick={() => this.closeMenu()} className="under_btn">
                ПРИМЕНИТЬ
              </button>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // items: state.menuReducer.menuItems,
  // loading: state.menuReducer.loading,
  // error: state.menuReducer.error,
});

export default connect(mapStateToProps)(FilterMenu);
