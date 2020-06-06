import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import { connect } from "react-redux";
import { fetchProducts } from "../common/redux/action";
import CustomToggle from "./custumToogle";

class Sidebar extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    // console.log("props", this.props.products);
    return (
      <ul className="categories-menu">
        <Accordion defaultActiveKey="0">
          {this.props.products &&
            this.props.products.map(({ name, id, children }) => {
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
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.items,
  loading: state.menu.loading,
  error: state.menu.error,
});

export default connect(mapStateToProps)(Sidebar);
