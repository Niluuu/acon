import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { fetchProducts } from "../../redux/menu/action";
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {
    isOpen: false,
  };

  showSettings(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  handleClick = () => {
    this.setState({ isOpen: false });
    console.log(this.state);
  };

  render() {
    const { loading } = this.props;

    return (
      <Menu isOpen={this.state.isOpen}>
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
                    <Accordion defaultActiveKey="0">
                      {item.children &&
                        item.children.map(({ name, id }) => {
                          return (
                            <li key={Math.random()}>
                              <Link to="/category">
                                <span>{name}</span>
                              </Link>
                            </li>
                          );
                        })}
                    </Accordion>
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
