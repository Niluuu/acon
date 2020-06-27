import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { fetchProducts } from "../../redux/menu/action";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import back from "../../assets/images/order/back.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import black from "../../assets/images/order/black-arrow.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      openUnderCategory: false,
      children: [],
    };
  }

  showSettings(event) {
    event.preventDefault();
    // console.log("asd", event);
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeChild() {
    this.setState({ openUnderCategory: false });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
    this.setState({ openUnderCategory: false });
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  openUnderCategory(itemId, childrenID) {
    const filt =
      this.props.items && this.props.items.filter((item) => item.id === itemId);
    const child = filt[0].children.filter((i) => i.id === childrenID);

    this.setState({ children: child });
    this.setState({ openUnderCategory: true });
  }

  render() {
    const { loading } = this.props;
    return (
      <Menu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        {loading && <Spinner animation="border" />}
        <Tabs defaultActiveKey="1" className="menu-tabs">
          {this.props.items.map((item) => {
            return (
              <Tab
                key={Math.random()}
                eventKey={item.id}
                title={item.meta_title}
              >
                <ul className="categories-menu">
                  {item.children &&
                    item.children.map(({ name, id, children }) => {
                      return (
                        <li key={Math.random()}>
                          {children.length > 0 ? (
                            <div
                              className="have-child"
                              onClick={() =>
                                this.openUnderCategory(item.id, id)
                              }
                            >
                              <div>{name}</div>{" "}
                              <LazyLoadImage src={black} alt="" />{" "}
                            </div>
                          ) : (
                            <Link to="/category">
                              <span onClick={() => this.closeMenu()}>
                                {name}
                              </span>
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  <div
                    className={
                      this.state.openUnderCategory
                        ? " under_category child_open "
                        : "under_category child_close"
                    }
                  >
                    {this.state.children &&
                      this.state.children.map((chil) => {
                        return (
                          <div>
                            <div className="child_name d_flex">
                              <LazyLoadImage
                                src={black}
                                alt=""
                                style={{ transform: "rotate(180deg)" }}
                                onClick={() => this.closeChild()}
                              />
                              <p>{chil.name} </p>
                              <span></span>{" "}
                            </div>
                            {chil.children.map((i) => {
                              return (
                                <li onClick={() => this.closeMenu()}>
                                  <Link to="/category">
                                    <span>{i.name}</span>
                                  </Link>
                                </li>
                              );
                            })}
                          </div>
                        );
                      })}
                  </div>
                </ul>
              </Tab>
            );
          })}
        </Tabs>
      </Menu>
    );
  }
}

// const UnderCategory = ({ child, open, closeMenu, closeChild }) => {
//   return (

//   );
// };

const mapStateToProps = (state) => ({
  items: state.menuReducer.menuItems,
  loading: state.menuReducer.loading,
  error: state.menuReducer.error,
});

export default connect(mapStateToProps)(Sidebar);
