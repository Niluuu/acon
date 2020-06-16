import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import MenuLinks from "./menuLinks";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { fetchProducts } from "../../redux/menu/action";
import { connect } from "react-redux";

class Sidebar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    return (
      <Menu>
        <Tabs defaultActiveKey="1" className="menu-tabs">
          <Tab eventKey="1" title="Женщинам">
            <MenuLinks />
          </Tab>
          <Tab eventKey="2" title="Мужчинам">
            <MenuLinks />
          </Tab>
          <Tab eventKey="3" title="Детям">
            <MenuLinks />
          </Tab>
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
