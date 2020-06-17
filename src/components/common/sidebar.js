import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { fetchProducts } from "../../redux/menu/action";
import { connect } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
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

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
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
                {!loading && (
                  <ul className="categories-menu">
                    {item.children &&
                      item.children.map(({ name, id }) => {
                        return (
                          <li key={Math.random()}>
                            <Link to="/category">
                              <span onClick={() => this.closeMenu()}>
                                {name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                )}
              </Tab>
            );
          })}
        </Tabs>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.menuReducer.menuItems,
  loading: state.menuReducer.loading,
  error: state.menuReducer.error,
});

export default connect(mapStateToProps)(Sidebar);
