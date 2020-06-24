import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { fetchProducts } from "../../redux/menu/action";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import black from "../../assets/images/order/black-arrow.png";
import remove from "../../assets/images/order/black-arrow.png";
import loop from "../../assets/images/order/search.png";
import check from "../../assets/images/order/check.png";
import back from "../../assets/images/order/back.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const menu = [
  { name: "БРЕНД" },
  { name: "МАТЕРИАЛ" },
  { name: "РАЗМЕР, РУС." },
  { name: "СТИЛЬ" },
  { name: "ЦВЕТ" },
];
const radio = [
  { name: "ПО ПОПУЛЯРНОСТИ" },
  { name: "ПО ВОЗРАСТАНИЮ ЦЕНЫ" },
  { name: "ПО УБЫВАНИЮ ЦЕНЫ" },
  { name: "НО НОВИЗНЕ" },
];

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuSearch: false,
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

  handleOpen() {
    this.setState({ menuSearch: true });
  }

  back() {
    this.setState({ menuSearch: false });
  }

  render() {
    const { loading } = this.props;

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
              {menu.map(({ name }) => {
                return (
                  <li key={Math.random()} onClick={(e) => this.handleOpen(e)}>
                    <div className="list">
                      <span>{name}</span>
                      <LazyLoadImage  src={black} alt="" />{" "}
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="title">СОРТИРОВАТЬ</p>
            <ul>
              {radio.map(({ name }) => {
                return (
                  <li key={Math.random()}>
                    <div className="list">
                      <span>{name}</span>
                      <input type="radio" value={name} />
                    </div>
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
            >
              <div className="name_row">
                <LazyLoadImage 
                  src={back}
                  className="remove"
                  onClick={() => this.back()}
                  alt=""
                />
                <p className="top_title">БРЕНДЫ</p>
              </div>
              <div className="search_row">
                <LazyLoadImage  src={loop} className="loop" alt="" />
                <input type="text" placeholder="Поиск" />
              </div>
              <ul>
                {menu.map(({ name }) => {
                  return (
                    <li key={Math.random()}>
                      <div className="list">
                        <span>{name}</span>
                        <LazyLoadImage  src={check} alt="" />{" "}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <button className="under_btn">ПРИМЕНИТЬ</button>
            </div>
          </div>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.menuReducer.menuItems,
  loading: state.menuReducer.loading,
  error: state.menuReducer.error,
});

export default connect(mapStateToProps)(FilterMenu);
