import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import { connect } from "react-redux";
import { fetchProducts } from "../common/redux/action";
import CustomToggle from "./custumToogle";
import Spinner from "react-bootstrap/Spinner";

class Sidebar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    console.log("menu", this.props.items);
    const { items, loading, error } = this.props;
    return (
      <div>
        {loading && <Spinner animation="border" />}
        {!loading && (
          <ul className="categories-menu">
            <Accordion defaultActiveKey="0">
              {items &&
                items.map(({ name, id, children }) => {
                  return (
                    <li>
                      <CustomToggle key={Math.random()} eventKey={id}>
                        {name}
                      </CustomToggle>
                      <Accordion.Collapse eventKey={id}>
                        <nav class="categories-menu__submenu">
                          {children &&
                            children.map(({ created_at, name }) => {
                              return (
                                <a
                                  key={created_at}
                                  href="#"
                                  title={name}
                                  class="categories-menu__link categories-menu__link_sub"
                                >
                                  {name}
                                </a>
                              );
                            })}
                        </nav>
                      </Accordion.Collapse>
                    </li>
                  );
                })}
            </Accordion>
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.menuReducer.menuItems,
  loading: state.menuReducer.loading,
  error: state.menuReducer.error,
});

export default connect(mapStateToProps)(Sidebar);
